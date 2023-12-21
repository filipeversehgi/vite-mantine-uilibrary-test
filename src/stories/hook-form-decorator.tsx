import { action } from '@storybook/addon-actions';
import { useChannel } from '@storybook/addons';
import { type StoryFn } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form'

import { Box, Button, Card, Code, Text } from '@mantine/core'

import { EVENTS } from './constants'

// Borrowed from https://github.com/bbbtech/storybook-formik/blob/master/src/index.tsx
export const withReactHookForm = (StoryComponent: StoryFn, context: any) => {
    // Parameters are used for addons
    const { parameters, args } = context

    const defaultValues = {
        [args.name]: args[args.name],
        ...parameters?.form?.defaultValues,
    }

    const methods = useForm({
        defaultValues,
        resolver: parameters?.resolver,
        mode: 'onBlur',
    })

    const { handleSubmit, control } = methods

    const emit = useChannel({
        [EVENTS.REQUEST]: () => {
            void handleSubmit(
                (values) => {
                    emit(EVENTS.RESULT, values)
                },
                (errors) => {
                    emit(EVENTS.ERROR, errors)
                }
            )()
        },
    })

    emit(EVENTS.RESULT, control._defaultValues)
    emit(EVENTS.ERROR, control._formState.errors)
    emit(EVENTS.DIRTY, control._formState.dirtyFields)

    return (
        <Box mx="auto">
            <FormProvider {...methods}>
                <form id="hook-form" onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}>
                    <StoryComponent />

                    <Card my="lg" shadow="md" withBorder p="xl">
                        <Text fw="500">Form Values:</Text>
                        <Code block p="lg">
                            {JSON.stringify(methods.getValues(), null, 2)}
                        </Code>

                        <Text fw="500" mt="xl2">
                            Validation Errors:
                        </Text>
                        <Code block p="lg">
                            {JSON.stringify(methods.formState.errors, null, 2)}
                        </Code>
                    </Card>

                    <Button type="submit">Submit</Button>
                </form>
            </FormProvider>
        </Box>
    )
}

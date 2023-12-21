import { Checkbox, SimpleGrid, Switch, TextInput } from '@mantine/core'
import { IconLock, IconMail } from '@tabler/icons-react'

export function InputList({ size }: { size: 'md' | 'sm' }) {
    const conditionallyOrder = (error: any): Array<'label' | 'input' | 'error' | 'description'> =>
        error ? ['label', 'input', 'error'] : ['label', 'input', 'description']

    return (
        <>
            <SimpleGrid cols={4} my="xl">
                <TextInput
                    label="Email"
                    description="Your email"
                    size={size}
                    placeholder="Fill your best e-mail"
                    inputWrapperOrder={conditionallyOrder(false)}
                />

                <TextInput
                    leftSection={<IconMail />}
                    label="Email"
                    description="Your email"
                    value="olivia@untitledui.com"
                    size={size}
                    placeholder="Fill your best e-mail"
                    inputWrapperOrder={conditionallyOrder(false)}
                />

                <TextInput
                    label="Email"
                    description="Your email"
                    disabled
                    size={size}
                    placeholder="Fill your best e-mail"
                    inputWrapperOrder={conditionallyOrder(false)}
                />

                <TextInput
                    label="Email"
                    description="Your email"
                    rightSection={<IconLock />}
                    value="olivia.com"
                    size={size}
                    placeholder="Fill your best e-mail"
                    inputWrapperOrder={conditionallyOrder(true)}
                    error="That's fake!"
                />
            </SimpleGrid>
            <SimpleGrid cols={4} my="xl">
                <Switch label="I've read the terms" description="I swear!" size={size} />
                <Switch label="I've read the terms" description="I swear!" size={size} defaultChecked />
                <Switch label="I've read the terms" description="I swear!" size={size} disabled />
                <Switch label="I've read the terms" description="I swear!" size={size} error="That's mandatory!" />
            </SimpleGrid>
            <SimpleGrid cols={4} my="xl">
                <Checkbox label="I agree to sell my privacy" description="I swear!" size={size} />
                <Checkbox defaultChecked label="I agree to sell my privacy" description="I swear!" size={size} />
                <Checkbox disabled label="I agree to sell my privacy" description="I swear!" size={size} />
                <Checkbox
                    error="You can't agree to that!"
                    label="I agree to sell my privacy"
                    description="I swear!"
                    size={size}
                />
            </SimpleGrid>
        </>
    )
}

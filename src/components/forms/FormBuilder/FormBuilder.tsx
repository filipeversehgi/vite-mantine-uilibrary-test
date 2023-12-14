/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Control, Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Button, Grid } from '@mantine/core'

import { FieldComponentEnum, FieldLayoutEnum, IFieldAdminConfig, IModelField } from '@scaliolabs/wedplanco-sdk'

import { controlledFields, fieldLayoutConfig, fieldsComponentsConfig, fieldsTypesConfig } from './FormBuilder.config'

export type FormBuilderFieldProps = {
    control: Control<any, any>
} & IModelField

type FormBuilderProps = {
    fields: IModelField[]
    submitButtonText: string
}

function FormBuilder({ fields, submitButtonText }: FormBuilderProps) {
    const defaultValues = fields.reduce((obj, field) => ((obj[field.id] = field.default), obj), {} as any)
    const { control, handleSubmit } = useForm<any>({
        defaultValues,
    })

    const convertIModelFieldToFieldType = (fieldType: FieldComponentEnum, properties: IModelField) => {
        const fieldProps = fieldsTypesConfig[fieldType]
        const props: { [key: string]: any } = {}
        Object.keys(properties).map((prop) => {
            if (fieldProps.includes(prop as keyof IModelField)) {
                props[prop] = properties[prop as keyof IModelField]
            }
        })
        return props
    }

    const onSubmit: SubmitHandler<any> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Grid>
                {fields.map((item) => {
                    const FormBuilderComponent =
                        fieldsComponentsConfig[item.adminConfig?.component as FieldComponentEnum]
                    const isControlledField = controlledFields.includes(FormBuilderComponent)
                    return (
                        <Grid.Col
                            key={item.id}
                            span={
                                fieldLayoutConfig[(item.adminConfig as IFieldAdminConfig).layout as FieldLayoutEnum] ||
                                'auto'
                            }>
                            {isControlledField ? (
                                <Controller
                                    name={item.id}
                                    control={control}
                                    rules={{ required: item.required }}
                                    render={({ field }) => (
                                        <FormBuilderComponent
                                            {...field}
                                            {...convertIModelFieldToFieldType(
                                                item.adminConfig?.component as FieldComponentEnum,
                                                item
                                            )}
                                        />
                                    )}
                                />
                            ) : (
                                <FormBuilderComponent
                                    control={control}
                                    {...convertIModelFieldToFieldType(
                                        item.adminConfig?.component as FieldComponentEnum,
                                        item
                                    )}
                                />
                            )}
                        </Grid.Col>
                    )
                })}
                <Grid.Col span={12}>
                    <Button type="submit">{submitButtonText}</Button>
                </Grid.Col>
            </Grid>
        </form>
    )
}

export default FormBuilder

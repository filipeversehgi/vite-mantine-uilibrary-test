/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColSpan } from '@mantine/core/lib/Grid/Col/Col.styles'

import { FieldComponentEnum, IModelField } from '@scaliolabs/wedplanco-sdk'

import {
    CheckboxInput,
    TextInput,
    TextAreaInput,
    PasswordInput,
    SelectInput,
    MultiSelectInput,
    SwitchInput,
    CalendarInput,
    RadioInput,
    FileInput,
} from '@/components/forms'

const fieldsComponentsConfig: {
    [key in FieldComponentEnum]: any
} = {
    radio: RadioInput,
    switch: SwitchInput,
    select: SelectInput,
    multiSelect: MultiSelectInput,
    checkBox: CheckboxInput,
    tag: MultiSelectInput,
    text: TextInput,
    number: TextInput,
    textArea: TextAreaInput,
    password: PasswordInput,
    datePicker: CalendarInput,
    mediaUploader: FileInput,
    fileInput: FileInput,
}

const commonProps: Array<keyof IModelField> = ['id', 'label', 'helperText', 'required']

const fieldsTypesConfig: { [key in FieldComponentEnum]: Array<keyof IModelField> } = {
    radio: [...commonProps, 'placeholder', 'enumValues'],
    switch: commonProps,
    select: [...commonProps, 'placeholder', 'enumValues'],
    multiSelect: [...commonProps, 'placeholder', 'enumValues'],
    checkBox: commonProps,
    tag: [...commonProps, 'placeholder', 'enumValues'],
    text: [...commonProps, 'placeholder', 'type', 'validations'],
    number: [...commonProps, 'placeholder', 'type', 'validations'],
    textArea: [...commonProps, 'placeholder', 'validations'],
    password: [...commonProps, 'placeholder', 'validations'],
    datePicker: [...commonProps, 'placeholder'],
    mediaUploader: [...commonProps, 'placeholder'],
    fileInput: [...commonProps, 'placeholder'],
}

const fieldLayoutConfig: { [key: string]: ColSpan } = {
    halfWidth: 6,
    fullWidth: 12,
    fillWidth: 'auto',
}

const controlledFields = [SelectInput, MultiSelectInput, RadioInput, FileInput, CalendarInput]

export { fieldsComponentsConfig, fieldsTypesConfig, fieldLayoutConfig, controlledFields }

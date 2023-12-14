import { useController } from 'react-hook-form'

import { Checkbox } from '@mantine/core'

import { HFCheckboxInputProps } from './CheckboxInput.types'

function CheckboxInput({ id, label, helperText, required, control, ...props }: HFCheckboxInputProps) {
    const { field } = useController({
        control,
        name: id,
        defaultValue: false,
        rules: {
            required: required,
        },
    })

    return <Checkbox id={id} label={label} description={helperText} {...field} {...props} />
}

export default CheckboxInput

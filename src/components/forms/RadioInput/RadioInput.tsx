import { forwardRef, ForwardRefRenderFunction } from 'react'

import { Radio, Stack } from '@mantine/core'

import { useStyles } from './RadioInput.styles'
import { RadioInputProps } from './RadioInput.types'

const RadioInput: ForwardRefRenderFunction<HTMLInputElement, RadioInputProps> = (
    { id, label, placeholder, required, helperText, enumValues, name, ...props },
    ref
) => {
    const { classes } = useStyles()

    return (
        <Radio.Group
            id={id}
            required={required}
            label={label}
            placeholder={placeholder}
            description={helperText}
            ref={ref}
            name={name}
            {...props}>
            <Stack spacing="sm" mt="xs">
                {enumValues.map((item) => (
                    <Radio className={classes.radioItem} key={item.value} value={item.value} label={item.label} />
                ))}
            </Stack>
        </Radio.Group>
    )
}

export default forwardRef(RadioInput)

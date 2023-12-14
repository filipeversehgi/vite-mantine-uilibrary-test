import { forwardRef, ForwardRefRenderFunction } from 'react'

import { ColorInput as InputColor } from '@mantine/core'

import { ColorInputProps } from './ColorInput.types'

const ColorInput: ForwardRefRenderFunction<HTMLInputElement, ColorInputProps> = (
    { id, label, required, placeholder, helperText, onChange, onBlur, name, ...props },
    ref
) => {
    return (
        <InputColor
            id={id}
            label={label}
            required={required}
            placeholder={placeholder}
            description={helperText}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            ref={ref}
            {...props}
        />
    )
}

export default forwardRef(ColorInput)

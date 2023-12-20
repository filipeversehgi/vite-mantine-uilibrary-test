import { forwardRef, ForwardRefRenderFunction } from 'react';

import { Radio, Stack } from '@mantine/core';

import { RadioInputProps } from './RadioInput.types';

import classes from './RadioInput.module.css';

const RadioInput: ForwardRefRenderFunction<HTMLInputElement, RadioInputProps> = (
  { id, label, placeholder, required, helperText, enumValues, name, ...props },
  ref
) => {
  return (
    <Radio.Group
      id={id}
      required={required}
      label={label}
      placeholder={placeholder}
      description={helperText}
      ref={ref}
      name={name}
      {...props}
    >
      <Stack gap="sm" mt="xs">
        {enumValues.map((item) => (
          <Radio
            className={classes.radioItem}
            key={item.value}
            value={item.value}
            label={item.label}
          />
        ))}
      </Stack>
    </Radio.Group>
  );
};

export default forwardRef(RadioInput);

import { forwardRef, ForwardRefRenderFunction } from 'react';

import { FileInput as InputFile } from '@mantine/core';

import { FileInputProps } from './FileInput.types';

const $FileInput: ForwardRefRenderFunction<HTMLButtonElement, FileInputProps> = (
  { id, label, required, placeholder, helperText, onChange, onBlur, name, ...props },
  ref
) => {
  return (
    <InputFile
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
  );
};

export const FileInput = forwardRef($FileInput);

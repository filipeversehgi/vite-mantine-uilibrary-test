import { FieldValues, useController } from 'react-hook-form';

import { Select } from '@mantine/core';
import { LabelInput } from '@/components/inputs/LabelInput';

import { SelectInputProps } from './SelectInput.types';
import { withCheckmark } from '../WithCheckmark/WithCheckmark';

 function $SelectInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  label,
  ...props
}: SelectInputProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <Select
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      error={fieldState.error?.message}
      label={<LabelInput label={label} required={props.required} disabled={props.disabled} />}
      styles={{ section: { pointerEvents: 'none' } }}
      nothingFoundMessage="No options"
      {...props}
      {...field}
      onBlur={(event) => {
        if (fieldState.isDirty) {
          field.onBlur();
        }
        props?.onBlur && props.onBlur(event);
      }}
    />
  );
}

export const SelectInput = withCheckmark($SelectInput);

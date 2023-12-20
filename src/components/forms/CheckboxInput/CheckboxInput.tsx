import { FieldValues, useController } from 'react-hook-form';

import { Checkbox } from '@mantine/core';

import { HFCheckboxInputProps } from './CheckboxInput.types';

export function CheckboxInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: HFCheckboxInputProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController({
    control,
    name,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <Checkbox
      error={fieldState.error?.message}
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
}

import { memo, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { NumberInput, useMantineTheme } from '@mantine/core';

import { LabelInput } from '@/components/inputs/LabelInput';
import { IconCheck } from '@/components/icons/untitled-ui';
import { useKeyDownEventListener } from '@/hooks/useKeyDownEventListener';

import { HFNumberInputProps } from './NumberInput.types';
import { withCheckmark } from '../WithCheckmark/WithCheckmark';

function HFNumberInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  label,
  onChange,
  ...props
}: HFNumberInputProps<T>) {
  const { ref } = useKeyDownEventListener({
    allowedCodes: ['Backspace', 'Enter', 'Tab'],
    allowedKeys: [',', '.'],
  });

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
    <NumberInput
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      error={fieldState.error?.message}
      label={<LabelInput disabled={props.disabled} required={props.required} label={label} />}
      {...field}
      {...props}
      onBlur={(event) => {
        if (fieldState.isDirty) {
          field.onBlur();
        }
        props?.onBlur && props.onBlur(event);
      }}
      ref={ref}
    />
  );
}

const NumberInputWithCheckmark = withCheckmark(HFNumberInput);

export default memo(NumberInputWithCheckmark);

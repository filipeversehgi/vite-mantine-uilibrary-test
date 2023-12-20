import { FieldValues, useController } from 'react-hook-form';

import { DateInput } from '@mantine/dates';

import { IconCalendar } from '@/components/icons/untitled-ui';

import { withCheckmark } from '../WithCheckmark/WithCheckmark';
import { CalendarInputProps } from './CalendarInput.types';

function $CalendarInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  shouldUnregister,
  onChange,
  withCheckmark,
  rules,
  ...props
}: CalendarInputProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, onBlur, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <DateInput
      error={fieldState.error?.message}
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      leftSection={<IconCalendar />}
      {...field}
      {...props}
    />
  );
}

export const CalendarInput = withCheckmark($CalendarInput);

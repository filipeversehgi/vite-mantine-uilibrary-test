import { FieldValues, useController } from 'react-hook-form';

import { DateInput } from '@mantine/dates';

import { IconCalendar } from '@/components/icons/untitled-ui';

import { withCheckmark } from '../WithCheckmark/WithCheckmark';
import { CalendarInputProps } from './CalendarInput.types';

// function CalendarInput<T extends FieldValues>({
//   name,
//   control,
//   defaultValue,
//   shouldUnregister,
//   onChange,
//   withCheckmark,
//   rules,
//   ...props
// }: CalendarInputProps<T>) {
//   const [canRenderCheckmark, setCanRenderCheckmark] = useState(false);
//   const theme = useMantineTheme();

//   const {
//     field: { value, onChange: fieldOnChange, onBlur, ...field },
//     fieldState,
//   } = useController<T>({
//     name,
//     control,
//     defaultValue,
//     rules,
//     shouldUnregister,
//   });

//   const rightCheckMark = !props.disabled &&
//     !fieldState.invalid &&
//     fieldState.isDirty &&
//     withCheckmark &&
//     canRenderCheckmark && <IconCheck color={theme.colors.green[9]} />;

//   return (
//     <DateInput
//       error={fieldState.error?.message}
//       value={value}
//       onChange={(e) => {
//         fieldOnChange(e);
//         onChange?.(e);
//       }}
//       rightSection={rightCheckMark}
//       leftSection={<IconCalendar />}
//       onBlur={(event) => {
//         if (fieldState.isDirty) {
//           onBlur();
//           setCanRenderCheckmark(event.target.value ? true : false);
//         }
//         props?.onBlur && props.onBlur(event);
//       }}
//       {...field}
//       {...props}
//     />
//   );
// }

function CalendarInput<T extends FieldValues>({
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

const CalendarInputWithCheckmark = withCheckmark(CalendarInput);

export default CalendarInputWithCheckmark;

import { memo, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { PasswordInput as $PasswordInput, Tooltip, useMantineTheme } from '@mantine/core';

import { IconEye, IconEyeOff } from '@/components/icons/untitled-ui';

import {
  HFPasswordInputProps,
  PasswordRequirementsInput,
  PasswordRequirementsProps,
} from './PasswordInput.types';
import {PasswordRequirements} from './PasswordRequirements';

export const defaultPasswordRequirements: PasswordRequirementsInput[] = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+:;=?@#|'<>.^*()%!-/_~`"{}[\]<>]/, label: 'Includes special symbol' },
  { re: /^.{8,}$/, label: '8+ characters required' },
];

function HFPasswordInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  showTooltip = false,
  shouldUnregister,
  requirements = defaultPasswordRequirements,
  onChange,
  ...props
}: HFPasswordInputProps<T>) {
  const [isTooltipOpened, setTooltipOpened] = useState(false);

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

  const theme = useMantineTheme();

  const isPasswordValid = !fieldState.invalid && fieldState.isDirty && showTooltip;

  const checks = defaultPasswordRequirements.map((requirement, index) => (
    <PasswordRequirements
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  return (
    <Tooltip
      label={isPasswordValid ? 'All good!' : checks}
      position="top-end"
      withArrow
      opened={isTooltipOpened && showTooltip}
      color={isPasswordValid ? 'teal' : undefined}
    >
      <$PasswordInput
        value={value}
        onChange={(e) => {
          fieldOnChange(e);
          onChange?.(e);
        }}
        error={fieldState.error?.message}
        {...field}
        {...props}
        visibilityToggleIcon={({ reveal }) =>
          reveal ? (
            <IconEyeOff color={theme.colors.dark[2]} />
          ) : (
            <IconEye color={theme.colors.dark[2]} />
          )
        }
        onFocus={(event) => {
          props?.onFocus && props.onFocus(event);
          setTooltipOpened(true);
        }}
        onBlur={(event) => {
          if (fieldState.isDirty) {
            field.onBlur();
          }
          props?.onBlur && props.onBlur(event);
          setTooltipOpened(false);
        }}
      />
    </Tooltip>
  );
}

export const PasswordInput = memo(HFPasswordInput);

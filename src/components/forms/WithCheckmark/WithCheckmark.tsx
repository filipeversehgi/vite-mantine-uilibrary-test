import { IconCheck } from '@/components/icons/untitled-ui';
import { useMantineTheme } from '@mantine/core';
import React, { useState } from 'react';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

export type WithCheckmarkProps = {
  withCheckmark: boolean;
};

export type WithCheckmarkParams<T extends FieldValues> = UseControllerProps<T> & {
  rightSection: React.ReactNode;
  onBlur?: React.FocusEventHandler<T>;
};

export const withCheckmark =
  <T extends FieldValues, P>(Component: React.ComponentType<P & WithCheckmarkParams<T>>) =>
  ({ rightSection, onBlur, ...props }: P & WithCheckmarkParams<T> & WithCheckmarkProps) => {
    const [canRenderCheckmark, setCanRenderCheckmark] = useState(false);
    const theme = useMantineTheme();

    const {
      field: { onBlur: fieldOnBlur },
      fieldState,
    } = useController<T>({
      name: props.name,
      control: props.control,
      defaultValue: props.defaultValue,
      rules: props.rules,
      shouldUnregister: props.shouldUnregister,
    });

    const rightCheckMark = !props.disabled &&
      !fieldState.invalid &&
      fieldState.isDirty &&
      props.withCheckmark &&
      canRenderCheckmark && <IconCheck color={theme.colors.green[8]} />;

    return (
      <Component
        rightSection={rightCheckMark}
        onBlur={(event) => {
          if (fieldState.isDirty) {
            fieldOnBlur();
            setCanRenderCheckmark(event.target.value ? true : false);
          }
          onBlur && onBlur(event);
        }}
        {...props}
      />
    );
  };

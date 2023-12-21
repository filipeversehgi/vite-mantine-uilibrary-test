import React, { FC, useState } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { useMantineTheme } from '@mantine/core';

import { IconCheck } from '@/components/icons/untitled-ui';

export type WithCheckmarkProps = {
    withCheckmark: boolean
}

export type WithCheckmarkParams<T extends FieldValues> = UseControllerProps<T> & {
    rightSection?: React.ReactNode
    onBlur?: React.FocusEventHandler<T>
}

export const withCheckmark =
    <T extends FieldValues, P extends WithCheckmarkParams<T>>(WrappedComponent: FC<P>) =>
    (props: P & WithCheckmarkProps) => {
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
            <WrappedComponent
              {...props}
              rightSection={rightCheckMark || props.rightSection}
              onBlur={(event) => {
                    if (fieldState.isDirty) {
                        fieldOnBlur();
                        setCanRenderCheckmark(!!event.target.value);
                    }
                    props.onBlur && props.onBlur(event);
                }}
            />
        );
    };

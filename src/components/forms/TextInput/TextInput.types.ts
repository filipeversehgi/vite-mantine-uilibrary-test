import { TextInputProps } from '@mantine/core';
import { FieldValues, UseControllerProps } from 'react-hook-form';


export type HFTextInputProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<TextInputProps, "value" | "defaultValue">;

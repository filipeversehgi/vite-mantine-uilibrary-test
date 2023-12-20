import { memo, useCallback, useEffect } from 'react';
import { FieldError, FieldValues, useController, useFormContext } from 'react-hook-form';

import { ActionIcon, Flex, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconEdit2, IconMonitor2, IconTrash } from '@/components/icons/untitled-ui';
import { LabelInput } from '@/components/inputs/LabelInput';
import { UploadedObject } from '@/components/overlay/UploadFileDialog/UploadFileDialog.types';

import { Avatar } from '@/components/core/Avatar';
import { UploadFileDialog } from '@/components/overlay';
import classes from './AvatarInput.module.css';
import { AvatarInputProps } from './AvatarInput.types';

function $AvatarInput<T extends FieldValues>({
  name,
  label,
  control,
  fallbackImg,
  onUpload,
  required = false,
}: AvatarInputProps<T>) {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const { setError, clearErrors, formState, setValue } = useFormContext();
  const { field, fieldState } = useController<T>({
    control,
    name,
    rules: { required: required },
  });

  const error = formState.errors[name] as FieldError | undefined;
  const { info: uploaded } = (field?.value as UploadedObject) ?? { info: undefined };

  const validateRequired = useCallback(() => {
    if (required) {
      !field.value?.info ? setError(name, { type: 'required' }) : clearErrors(name);
    }
  }, [clearErrors, field?.value?.info, name, required, setError]);

  const handleRemoveImage = () => {
    validateRequired();
    field.onChange([]);
    setValue(`${name}-dropzone`, [] as any);
  };

  useEffect(() => {
    validateRequired();
  }, [validateRequired]);

  const {
    formState: { errors },
  } = useFormContext();

  return (
    <Flex gap={'xs'} direction={'column'}>
      <LabelInput label={label} required={required} />
      <div className={classes.image}>
        <Avatar
          fallback={fallbackImg || <IconMonitor2 color={theme.colors.gray[2]} size={16} />}
          size={120}
          radius="md"
          src={uploaded?.url || ''}
          alt={uploaded?.fileName || ''}
        />
        <span>
          {uploaded && uploaded.url && (
            <ActionIcon onClick={() => handleRemoveImage()}>
              <IconTrash color="black" />
            </ActionIcon>
          )}
          <ActionIcon onClick={open}>
            <IconEdit2 color="white" />
          </ActionIcon>
          <UploadFileDialog
            id={name}
            onUpload={onUpload}
            opened={opened}
            onClose={close}
            title={''}
            accept={['PNG', 'JPG']}
            maxMbSize={2}
          />
        </span>
      </div>
      <Text fz="xs" color="red.6">
        {fieldState.error?.message}
      </Text>
    </Flex>
  );
}

export const AvatarInput = memo($AvatarInput);

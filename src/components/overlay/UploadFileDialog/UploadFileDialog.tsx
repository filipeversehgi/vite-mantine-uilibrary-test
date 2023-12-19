import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button, Grid, Modal, ScrollArea, Text } from '@mantine/core';
import { FileRejection, FileWithPath } from '@mantine/dropzone';

import LoadingButton from '@/components/core/LoadingButton/LoadingButton';
import { FileDropzoneInput } from '@/components/forms/FileDropzoneInput';

import { TranslationContext } from '@/components/core/TranslationContext';
import { UploadFileDialogProps } from './UploadFileDialog.types';

function UploadFileDialog({
  id,
  opened,
  title,
  label,
  maxMbSize,
  accept,
  onClose,
  onUpload,
  customContent,
}: UploadFileDialogProps) {
  const methods = useFormContext();
  const { dialogs: t } = useContext(TranslationContext);
  const { reset, setError, clearErrors, getValues, setValue, formState } = methods;
  const uploadButton = useRef<HTMLButtonElement | null>(null);
  const files = getValues(`${id}-dropzone`);
  const [hasPrevFile, setHasPrevFile] = useState(false);

  const handleUpload = () => {
    if (files.length === 0) {
      setError(`${id}-dropzone`, { message: t.emptyMessage.toString() });
    } else {
      clearErrors(`${id}-dropzone`);
    }

    onUpload.upload(files[0]);
    return;
  };

  const handleOnClose = () => {
    //Wait the Dialog Animation to clean the field
    setTimeout(() => {
      setValue(`${id}-dropzone`, []);
      setError(`${id}-dropzone`, { message: '' });
    }, 300);

    onClose();
  };

  const handleUpdateFiles = useCallback((files?: FileWithPath[]) => {
    setHasPrevFile((files && files.length > 0) ?? false);
    if (uploadButton.current) uploadButton.current.focus();
  }, []);

  const handleUpdateFileErrors = (filesErrors: FileRejection[]) => {
    if (filesErrors.length === 0) setError(id, { message: '' });
  };

  useEffect(() => {
    if (opened) {
      reset();
      setHasPrevFile(false);
    }
  }, [opened, reset]);

  return (
    <Modal
      centered
      title={<Text ta="center">{title}</Text>}
      opened={opened}
      onClose={handleOnClose}
      scrollAreaComponent={ScrollArea.Autosize}
      className="modal-no-scroll modal-body-scroll"
      size={440}
    >
      <Grid>
        <Grid.Col span={12}>
          <FileDropzoneInput
            id={`${id}-dropzone`}
            label={label}
            accept={accept}
            maxSizeMb={maxMbSize}
            required
            onUpdateFiles={handleUpdateFiles}
            onUpdateFilesErrors={handleUpdateFileErrors}
          />
          <Text fz="xs" color="red.7" mt="xxs">
            {formState.errors[id]?.message as string}
          </Text>
        </Grid.Col>
        {customContent && <Grid.Col span={12}>{customContent}</Grid.Col>}
        <Grid.Col span={12}>
          <LoadingButton
            ref={uploadButton}
            radius="md"
            fullWidth
            disabled={!files?.length && !hasPrevFile}
            isLoading={onUpload.isLoading}
            onClick={handleUpload}
          >
            {t.upload}
          </LoadingButton>
        </Grid.Col>
        <Grid.Col span={12} mb={0}>
          <Button
            radius="md"
            className="subtle"
            variant="subtle"
            fullWidth
            onClick={handleOnClose}
            disabled={onUpload.isLoading}
          >
            {t.cancel}
          </Button>
        </Grid.Col>
      </Grid>
    </Modal>
  );
}

export default UploadFileDialog;

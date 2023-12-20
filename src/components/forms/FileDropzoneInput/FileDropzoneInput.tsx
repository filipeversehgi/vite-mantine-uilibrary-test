import { useCallback, useContext, useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { Flex, Group, Loader, Text, useMantineTheme } from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';

import { IconAlertCircle, IconCheck, IconUploadCloud } from '@/components/icons/untitled-ui';

import { TranslationContext } from '@/components/core/TranslationContext';
import { LabelInput } from '../../inputs/LabelInput';
import classes from './FileDropzoneInput.module.css';
import { acceptConfig, FileDropzoneInputProps, FileRejection } from './FileDropzoneInput.types';
import FileDropzoneInputError from './FileDropzoneInputError/FileDropzoneInputError';
import FileDropzoneInputPreview from './FileDropzoneInputPreview/FileDropzoneInputPreview';
import FileDropzoneInputStatus from './FileDropzoneInputStatus/FileDropzoneInputStatus';

const MEGA_BYTE = 1024 ** 2;

export function FileDropzoneInput({
  id,
  label,
  accept,
  maxSizeMb,
  required = false,
  noPreview,
  isLoading,
  onUpdateFiles,
  disabled,
  boxPreview,
  onUpdateFilesErrors,
}: FileDropzoneInputProps) {
  const openRef = useRef<() => void>(null);
  const theme = useMantineTheme();
  const { dropZone: t } = useContext(TranslationContext);
  const { setValue, setError, clearErrors, control, getFieldState } = useFormContext();
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({ control, name: id, defaultValue: [], rules: { required: required } });

  const files = field.value ?? [];

  const handleSetFile = useCallback(
    (files: FileWithPath[]) => {
      setValue(id, files);
      if (files.length > 0) clearErrors(id);
      if (onUpdateFiles) onUpdateFiles(files);
    },
    [id, setValue, clearErrors, onUpdateFiles]
  );

  const getFieldError = () => {
    const contextError = getFieldState(id)?.error?.message;
    const controllerError = '';

    return controllerError || contextError;
  };

  const handleSetFileErrors = useCallback(
    (errors: FileRejection[]) => {
      if (onUpdateFilesErrors) onUpdateFilesErrors(errors);

      const getMessage = () => {
        const imageRequirements = t.requirements;
        const maxMessage = `${t.max} ${maxSizeMb}MB`;
        const formatMessage = accept.map((type, index) => {
          if (accept.length - 2 === index) {
            return `${type} `;
          } else if (accept.length - 1 === index) {
            return `${t.or} ${type}.`;
          }
          return `${type}, `;
        });
        return `${imageRequirements}: ${maxMessage}, ${formatMessage}`;
      };

      const message = errors.length > 0 ? getMessage() : '';

      if (message) {
        setError(id, { message });
      } else {
        clearErrors(id);
      }
    },
    [accept, clearErrors, id, maxSizeMb, onUpdateFilesErrors, setError, t]
  );

  const preview = files.map((file: FileWithPath, index: number) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <FileDropzoneInputPreview
        imageUrl={imageUrl}
        file={file}
        key={index}
        setFiles={handleSetFile}
        boxPreview={boxPreview}
        avatarAlt="Vendor logo"
        avatarSize={120}
        avatarBgColor="#FFF"
      />
    );
  });

  const error = getFieldError();
  const isRequiredError = fieldError?.type === 'required';

  return (
    <Flex direction="column" w="100%">
      <Text fz="sm" mb="xxs" display="flex">
        <LabelInput label={label} required={required} disabled={disabled} />
      </Text>
      {error && !isRequiredError ? (
        <FileDropzoneInputError
          setFilesErrors={handleSetFileErrors}
          errorMessage={error}
          openRef={openRef}
        />
      ) : (
        <>
          {files.length === 0 || noPreview ? (
            <Dropzone
              w={'100%'}
              id={id}
              openRef={openRef}
              onDrop={handleSetFile}
              onReject={handleSetFileErrors}
              maxSize={maxSizeMb * MEGA_BYTE}
              maxFiles={1}
              disabled={disabled}
              style={{
                borderStyle: 'solid',
                border: isRequiredError ? `1px solid ${theme.colors.red[6]}` : '',
              }}
              accept={accept.map((type) => acceptConfig[type])}
            >
              <Group align="center">
                <Dropzone.Accept>
                  <Flex direction="column" align="center" justify="center">
                    <div className={classes.iconDecoration}>
                      <IconCheck />
                    </div>
                    <FileDropzoneInputStatus accept={accept} maxSizeMb={maxSizeMb} />
                  </Flex>
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <Flex direction="column" align="center" justify="center">
                    <div className={classes.iconDecoration}>
                      <IconAlertCircle />
                    </div>
                    <FileDropzoneInputStatus accept={accept} maxSizeMb={maxSizeMb} />
                  </Flex>
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <Flex w="100%" direction="column" align="center" justify="center">
                    <div className={classes.iconDecoration}>
                      {isLoading ? <Loader /> : <IconUploadCloud color="black" />}
                    </div>
                    <FileDropzoneInputStatus accept={accept} maxSizeMb={maxSizeMb} />
                  </Flex>
                </Dropzone.Idle>
              </Group>
            </Dropzone>
          ) : (
            preview
          )}
          {isRequiredError && (
            <Text component="span" color={'red.6'} size="xs" mt={'xxs'}>
              {error}
            </Text>
          )}
        </>
      )}
    </Flex>
  );
}

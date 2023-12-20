import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { EventInfo } from '@ckeditor/ckeditor5-utils';
import { memo, useState } from 'react';
import { FieldError, useController, useFormContext } from 'react-hook-form';

import { Flex, Text } from '@mantine/core';

import { LabelInput } from '@/components/inputs/LabelInput';
import { IconCheck } from '@/components/icons/untitled-ui';

import { useStyles } from './EditorInput.styles';
import { EditorInputProps } from './EditorInput.types';

function EditorInput({
  id,
  label,
  placeholder,
  showCheckMark = true,
  required = false,
  validations,
  control,
  disabled = false,
  maxLength,
  defaultValue = '',
  toolbar = ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', '|', 'undo', 'redo'],
  ...props
}: EditorInputProps) {
  const { classes, theme } = useStyles();
  const [canRenderCheckmark, setCanRenderCheckmark] = useState(false);
  const [data] = useState(defaultValue);
  const [isDirty, setDirty] = useState(false);
  const { setValue, setError, clearErrors } = useFormContext();
  const {
    field,
    formState,
    fieldState: { invalid, error: fieldError },
  } = useController({
    control,
    name: id,
    defaultValue,
    rules: {
      required: required,
      minLength: validations?.rules?.minLength,
      maxLength: validations?.rules?.maxLength,
      pattern: new RegExp(validations?.rules?.regex || ''),
      validate: validations?.rules?.validate,
    },
  });
  const error = formState.errors[id] as FieldError | undefined;
  const handleReady = (editor: typeof ClassicEditor) => {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
  };
  const handleOnChange = (event: EventInfo<string, unknown>, editor: typeof ClassicEditor) => {
    setDirty(true);
    const value: string = editor.getData();
    if (maxLength) {
      if (value.length > maxLength) setError(id, { type: 'maxLength' });
      else clearErrors(`${id}.maxLength`);
    }
    setValue(id, value);
  };

  const handleOnBlur = (event: EventInfo<string, unknown>, editor: typeof ClassicEditor) => {
    const value = editor.getData().trim();
    setDirty(true);
    field.onChange(value);
    field.onBlur();

    if (required && value.length === 0) {
      setError(id, { type: 'required' });
    } else {
      setCanRenderCheckmark(true);
      clearErrors(`${id}.required`);
    }
    props?.onBlur && props.onBlur(event, value);
  };

  const rightCheckMark = !invalid && isDirty && showCheckMark && canRenderCheckmark && (
    <div className={classes.rightSection}>
      <IconCheck color={theme.colors.green[9]} />
    </div>
  );

  ClassicEditor.defaultConfig = {
    toolbar: {
      items: toolbar,
    },
  };

  return (
    <Flex direction={'column'} gap={'xxs'}>
      <Text fz="sm">
        <LabelInput label={label} required={required} />
      </Text>
      <div className={error ? classes.editorErrorContainer : classes.editorContainer}>
        <CKEditor
          data={data}
          disabled={disabled}
          id={id}
          editor={ClassicEditor}
          config={{ placeholder }}
          onReady={handleReady}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        {rightCheckMark}
      </div>
      <Text fz="xs" color="red.6">
        {fieldError?.message}
      </Text>
    </Flex>
  );
}

export default memo(EditorInput);

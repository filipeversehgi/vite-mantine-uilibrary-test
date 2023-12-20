import { memo, useContext } from 'react';

import { Flex, Text } from '@mantine/core';

import { TranslationContext } from '@/components/core/TranslationContext/TranslationContext';
import { LabelInputProps } from './LabelInput.types';

function $LabelInput({ label, required = false, disabled = false }: LabelInputProps) {
  if (!label) return <></>;

  const labelColor = disabled ? 'light.2' : 'light.0';
  const optionalColor = disabled ? 'light.2' : 'dark.2';

  const { forms: t } = useContext(TranslationContext);

  return (
    <Flex align="center" justify="start" direction="row" gap={4}>
      <Text component="span" color={labelColor} size="sm" fw={500}>
        {label}
      </Text>
      {!required && (
        <Text component="span" color={optionalColor} size="sm">
          ({t.optional})
        </Text>
      )}
    </Flex>
  );
}

export const LabelInput = memo($LabelInput);

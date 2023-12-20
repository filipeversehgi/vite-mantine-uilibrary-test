import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ComboBox from './ComboBox';
import { ComboBoxProps } from './ComboBox.types';

/**
 * Controlled Combobox based on Mantine MultiSelect
 */
const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  tags: ['autodocs'],
  title: 'Inputs/ComboBox',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    onChange: action('[ComboBox] onChange'),
    placeholder: 'Select something',
    options: [
      { label: 'Apples', value: 'A' },
      { label: 'Bananas', value: 'C' },
      { label: 'Oranges', value: 'O' },
    ],
    value: [],
  },
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

export const Default = () => {
  const [value, setValue] = useState<string[]>([]);

  const props: ComboBoxProps = {
    onChange: (value) => {
      setValue(value);
      action('[ComboBox] onChange')(value);
    },
    placeholder: 'Select something',
    options: [
      { label: 'Apples', value: 'A' },
      { label: 'Bananas', value: 'B' },
      { label: 'Oranges', value: 'O' },
    ],
    value,
  };

  return <ComboBox {...props} />;
};

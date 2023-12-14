import { Meta, StoryObj } from '@storybook/react';
import { IconHorse, IconLock, IconPencil } from '@tabler/icons-react';
import ButtonDropdown from './ButtonDropdown';

/**
 * ButtonDropdown with image which falls back to fixed colors based on the first letter
 */
const meta: Meta<typeof ButtonDropdown> = {
  component: ButtonDropdown,
  tags: ['autodocs'],
  title: 'Core/ButtonDropdown',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
  args: {
    label: 'Cast a Spell',
    dropdownItems: [
      { label: 'Alohomora!', onClick: () => {}, icon: <IconLock /> },
      { label: 'Expecto Pratronum', onClick: () => {}, icon: <IconHorse /> },
      { label: 'Expeliarmus!', onClick: () => {}, icon: <IconPencil /> },
    ],
    tooltip: {
      text: 'Select a spell',
      position: 'top',
    },
    position: 'bottom-start',
  },
};

export default meta;

type Story = StoryObj<typeof ButtonDropdown>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

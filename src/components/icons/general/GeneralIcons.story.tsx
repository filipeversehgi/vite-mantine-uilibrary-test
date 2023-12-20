import { GoogleIcon } from './GoogleIcon';

/**
 * General Icons used on the project
 */
const meta = {
  tags: ['autodocs'],
  title: 'Icons/General',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};

export default meta;

export const Google = () => <GoogleIcon />;

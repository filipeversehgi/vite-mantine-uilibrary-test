import { GoogleIcon } from './GoogleIcon';

/**
 * Loader that covers the entire page
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

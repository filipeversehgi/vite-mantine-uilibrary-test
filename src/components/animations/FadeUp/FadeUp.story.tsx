import { FadeUp } from './FadeUp';

export default {
  component: FadeUp,
  tags: ['autodocs'],
  title: 'Animations/FadeUp',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};

export const Default = {
  args: {
    children: 'This Text Will Fade',
    y: 10,
  },
};

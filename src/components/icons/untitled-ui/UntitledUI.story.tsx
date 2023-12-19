import { Card, SimpleGrid } from '@mantine/core';
import * as UntitledUIIcons from '.';

/**
 * Loader that covers the entire page
 */
const meta = {
  tags: ['autodocs'],
  title: 'Icons/UntitledUI',
  parameters: {
    docs: {
      inline: true,
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};

export default meta;

export const Default = () => (
  <SimpleGrid cols={5}>
    {Object.entries(UntitledUIIcons).map(([key, Component]) => (
      <Card
        withBorder
        pt="xl3"
        style={{ justifyContent: 'center', alignItems: 'center' }}
        ta="center"
        shadow="md"
      >
        <Component size={22} color="black" />
        <p>{key}</p>
      </Card>
    ))}
  </SimpleGrid>
);

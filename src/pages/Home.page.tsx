import {
  Button,
  ButtonProps,
  Card,
  Divider,
  MantineStyleProps,
  SimpleGrid,
  Text,
  TextProps,
  Title,
} from '@mantine/core';
import { IconCircle, IconLock } from '@tabler/icons-react';
import React from 'react';
import { InputList } from './InputList';

export function HomePage() {
  return (
    <>
      {/* <ColorSchemaToggle /> */}

      <Section title="Colors">
        <ColorList bg="brand" title="Brand" />
        <ColorList bg="gray" title="Gray" />
        <ColorList bg="error" title="Error" />
        <ColorList bg="warning" title="Warning" />
        <ColorList bg="success" title="Success" />
      </Section>

      <Section title="Text">
        <TypeList size="xs" title="Extra Small" />
        <TypeList size="sm" title="Small" />
        <TypeList size="md" title="Medium" />
        <TypeList size="lg" title="Large" />
        <TypeList size="xl" title="Extra Large" />
        <TypeList size="2xl" title="Extra Large x2" />
      </Section>

      <Section title="Titles">
        <TitleList />
      </Section>

      <Section title="Shadows">
        <ShadowList />
      </Section>

      <Section title="Border Radius">
        <BorderRadiusList />
      </Section>

      <Section title="Spacing List">
        <SpacingList />
      </Section>

      <Section title="Buttons">
        <ButtonList color="brand" variant="primary" />
        <ButtonList color="brand" variant="secondary" />
        <ButtonList color="brand" variant="tertiary" />
      </Section>

      <Section title="Gray Buttons">
        <ButtonList color="gray" variant="primary" />
        <ButtonList color="gray" variant="secondary" />
        <ButtonList color="gray" variant="tertiary" />
      </Section>

      <Section title="Destructive Buttons">
        <ButtonList color="error" variant="primary" />
        <ButtonList color="error" variant="secondary" />
        <ButtonList color="error" variant="tertiary" />
      </Section>

      <Section title="Input sm">
        <InputList size="sm" />
      </Section>

      <Section title="Input md">
        <InputList size="md" />
      </Section>
    </>
  );
}

export function ButtonList({
  variant,
  color,
}: {
  variant: ButtonProps['variant'];
  color: ButtonProps['color'];
}) {
  return (
    <>
      <Text size="xl" fw="500">
        {variant}
      </Text>
      <SimpleGrid cols={5} mt="md">
        {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
          <div>
            <Button
              leftSection={<IconLock />}
              rightSection={<IconCircle />}
              variant={variant}
              color={color}
              key={size}
              radius="md"
              size={size}
            >
              Button
            </Button>
          </div>
        ))}
      </SimpleGrid>
    </>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Text size="xl" fw="500">
        {title}
      </Text>

      {children}
      <Divider mt="xl" mb="xl" py="xl" color="gray.2" />
    </>
  );
}

export function Color({ bg, title }: { bg: MantineStyleProps['bg']; title: string }) {
  return (
    <Card shadow="sm" padding="lg" radius="md">
      <Card.Section bg={bg} h={50}></Card.Section>
      <Text fw={500} mt="md">
        {title}
      </Text>
    </Card>
  );
}

export function ColorList({ bg, title }: { bg: MantineStyleProps['bg']; title: string }) {
  return (
    <>
      <Text mt="md">{title}</Text>
      <SimpleGrid cols={10} mt="md">
        <Color bg={`${bg}.0`} title={`${title} 0`} />
        <Color bg={`${bg}.1`} title={`${title} 1`} />
        <Color bg={`${bg}.2`} title={`${title} 2`} />
        <Color bg={`${bg}.3`} title={`${title} 3`} />
        <Color bg={`${bg}.4`} title={`${title} 4`} />
        <Color bg={`${bg}.5`} title={`${title} 5`} />
        <Color bg={`${bg}.6`} title={`${title} 6`} />
        <Color bg={`${bg}.7`} title={`${title} 7`} />
        <Color bg={`${bg}.8`} title={`${title} 8`} />
        <Color bg={`${bg}.9`} title={`${title} 9`} />
      </SimpleGrid>
    </>
  );
}

export function ShadowList() {
  return (
    <>
      <Text mt="md">With Border</Text>
      <SimpleGrid cols={7} mt="md">
        {['xs', 'sm', 'md', 'lg', 'xl', 'xl2', 'xl3'].map((index) => (
          <Card key={index} shadow={index} padding="lg" withBorder>
            Shadow {index}
          </Card>
        ))}
      </SimpleGrid>

      <Text mt="md">Without Border</Text>
      <SimpleGrid cols={7} mt="md">
        {['xs', 'sm', 'md', 'lg', 'xl', 'xl2', 'xl3'].map((index) => (
          <Card key={index} shadow={index} padding="lg">
            Shadow {index}
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export function TypeList({ size, title }: { size: TextProps['size']; title: string }) {
  const text = 'The quick brown fox jumps over the lazy dog.';
  return (
    <>
      <Text mt="xl">{title}</Text>
      <SimpleGrid cols={4}>
        <Text size={size} fw={200}>
          {text}
        </Text>
        <Text size={size} fw={400}>
          {text}
        </Text>
        <Text size={size} fw={500}>
          {text}
        </Text>
        <Text size={size} fw={700}>
          {text}
        </Text>
      </SimpleGrid>
    </>
  );
}

export function TitleList() {
  const text = 'The quick brown fox jumps over the lazy dog.';
  return (
    <SimpleGrid cols={1} spacing="xl">
      {[1, 2, 3, 4, 5, 6].map((order: any) => (
        <Title order={order} fw={200}>
          {text}
        </Title>
      ))}
    </SimpleGrid>
  );
}

export function BorderRadiusList() {
  return (
    <>
      <SimpleGrid cols={11} mt="md">
        {['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xl2', 'xl3', 'xl4', 'full'].map((index) => (
          <Card key={index} shadow="md" padding="lg" radius={index} withBorder>
            Radius {index}
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export function SpacingList() {
  return (
    <>
      {['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xl2', 'xl3', 'xl4', 'xl5', 'xl6'].map((index) => (
        <>
          <Text mt="md">Spacing {index}</Text>
          <SimpleGrid key={index} cols={4} mt="md" spacing={index}>
            <Card shadow="md" padding="lg" withBorder>
              Ennie
            </Card>
            <Card shadow="md" padding="lg" withBorder>
              Mine
            </Card>
            <Card shadow="md" padding="lg" withBorder>
              Minnie
            </Card>
            <Card shadow="md" padding="lg" withBorder>
              Moe
            </Card>
          </SimpleGrid>
        </>
      ))}
    </>
  );
}

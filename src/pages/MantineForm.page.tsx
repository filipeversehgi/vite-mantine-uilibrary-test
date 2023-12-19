import {
  Autocomplete,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Code,
  ColorInput,
  ColorPicker,
  Container,
  FileInput,
  Flex,
  Grid,
  Group,
  Input,
  JsonInput,
  MultiSelect,
  NativeSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  TagsInput,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { FunctionComponent } from 'react';
import { z } from 'zod';

interface MantineFormProps {}

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18),
  checkbox: z.boolean(),

  chip: z.boolean(),
  chipSingle: z.string(),
  chipMulti: z.array(z.string()),
  color: z.string(),
  colorPicker: z.string(),
  json: z.string(),
  nativeSelect: z.string(),
  password: z.string(),
  pin: z.string(),
  radio: z.string(),
  rating: z.number(),
  slider: z.number(),
  textarea: z.string(),
  autocomplete: z.string(),
  multiselect: z.array(z.string()),
  select: z.string(),
  tags: z.array(z.string()),
});

const MantineForm: FunctionComponent<MantineFormProps> = () => {
  const form = useForm({
    initialValues: {
      name: 'Filipe',
      email: 'filipe@scal.io',
      age: 10,
    },
    validate: zodResolver(schema),
  });

  return (
    <Box bg="gray.1">
      <Container pt="xl5">
        <Title order={3}>Manine Form Test</Title>

        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Grid>
            <Grid.Col span={8}>
              <Card shadow="md" p="xl4" mt="xl5" withBorder>
                <Flex gap="xl2" direction="column">
                  <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="John Doe"
                    {...form.getInputProps('name')}
                  />

                  <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                  />

                  <DateInput label="Date" {...form.getInputProps('date')} />

                  <NumberInput
                    withAsterisk
                    label="Age"
                    placeholder="+18"
                    {...form.getInputProps('age')}
                  />

                  <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    {...form.getInputProps('checkbox', { type: 'checkbox' })}
                  />

                  <Input.Wrapper label="Chip" {...form.getInputProps('chip')}>
                    <Chip {...form.getInputProps('chip', { type: 'checkbox' })}>A Chip</Chip>
                  </Input.Wrapper>

                  <Input.Wrapper label="Chip: Single" {...form.getInputProps('chipSingle')}>
                    <Chip.Group {...form.getInputProps('chipSingle', { type: 'checkbox' })}>
                      <Group justify="center">
                        <Chip value="1">Single chip</Chip>
                        <Chip value="2">Can be selected</Chip>
                        <Chip value="3">At a time</Chip>
                      </Group>
                    </Chip.Group>
                  </Input.Wrapper>

                  <Input.Wrapper label="Chip: Multi" {...form.getInputProps('chipMulti')}>
                    <Chip.Group multiple {...form.getInputProps('chipMulti', { type: 'checkbox' })}>
                      <Group justify="center" mt="md">
                        <Chip value="1">Multiple chips</Chip>
                        <Chip value="2">Can be selected</Chip>
                        <Chip value="3">At a time</Chip>
                      </Group>
                    </Chip.Group>
                  </Input.Wrapper>

                  <ColorInput
                    label="Color"
                    description="Input description"
                    placeholder="Input placeholder"
                    {...form.getInputProps('color')}
                  />

                  <Input.Wrapper label="Color Picker" {...form.getInputProps('colorPicker')}>
                    <ColorPicker format="rgba" {...form.getInputProps('colorPicker')} />
                  </Input.Wrapper>

                  <FileInput
                    label="File"
                    description="Input description"
                    placeholder="Input placeholder"
                    {...form.getInputProps('file')}
                  />

                  <JsonInput
                    label="JSON"
                    placeholder="Textarea will autosize to fit the content"
                    validationError="Invalid JSON"
                    formatOnBlur
                    autosize
                    minRows={4}
                    {...form.getInputProps('json')}
                  />

                  <NativeSelect
                    label="Native Select"
                    {...form.getInputProps('nativeSelect')}
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                  />

                  <PasswordInput
                    label="Password"
                    description="Input description"
                    placeholder="Input placeholder"
                    {...form.getInputProps('password')}
                  />

                  <Input.Wrapper label="PIN" {...form.getInputProps('pin')}>
                    <PinInput {...form.getInputProps('pin')} />
                  </Input.Wrapper>

                  <Radio.Group
                    name="favoriteFramework"
                    label="Radio.Group"
                    withAsterisk
                    {...form.getInputProps('radio')}
                  >
                    <Group mt="xs">
                      <Radio value="react" label="React" />
                      <Radio value="svelte" label="Svelte" />
                      <Radio value="ng" label="Angular" />
                      <Radio value="vue" label="Vue" />
                    </Group>
                  </Radio.Group>

                  <Input.Wrapper label="Rating" {...form.getInputProps('rating')}>
                    <Rating {...form.getInputProps('rating')} defaultValue={2} />
                  </Input.Wrapper>

                  <Input.Wrapper label="Segmented Control" {...form.getInputProps('nativeSelect')}>
                    <SegmentedControl
                      {...form.getInputProps('nativeSelect')}
                      data={['React', 'Angular', 'Vue', 'Svelte']}
                    />
                  </Input.Wrapper>

                  <Input.Wrapper label="Slider" {...form.getInputProps('slider')}>
                    <Slider
                      color="blue"
                      {...form.getInputProps('slider')}
                      marks={[
                        { value: 25, label: '25%' },
                        { value: 50, label: '50%' },
                        { value: 75, label: '75%' },
                      ]}
                    />
                  </Input.Wrapper>

                  <Input.Wrapper label="Switch">
                    <Switch
                      {...form.getInputProps('checkbox', { type: 'checkbox' })}
                      label="I agree to sell my privacy"
                    />
                  </Input.Wrapper>

                  <Textarea
                    label="Autosize with 4 rows max"
                    placeholder="Autosize with 4 rows max"
                    autosize
                    minRows={2}
                    maxRows={4}
                    {...form.getInputProps('textarea')}
                  />

                  <Autocomplete
                    {...form.getInputProps('autocomplete')}
                    label="Your favorite library"
                    placeholder="Pick value or enter anything"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                  />

                  <MultiSelect
                    {...form.getInputProps('multiselect')}
                    label="Your favorite libraries"
                    placeholder="Pick value"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                  />

                  <Select
                    {...form.getInputProps('select')}
                    label="Your favorite library"
                    placeholder="Pick value"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                  />

                  <TagsInput
                    {...form.getInputProps('tags')}
                    label="Press Enter to submit a tag"
                    placeholder="Enter tag"
                  />

                  <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                  </Group>
                </Flex>
              </Card>
            </Grid.Col>

            <Grid.Col span={4}>
              <Code block mt={5} p="xl4">
                {JSON.stringify(form.values, null, 2)}
              </Code>
              <Code block mt={5} p="xl4" pt="0">
                {JSON.stringify(form.errors, null, 2)}
              </Code>
            </Grid.Col>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default MantineForm;

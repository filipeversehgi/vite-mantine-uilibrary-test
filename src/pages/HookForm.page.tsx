import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Card, Code, Container, Flex, Grid, Group, Title } from '@mantine/core';
import { FunctionComponent } from 'react';
import { Form, useForm } from 'react-hook-form';
import {
  Autocomplete,
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  FileInput,
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
  TextInput,
  Textarea,
} from 'react-hook-form-mantine';
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
  file: z.any(),
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

type FormSchemaType = z.infer<typeof schema>;

const HookForm: FunctionComponent<MantineFormProps> = () => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues: {
      name: 'Filipe',
      email: 'filipe@scal.io',
      age: 10,
    },
    resolver: zodResolver(schema),
  });

  return (
    <Box bg="gray.1">
      <Container pt="xl5">
        <Title order={3}>Hook Form Test</Title>

        <Form
          control={control}
          onSubmit={(e) => console.log(e.data)}
          onError={(e) => console.log(e)}
        >
          <Grid>
            <Grid.Col span={8}>
              <Card shadow="md" p="xl4" mt="xl5" withBorder>
                <Flex gap="xl2" direction="column">
                  <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="John Doe"
                    name="name"
                    control={control}
                  />

                  <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    name="email"
                    control={control}
                  />

                  <NumberInput
                    withAsterisk
                    label="Age"
                    placeholder="+18"
                    name="age"
                    control={control}
                  />

                  <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    name="checkbox"
                    control={control}
                  />

                  <Chip name="chip" control={control}>
                    A Chip
                  </Chip>

                  <Chip.Group name="chipSingle" control={control}>
                    <Chip.Item value="1">Single chip</Chip.Item>
                    <Chip.Item value="2">Can be selected</Chip.Item>
                    <Chip.Item value="3">At a time</Chip.Item>
                  </Chip.Group>

                  <Chip.Group name="chipMulti" control={control} multiple>
                    <Chip.Item value="1">Multiple chips</Chip.Item>
                    <Chip.Item value="2">Can be selected</Chip.Item>
                    <Chip.Item value="3">At a time</Chip.Item>
                  </Chip.Group>

                  <ColorInput
                    label="Color"
                    description="Input description"
                    placeholder="Input placeholder"
                    name="color"
                    control={control}
                  />

                  <ColorPicker format="rgba" name="colorPicker" control={control} />

                  <FileInput
                    label="File"
                    description="Input description"
                    placeholder="Input placeholder"
                    name="file"
                    control={control}
                  />

                  <JsonInput
                    label="JSON"
                    placeholder="Textarea will autosize to fit the content"
                    validationError="Invalid JSON"
                    formatOnBlur
                    autosize
                    minRows={4}
                    name="json"
                    control={control}
                  />

                  <NativeSelect
                    label="Native Select"
                    name="nativeSelect"
                    control={control}
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                  />

                  <PasswordInput
                    label="Password"
                    description="Input description"
                    placeholder="Input placeholder"
                    name="password"
                    control={control}
                  />

                  <PinInput name="pin" control={control} />

                  <Radio.Group label="Radio.Group" withAsterisk name="radio" control={control}>
                    <Radio.Item value="react" label="React" />
                    <Radio.Item value="svelte" label="Svelte" />
                    <Radio.Item value="ng" label="Angular" />
                    <Radio.Item value="vue" label="Vue" />
                  </Radio.Group>

                  <Rating name="rating" control={control} defaultValue={2} />

                  <SegmentedControl
                    name="nativeSelect"
                    control={control}
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                  />

                  <Slider
                    name="slider"
                    control={control}
                    color="blue"
                    marks={[
                      { value: 25, label: '25%' },
                      { value: 50, label: '50%' },
                      { value: 75, label: '75%' },
                    ]}
                  />

                  <Switch name="checkbox" control={control} label="I agree to sell my privacy" />

                  <Textarea
                    label="Autosize with 4 rows max"
                    placeholder="Autosize with 4 rows max"
                    autosize
                    minRows={2}
                    maxRows={4}
                    name="textarea"
                    control={control}
                  />

                  <Autocomplete
                    name="autocomplete"
                    control={control}
                    label="Your favorite library"
                    placeholder="Pick value or enter anything"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                  />

                  <MultiSelect
                    name="multiselect"
                    control={control}
                    label="Your favorite libraries"
                    placeholder="Pick value"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                  />

                  <Select
                    name="select"
                    control={control}
                    label="Your favorite library"
                    placeholder="Pick value"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                  />

                  <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                  </Group>
                </Flex>
              </Card>
            </Grid.Col>

            <Grid.Col span={4}>
              <Code block mt={5} p="xl4">
                {JSON.stringify(getValues(), null, 2)}
              </Code>
              <Code block mt={5} p="xl4" pt="0">
                {JSON.stringify(errors, null, 2)}
              </Code>
            </Grid.Col>
          </Grid>
        </Form>
      </Container>
    </Box>
  );
};

export default HookForm;

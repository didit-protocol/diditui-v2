import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Textarea, Label } from "@diditui/core";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Email",
  },
};

export const File: Story = {
  args: {
    id: "picture",
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Picture</Label>
      <Textarea {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Email",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    "placeholder": "Email",
    "value": "Genius",
    "aria-invalid": "true",
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

export const WithButton: Story = {
  args: {
    placeholder: "Email",
    id: "email",
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <div className="flex w-full max-w-sm items-center gap-2">
        <Textarea {...args} />
        <Button type="submit" size="lg" variant="secondary">
          Subscribe
        </Button>
      </div>
    </div>
  ),
};

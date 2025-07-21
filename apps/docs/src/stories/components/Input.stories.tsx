import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Input, Label } from "@diditui/core";
import { SearchStatusIcon } from "@diditui/icons-react";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "large"],
      defaultValue: "small",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
};

export const File: Story = {
  args: {
    type: "file",
    id: "picture",
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Picture</Label>
      <Input {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    type: "email",
    placeholder: "Email",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    "type": "email",
    "placeholder": "Email",
    "value": "Genius",
    "aria-invalid": "true",
    "variant": "small",
    "icon": SearchStatusIcon,
  },
  render: (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("handleChange", e);
      setValue(e.target.value);
    };
    return <Input {...args} value={value} onChange={handleChange} onClear={() => setValue("")} />;
  },
};

export const WithButton: Story = {
  args: {
    type: "email",
    placeholder: "Email",
    id: "email",
    variant: "large",
    icon: SearchStatusIcon,
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <div className="flex w-full max-w-sm items-center gap-2">
        <Input {...args} />
        <Button type="submit" size="lg" variant="secondary">
          Subscribe
        </Button>
      </div>
    </div>
  ),
};

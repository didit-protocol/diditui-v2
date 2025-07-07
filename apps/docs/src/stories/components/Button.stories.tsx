import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from "@diditui/core";
import { AddCircleIcon } from "@diditui/icons-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
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
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "destructive_secondary",
        "success",
        "ghost",
      ],
      defaultValue: "primary",
    },
    size: {
      control: "select",
      options: ["md", "lg", "icon"],
      defaultValue: "md",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Create App",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "secondary",
    children: (
      <>
        <AddCircleIcon />
        <span>Create App</span>
      </>
    ),
  },
};
export const WithIconReversed: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <AddCircleIcon />
        <span>Create App</span>
      </>
    ),
  },
};

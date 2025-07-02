import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwitchExample } from "../../examples/switch";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Switch",
  component: SwitchExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "success", "error"],
        defaultValue: "success",
      },
    },
    labelVariant: {
      control: {
        type: "select",
        options: ["large", "mid", "small", "extra-small", "styled", "bold", "input"],
      },
    },
    withIcons: {
      control: {
        type: "boolean",
        defaultValue: false,
      },
    },
  },
} satisfies Meta<typeof SwitchExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "success",
    labelVariant: "small",
    withIcons: false,
  },
};

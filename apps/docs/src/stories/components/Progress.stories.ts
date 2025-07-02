import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@diditui/core";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      control: "number",
      min: 0,
      max: 100,
      defaultValue: 50,
      step: 1,
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 50,
    className: "w-[300px]",
  },
};

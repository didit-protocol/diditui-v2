import type { Meta, StoryObj } from "@storybook/react-vite";
import { SliderExample } from "../../examples/slider";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Slider",
  component: SliderExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    tooltipBehavior: {
      control: "select",
      options: ["onDrag", "visible"],
      defaultValue: "onDrag",
    },
    isPercentage: {
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof SliderExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tooltipBehavior: "onDrag",
    isPercentage: false,
  },
};

export const SliderWithoutLabels: Story = {
  args: {
    tooltipBehavior: "onDrag",
    isPercentage: true,
    MinLabel: undefined,
    MaxLabel: undefined,
  },
};

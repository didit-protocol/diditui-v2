import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverExample, PopoverExampleWithTrigger } from "../../examples/popover";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Popover",
  component: PopoverExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PopoverExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

export const WithTrigger: Story = {
  args: {},
  render: () => <PopoverExampleWithTrigger />,
};

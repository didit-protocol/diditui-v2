import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "@diditui/core";
import { SpinnerExample } from "../../examples/spinner";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      defaultValue: "md",
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
  },
};

export const Sizes: Story = {
  args: {},
  render: () => <SpinnerExample />,
};

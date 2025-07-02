import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCardExample, HoverCardAdvanced } from "../../examples/hover-card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/HoverCard",
  component: HoverCardExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HoverCardExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Advanced: Story = {
  args: {},
  render: () => <HoverCardAdvanced />,
};

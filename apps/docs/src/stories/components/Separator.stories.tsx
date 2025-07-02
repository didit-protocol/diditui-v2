import { Separator } from "@diditui/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SeparatorExample } from "../../examples/seperator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "data-[orientation=horizontal]:w-[300px] data-[orientation=vertical]:h-[300px]",
  },
};

export const Example: Story = {
  args: {},
  render: () => <SeparatorExample />,
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  DropdownMenuDemo,
  DropdownMenuCheckboxes,
  DropdownMenuRadioGroupDemo,
} from "../../examples/dropdown";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Dropdown",
  component: DropdownMenuDemo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // autotags
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenuDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Checkboxes: Story = {
  args: {},
  render: () => <DropdownMenuCheckboxes />,
};

export const RadioGroup: Story = {
  args: {},
  render: () => <DropdownMenuRadioGroupDemo />,
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import { SelectScrollable, SelectExample, SelectExampleWithIcons } from "../../examples/select";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Select",
  component: SelectExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // autotags
  tags: ["autodocs"],
} satisfies Meta<typeof SelectExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const WithIcons: Story = {
  args: {},
  render: () => <SelectExampleWithIcons />,
};

export const Scrollable: Story = {
  args: {},
  render: () => <SelectScrollable />,
};

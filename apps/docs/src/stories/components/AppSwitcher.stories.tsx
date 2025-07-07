import type { Meta, StoryObj } from "@storybook/react-vite";

import { AppSwitcher } from "../../examples/appSwitch";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/AppSwitcher",
  component: AppSwitcher,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof AppSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    apps: [],
  },
  render: () => (
    <AppSwitcher
      apps={[
        {
          name: "Didit Corp",
          logo: "https://github.com/shadcn.png",
          kpi: "3 members - 19.234 verifications",
        },
        {
          name: "Wallapop inc",
          logo: "https://github.com/shadcn.png",
          kpi: "3 members - 19.234 verifications",
        },
        { name: "Orange", logo: "", kpi: "3 members - 19.234 verifications" },
        { name: "Maroc Telecom", logo: "https://github.com/shadcn.png", kpi: "" },
      ]}
    />
  ),
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "@diditui/core";
import { CalendarWithButtons, CalendarPopover } from "../../examples/calnedar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    numberOfMonths: {
      control: {
        type: "number",
        min: 1,
        max: 2,
      },
    },
    mode: {
      control: {
        type: "select",
        options: ["single", "range"],
      },
    },
    captionLayout: {
      control: {
        type: "select",
        options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
      },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    mode: "single",
    className: "shadow-md rounded-md border border-neutral-soft",
  },
};

export const Range: Story = {
  args: {
    mode: "range",
    captionLayout: "dropdown",
    className: "shadow-md rounded-md border border-neutral-soft",
  },
};

export const TwoMonths: Story = {
  args: {
    mode: "range",
    numberOfMonths: 2,
    className: "shadow-md rounded-md border border-neutral-soft",
  },
};

export const Popover: Story = {
  render: () => <CalendarPopover />,
};

export const RangeWithButtons: Story = {
  render: () => <CalendarWithButtons />,
};

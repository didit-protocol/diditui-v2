import type { Meta, StoryObj } from "@storybook/react";
import { CTAButton } from "@diditui/core";
import { Icon24SupportBold } from "@diditui/icons-react";


const meta: Meta<typeof CTAButton> = {
  component: CTAButton,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CTAButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <CTAButton
      {...props}
      label={'Test Button'}
      size={'large'}
      design={'filled_pink'}
      icon={<Icon24SupportBold />}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Hello
    </CTAButton>
  ),
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};

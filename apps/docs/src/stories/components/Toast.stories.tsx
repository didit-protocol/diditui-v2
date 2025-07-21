import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast, Button, Toast } from "@diditui/core";

const meta: Meta = {
  title: "Components/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div className="h-[800px]">
      <div className="flex flex-wrap gap-4">
        <Button
          variant="success"
          onClick={() =>
            toast.success({
              title: "Success!",
              description: "This is a success toast",
            })
          }
        >
          Success Toast
        </Button>

        <Button
          variant="destructive"
          onClick={() =>
            toast.error({
              title: "Error!",
              description: "This is an error toast",
            })
          }
        >
          Error Toast
        </Button>

        <Button
          onClick={() =>
            toast.info({
              title: "Info!",
              description: "This is an info toast",
            })
          }
          variant="secondary"
        >
          Info Toast
        </Button>

        <Button
          onClick={() =>
            toast.warning({
              title: "Warning!",
              description: "This is a warning toast",
            })
          }
          variant="destructive_secondary"
        >
          Warning Toast
        </Button>
        <Button
          onClick={() =>
            toast.warning({
              title: "Warning!",
            })
          }
          variant="destructive_secondary"
        >
          Warning Toast
        </Button>
      </div>
      <div className="mt-4">
        <Toast
          id="success-toast"
          title="SuccessSuccessSuccessSuccessSuccessSuccessSuccessSuccessSuccess!"
          variant="success"
          className="max-w-[300px]"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        <Toast
          id="error-toast"
          title="Error!"
          description="This is an error toast"
          variant="error"
        />
        <Toast id="info-toast" title="Info!" description="This is an info toast" variant="info" />
        <Toast
          id="warning-toast"
          title="Warning!"
          description="This is a warning toast"
          variant="warning"
        />
      </div>
    </div>
  ),
};

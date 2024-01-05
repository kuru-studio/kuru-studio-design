import type { Meta, StoryObj } from "@storybook/react";
import Example from "../components/Example/index";

const meta: Meta<typeof Example> = {
  title: "Example",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    children: "Test Example",
  },
};


import type { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";

// https://www.youtube.com/watch?v=CuGZgYo6-XY

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Light',
  tags: ['autodocs'],
  argTypes: {
    
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "green"
  }
}

export const Yellow: Story = {
  args: {
    variant: "yellow"
  }
}

/**
 * This is the red variant
 * However, we can write longer description
 * */
export const Red: Story = {
  args: {
    variant: "red"
  }
}

export const Grouped: Story = {
  render: (args) => (
    <div
      style={{
        background: 'grey',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        border: '1px solid black',
        width: 'max-content',
        padding: 10
      }}
    >
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  )
}
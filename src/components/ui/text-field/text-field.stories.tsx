import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta: Meta<typeof TextField> = {
  argTypes: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'input',
  },
}

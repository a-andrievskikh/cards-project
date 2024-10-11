import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta: Meta<typeof TextField> = {
  args: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Password',
    type: 'password',
  },
}
export const Search: Story = {
  args: {
    label: 'Label',
    placeholder: 'Search',
    type: 'search',
  },
}

export const Error: Story = {
  args: {
    errorMessage: 'Error message',
    label: 'Input with error',
    value: 'Wrong value',
  },
}

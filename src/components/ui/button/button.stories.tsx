import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta: Meta<typeof Button> = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button primary',
    disabled: false,
    variant: 'primary',
    withIcon: false,
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children: 'Button primary',
    disabled: false,
    variant: 'primary',
    withIcon: true,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button Secondary',
    disabled: false,
    variant: 'secondary',
    withIcon: false,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
    withIcon: true,
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
    withIcon: true,
  },
}

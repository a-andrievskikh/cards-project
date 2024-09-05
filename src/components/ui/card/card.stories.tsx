import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components'

import { Card } from './'

const meta: Meta<typeof Card> = {
  argTypes: {
    children: {},
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCard: Story = {
  args: {
    children: <Typography variant={'h1'}>Card</Typography>,
    style: {
      height: '300px',
      padding: '24px',
      width: '300px',
    },
  },
}

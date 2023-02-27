// MyComponent.stories.tsx
import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Avatar } from './Avatar'

export const AvatarStory: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args}  />
}

AvatarStory.args = {
  children: 'OA'
}

AvatarStory.storyName = 'MyComponent'

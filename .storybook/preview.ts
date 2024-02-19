import type { Preview } from '@storybook/react'
import '../styles/globals.scss' //Included global styles here so that they're loaded for storybooks preview window

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

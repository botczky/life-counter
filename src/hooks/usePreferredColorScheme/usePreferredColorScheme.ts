import { useMediaQuery } from '@mantine/hooks'

export default function usePreferredColorScheme() {
  return useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
}

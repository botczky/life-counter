import { Center, Box } from '@mantine/core'
import AgeContainer from '../AgeContainer'
import ColorSchemeSwitch from './ColorSchemeSwitch'

export default function MainContainer() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Center sx={{ height: '100vh' }}>
        <AgeContainer />
      </Center>
      <Box
        sx={(theme) => ({
          position: 'absolute',
          top: theme.spacing.xs,
          right: theme.spacing.xs,
        })}>
        <ColorSchemeSwitch />
      </Box>
    </Box>
  )
}

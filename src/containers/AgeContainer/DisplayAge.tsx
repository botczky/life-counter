import {
  Box,
  Group,
  ActionIcon,
  Text,
  Title,
  createStyles,
} from '@mantine/core'
import { IconX } from '@tabler/icons'
import AgeCounter from './AgeCounter'
import useAgeState from './useAgeState'

const useStyles = createStyles((theme, _params, getRef) => ({
  clearButton: {
    ref: getRef('clearButton'),
    opacity: 0,
  },

  titleWrapper: {
    cursor: 'default',

    [`&:hover .${getRef('clearButton')}`]: {
      opacity: 1,
    },
  },

  ageCounterWrapper: {
    cursor: 'default',
    fontFamily: theme.fontFamilyMonospace,
  },
}))

export default function DisplayAge() {
  const [birthdate, setBirthdate] = useAgeState()

  const { classes } = useStyles()

  return (
    <Box>
      <Group className={classes.titleWrapper}>
        <Title>AGE</Title>
        <ActionIcon
          size="sm"
          color="red"
          className={classes.clearButton}
          onClick={() => setBirthdate(null)}>
          <IconX />
        </ActionIcon>
      </Group>
      <Text className={classes.ageCounterWrapper}>
        <AgeCounter birthdate={birthdate as Date} />
      </Text>
    </Box>
  )
}

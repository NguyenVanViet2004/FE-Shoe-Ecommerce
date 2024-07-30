import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'

export const ButtonAdd = (props: ButtonProps): React.ReactElement => {
  const colors = getColors(useColorScheme())

  return (
    <Button
      {...props}
      unstyled
      backgroundColor= {colors.cornflowerBlue }
      borderBottomEndRadius= {20}
      borderTopStartRadius= {20}
      padding={12}
    >
      <Ionicons name="add" size={24} color={colors.white} />
    </Button>
  )
}

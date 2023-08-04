import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import * as Progress from 'react-native-progress';
interface Props {
  label: string
  value: number | undefined
  color: string
}
const barWidth = Dimensions.get('window').width / 1.1;
export const ProgressBarCard = (props: Props): JSX.Element => (
  <View style={styles.container}>
    <Text testID='Label'>{props.label}</Text>
    <Progress.Bar testID='ProgressBar'
      progress={props.value}
      width={barWidth}
      borderWidth={0}
      animated={true}
      animationType={'decay'}
      color={props.color}
      height={10}
      borderRadius={0}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
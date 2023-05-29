import React, {PureComponent, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  loading: boolean;
  error: string | undefined;
  token: string | undefined;
  signup: () => void;
}
export class SignupContainer extends PureComponent<Props> {
  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Signup page </Text>

        <TouchableOpacity onPress={() => this.props.signup()}>
          <Text style={{textAlign: 'center'}}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
});

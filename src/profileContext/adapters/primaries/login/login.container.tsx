import React, {PureComponent, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
loading: boolean;
error: string | undefined;
token: string | undefined;
login: () => void;
}

interface State {
}

export class LoginContainer extends PureComponent<Props, State> {

    constructor(props : Props){
        super(props)
    }
    
render(): ReactNode {
return (
<View style={styles.container}>
<Text style={styles.title}>login page </Text>

<TouchableOpacity onPress={() =>this.props.login()}>
<Text>Login</Text>
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
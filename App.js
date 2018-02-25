import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Blah extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText};
            })
        }, 100000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text> {display}</Text>
        )
    }
}

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Blah text="something"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});


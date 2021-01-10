import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            <Button 
                title='Tampil'
                onPress={() => this.props.navigation.navigate('tampilan')}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        marginTop: 10,
        marginBottom: 10
    }
})

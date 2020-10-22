import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GiftScreen = props => {
    return (
        <View style={styles.container}>
            <Text>
                This is the gifts screen
           </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c8cbdc',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    }
});

export default GiftScreen;

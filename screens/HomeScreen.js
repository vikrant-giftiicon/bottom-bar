import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.bottomBar}>
                <View style={styles.tabOne}>
                    <Ionicons name="ios-pricetag" size={25} color="#ee487e" />
                    <Text style={styles.text}>Gifts</Text>
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>

                        <Ionicons name="ios-heart" size={25} color="#ffffff" />
                    </View>
                </View>
                <View style={styles.tabTwo}>
                    <Ionicons name="ios-heart" size={25} color="#ee487e" />
                    <Text style={styles.text}>Tease</Text>
                </View>
            </View> */}
            <Text>HomeScreen</Text>
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
    },
    bottomBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 60,
        width: '100%',
        elevation: 7
    },
    tabOne: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '42.5%',
        borderTopRightRadius: 10,
        elevation: 7,
    },
    tabTwo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '42.5%',
        borderTopLeftRadius: 10,
        elevation: 7,
    },
    iconContainer: {
        position: 'relative',
        backgroundColor: 'white',
        width: '15%',
        borderRadius: 30,
        elevation: 7,
        bottom: 30,
        padding: 10,
        marginHorizontal: 10
    },
    icon: {
        position: 'absolute',
        backgroundColor: '#ee487e',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#a3a9b5',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10
    }
});

export default HomeScreen;

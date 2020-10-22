import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TeaseScreen = props => {
    return (
        <View style={styles.container}>
            <Text>
                TeaseScreen
        </Text>
        </View>
    )
};

// TeaseScreen.navigationOptions = navData => {
//     return {
//         headerTitle: "Tease",
//         headerLeft: () => (
//             <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//                 <Item
//                     title="menu"
//                     iconName="ios-menu"
//                     onPress={() => {
//                         navData.navigation.toggleDrawer();
//                     }}
//                 />
//             </HeaderButtons>
//         ),
//     };
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c8cbdc',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    }
});

export default TeaseScreen;

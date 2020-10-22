import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons as Icon } from '@expo/vector-icons';
import { TabBarAdvancedButton } from '../components/TabBarAdvancedButton';
import GiftScreen from '../screens/GiftScreen';
import TeaseScreen from '../screens/TeaseScreen';
import HomeScreen from '../screens/HomeScreen';
import Colors from '../constants/Colors';

const BottomBar = createBottomTabNavigator();

export const TabBar = ({ barColor }) => (
  <NavigationContainer>
    <BottomBar.Navigator
      tabBar={(props) => (
        <View style={styles.container}>
          <View style={styles.navigatorContainer}>
            <BottomTabBar
              {...props}
            />
          </View>
        </View>
      )}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        labelPosition: 'beside-icon',
        showIcon: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: barColor,
         // height: 70
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        }
      }}
    >
      <BottomBar.Screen
        name="Gift"
        component={GiftScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="ios-pricetag"
              size={24}
              color={color}
            />
          )
        }}
      />
      <BottomBar.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: (props) => (
            <View style={styles.container} pointerEvents='box-none'>
              <TabBarAdvancedButton
                bgColor={barColor}
                {...props}
              />
            </View>
          )
        }}
      />
      <BottomBar.Screen
        name="Tease"
        component={TeaseScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="ios-heart"
              size={24}
              color={color}
            />
          )
        }}
      />

    </BottomBar.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    //height: 30,
    backgroundColor: "transparent",
    position: 'relative'
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 30,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34
  }
});
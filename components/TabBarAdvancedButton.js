import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
//import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { Ionicons as Icon } from '@expo/vector-icons';
import { TabBg } from '../svg/TabBg';
import Colors from '../constants/Colors'

export const TabBarAdvancedButton = ({
  bgColor,
  ...props
}) => (
    <View
      style={styles.container}
      pointerEvents="box-none"
    >
      <TabBg
        color={bgColor}
        style={styles.background}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={props.onPress}
      >
          <Image
            source={require('../assets/icons/bottom-bar/heart-outline.png')}
            fadeDuration={0}
            style={styles.buttonIcon}
          />
      </TouchableOpacity>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primaryColor,
  },
  buttonIcon: {
    //  fontSize: 20,
    width: 36,
    height: 36,
    //color: '#F6F7EB'
  }
});

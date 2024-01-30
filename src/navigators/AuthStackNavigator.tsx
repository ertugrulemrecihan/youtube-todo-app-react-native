/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import StartScreen from '../screens/auth/StartScreen';
import {colors} from '../utils/colors';
import {Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  opacity: 0.44,
                }}>
                Back
              </Text>
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen
          name="start"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

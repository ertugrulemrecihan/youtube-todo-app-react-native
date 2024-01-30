import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../utils/colors';

export default function StartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingVertical: 12,
        }}>
        <View style={{gap: 26, marginTop: 36}}>
          <Text style={styles.heading}>Welcome to UpTodo</Text>
          <Text style={styles.description}>
            Please login to your account or create new account to continue
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonTitle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: 'transparent',
                borderColor: colors.primary,
              },
            ]}
            activeOpacity={0.8}>
            <Text style={styles.buttonTitle}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    marginBottom: 36,
    width: '100%',
    gap: 28,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

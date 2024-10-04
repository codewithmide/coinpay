import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemedView style={tw`flex-1 justify-center items-center bg-blue-600`}>
      <ThemedText>
        CoinPay Splash Screen
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        if (loaded) {
          await SplashScreen.hideAsync();
          const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding');
          if (hasSeenOnboarding !== 'true') {
            router.replace('/(onboarding)/screen1');
          } else {
            // Check if user is logged in, if not, redirect to welcome screen
            const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
            if (isLoggedIn !== 'true') {
              router.replace('/(auth)/welcome');
            }
          }
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(onboarding)/screen1" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)/screen2" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)/screen3" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/welcome" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/confirmPhone" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/email" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/address" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/personalInfo" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/country" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/selfie" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/scan" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/passcode" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/success" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/card" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/add-card" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/verifyCard" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/cardList" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
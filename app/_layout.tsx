import React from 'react';


import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';


const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key:string){
    try {
      return SecureStore.getItemAsync(key);
    }catch  (error){
      console.log('Failed to get the token', error)
    }
  },
  async saveToken(key: string, value: string){
    try{
      return SecureStore.setItemAsync(key, value);


    } catch (error){
      console.log('Failed to save the token', error)
    }
  },
}


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);


  useEffect(() => {
    if (error) console.error(error);
  }, [error]);
  

  

  // ...

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <RootLayoutNav />
    </ClerkProvider>
       
   
  );
      
    
  ;
}

function RootLayoutNav() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/(modals)/login');
    }
  }, [isLoaded]);

  

 

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
  name="(modals)/login" 
  options={{ 
    title : "Log in or sign up",
    headerTitleAlign: 'center' 
  }} 
/>
<Stack.Screen name='listing/[id]' options={{ title : "Listing", headerTitleAlign: 'center' }} />
<Stack.Screen name="(modals)/booking" options={{ title : "Booking", headerTitleAlign: 'center', presentation : 'transparentModal', animation:'fade' }} />
       

       
      </Stack>
    </ThemeProvider>
  );
}

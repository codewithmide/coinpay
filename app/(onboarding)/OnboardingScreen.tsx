import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import tw from 'twrnc';

const OnboardingScreen = ({ image, title, currentStep, totalSteps, nextRoute }: any) => {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 justify-center items-center p-7`}>
        <Image source={image} style={tw`w-4/5 mb-[20px] h-[250px]`} resizeMode="contain" />

        <View style={tw`flex-row mt-5`}>
          {[...Array(totalSteps)].map((_, i) => (
            <View
              key={i}
              style={tw`w-[37px] my-[20px] h-2.5 rounded-full mx-1 ${i === currentStep ? 'bg-[#304FFE] w-[16px]' : 'bg-gray-300'}`}
            />
          ))}
        </View>

        <Text style={tw`text-[35px] font-bold mt-8 text-center`}>{title}</Text>
      </View>

      <View style={tw`absolute bottom-5 w-full px-4`}>
        <TouchableOpacity
          style={tw`bg-[#304FFE] py-4 rounded-[50px]`}
          onPress={() => router.push(nextRoute)}
        >
          <Text style={tw`text-white text-lg font-bold text-center`}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

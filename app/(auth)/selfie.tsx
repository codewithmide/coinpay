import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function SelfieScreen() {
  const router = useRouter();
  const progress = 50;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-4 pb-4 pt-6`}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={tw`w-full h-1 bg-gray-200 rounded-full`}>
        <View
          style={[
            tw`h-1`,
            { width: `${progress}%`, backgroundColor: "#304FFE" },
          ]}
        />
      </View>

      <View style={tw`flex-1 p-4 justify-between`}>
        <View style={tw`items-center`}>
          <Image
            source={require("@/assets/images/selfie.png")}
            style={tw`h-64 mt-6`}
            resizeMode="contain"
          />
        </View>

        <View style={tw`items-center w-full`}>
          <Text style={tw`text-[35px] w-[90%] font-bold mt-6 text-center`}>
            Take selfie to verify your identity
          </Text>

          <Text
            style={tw`text-base mb-10 text-gray-600 mt-3 text-center w-full`}
          >
            Quick and easy identification verification using your phone's
            camera. Confirm your identity with a self captured photo.
          </Text>

          <Link href="/scan" asChild>
            <TouchableOpacity style={tw`mb-6 gap-4 items-center`}>
              <View style={tw`bg-[#304FFE] rounded-full items-center flex justify-center p-5`}>
                <Ionicons name="camera-outline" size={34} color="#ffffff" />
              </View>
              <Text style={tw`text-black text-center font-semibold text-lg`}>
                Take a selfie
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

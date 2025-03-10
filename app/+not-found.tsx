import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function NotFoundScreen() {
  const router = useRouter();
  const progress = 10;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-4 pb-4 pt-4`}>
        <TouchableOpacity onPress={() => router.back()} style={tw``}>
          <Ionicons name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 p-4 justify-between`}>
        <View style={tw`items-center`}>
          <Image
            source={require("@/assets/images/not-found.png")}
            style={tw` h-64 mt-6`}
            resizeMode="contain"
          />
          <Text style={tw`text-[35px] w-[80%] mt-6 font-bold text-center`}>
            Error 404
          </Text>
          <Text style={tw`text-[35px] w-[80%] font-bold text-center`}>
            Page not found
          </Text>

          <Text
            style={tw`text-base mb-10 text-gray-600 mt-3 text-center w-full`}
          >
            Oops! It looks like the page you are looking for does not exists or has been moved. Please try again or go back to the Homepage
          </Text>
          <Link href="/(auth)/welcome" asChild>
            <TouchableOpacity
              style={tw`bg-[#304FFE] py-4 rounded-full w-full mb-3`}
            >
              <Text style={tw`text-white text-center font-semibold text-lg`}>
                Back to home
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

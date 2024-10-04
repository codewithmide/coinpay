import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function WelcomeSuccessScreen() {
  const router = useRouter();
  const progress = 100;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-4 pb-4 pt-6`}>
        <TouchableOpacity onPress={() => router.back()} style={tw``}>
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
            source={require("@/assets/images/welcome.png")}
            style={tw` h-80 mt-6`}
            resizeMode="contain"
          />
          <Text style={tw`text-[30px] w-[80%] font-bold mt-6 text-center`}>
            Congratulations! Welcome to Coinpay
          </Text>

          <Text
            style={tw`text-base mb-10 text-gray-600 mt-3 text-center w-full`}
          >
            We are happy to have you. It's time to spend, receive and track your
            expenses
          </Text>
        </View>

        <View style={tw`items-center w-full`}>
          <Link href="/login" asChild>
            <TouchableOpacity
              style={tw`bg-[#304FFE] py-4 rounded-full w-full mb-3`}
            >
              <Text style={tw`text-white text-center font-semibold text-lg`}>
                Continue
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

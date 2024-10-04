import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function WelcomeScreen() {
  const router = useRouter();
  const progress = 10;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-4 pb-4 pt-4`}>
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
            source={require("@/assets/images/coinpay-welcome.png")}
            style={tw` h-64 mt-6`}
            resizeMode="contain"
          />
        </View>

        <View style={tw`items-center w-full`}>
          <Text style={tw`text-[35px] w-[80%] font-bold text-center`}>
            Create your Coinpay account
          </Text>

          <Text
            style={tw`text-base mb-10 text-gray-600 mt-3 text-center w-full`}
          >
            Coinpay is a powerful tool that allows you to easily send, receive,
            and track all your transactions.
          </Text>
          <Link href="/signup" asChild>
            <TouchableOpacity
              style={tw`bg-[#304FFE] py-4 rounded-full w-full mb-3`}
            >
              <Text style={tw`text-white text-center font-semibold text-lg`}>
                Sign up
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/login" asChild>
            <TouchableOpacity
              style={tw`bg-white border w-full border-[#304FFE] py-4 rounded-full`}
            >
              <Text
                style={tw`text-[#304FFE] text-center font-semibold text-lg`}
              >
                Log in
              </Text>
            </TouchableOpacity>
          </Link>

          <Text style={tw`text-gray-500 text-center mt-6 text-sm`}>
            By continuing you accept our{"\n"}
            <Text style={tw`text-[#304FFE] underline`}>
              Terms of Service
            </Text>{" "}
            and <Text style={tw`text-[#304FFE] underline`}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

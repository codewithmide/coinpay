import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function CardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-4 pb-4 pt-6`}>
        <TouchableOpacity onPress={() => router.back()} style={tw``}>
          <Ionicons name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 p-4 justify-between`}>
        <View style={tw`items-center`}>
          <Image
            source={require("@/assets/images/add-card.png")}
            style={tw` h-80 mt-6`}
            resizeMode="contain"
          />
          <Text style={tw`text-[30px] w-[80%] font-bold mt-6 text-center`}>
            Let's add your card
          </Text>

          <Text
            style={tw`text-base mb-10 text-gray-600 mt-3 text-center w-full`}
          >
            Experience the power of financial organization with our platform.
          </Text>
        </View>

        <View style={tw`items-center w-full`}>
          <TouchableOpacity
            style={tw`bg-[#304FFE] flex-row justify-center gap-4 py-4 items-center rounded-full w-full`}
            onPress={() => router.push("/add-card")}
          >
            <Ionicons name="add-outline" size={24} color="#fff" />
            <Text style={tw`text-white text-center font-semibold text-lg`}>
              Add your card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

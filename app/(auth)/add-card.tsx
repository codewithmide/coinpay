import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

export default function AddCardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-4 pb-4 pt-6`}>
        <TouchableOpacity onPress={() => router.back()} style={tw``}>
          <Ionicons name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 p-4`}>
        <Text style={tw`text-2xl font-bold mb-2`}>Add card</Text>
        <Text style={tw`text-gray-800 mb-6 text-[16px] w-[90%]`}>
          Enter your credit card info into the box below
        </Text>

        <Text style={tw`text-gray-700 mb-2`}>Account Holder Name</Text>
        <View
          style={tw`flex-row bg-white rounded-lg border border-gray-300 mb-4`}
        >
          <TextInput
            style={tw`flex-1 p-4`}
            placeholder="Mr John Doe"
          />
        </View>

        <Text style={tw`text-gray-700 mb-2`}>Email</Text>
        <View
          style={tw`flex-row bg-white rounded-lg border border-gray-300 mb-6 pl-3`}
        >
          <Ionicons
            name="mail-outline"
            size={24}
            color="gray"
            style={tw`my-auto`}
          />
          <TextInput
            style={tw`flex-1 p-4`}
            placeholder="name@example.com"
          />
        </View>

        <Text style={tw`text-gray-700 mb-2`}>Card Number</Text>
        <View
          style={tw`flex-row bg-white rounded-lg border border-gray-300 mb-6 pl-3`}
        >
          <Ionicons
            name="card-outline"
            size={24}
            color="gray"
            style={tw`my-auto`}
          />
          <TextInput
            style={tw`flex-1 p-4`}
            placeholder="XXXX XXXX XXXX"
          />
        </View>
      </View>

      <View style={tw`absolute bottom-5 w-full px-4`}>
        <TouchableOpacity
          style={tw`bg-[#304FFE] rounded-full py-4 items-center`}
          onPress={() => router.push("/verifyCard")}
        >
          <Text style={tw`text-white font-semibold text-lg`}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

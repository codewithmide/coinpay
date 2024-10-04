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

export default function EmailScreen() {
  const router = useRouter();
  const [email, setemail] = useState("");

  const progress = 25;

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

      <View style={tw`flex-1 p-4`}>
        <Text style={tw`text-2xl font-bold mb-2`}>Add your email</Text>
        <Text style={tw`text-gray-800 mb-6 text-[16px] w-[80%]`}>
          This info needs to accurate with your ID document
        </Text>

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
            value={email}
            onChangeText={setemail}
          />
        </View>
      </View>

      <View style={tw`absolute bottom-5 w-full px-4`}>
        <TouchableOpacity
          style={tw`bg-[#304FFE] rounded-full w-full py-4 items-center`}
          onPress={() => router.push("/address")}
        >
          <Text style={tw`text-white font-semibold text-lg`}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

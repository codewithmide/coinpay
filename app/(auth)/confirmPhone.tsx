import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

export default function ConfirmPhoneScreen() {
  const router = useRouter();
  const { phoneNumber } = useLocalSearchParams();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs: TextInput[] = [];

  const handleCodeChange = (text: string, index: number) => {
    // Allow only digits
    if (!/^\d*$/.test(text)) {
      return;
    }

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input field if a digit is entered, or previous if cleared
    if (text && index < 5) {
      inputRefs[index + 1].focus();
    } else if (!text && index > 0) {
      inputRefs[index - 1].focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === "Backspace" && index > 0) {
      handleCodeChange("", index - 1); // Clear current and move to previous
      inputRefs[index - 1].focus();
    }
  };

  const progress = 20;

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
        <Text style={tw`text-2xl font-bold mb-2`}>Confirm your phone</Text>
        <Text style={tw`text-gray-600 mb-6`}>
          We sent a 6-digit code to +234 708 889 9861
        </Text>

        <View style={tw`mb-6 items-center`}>
          <View style={tw`w-[85%] flex-row justify-between items-center`}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                style={tw`w-12 h-12 border-b border-gray-300 rounded-lg text-center text-xl`}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleCodeChange(text, index)}
                ref={(input) => {
                  inputRefs[index] = input as TextInput;
                }}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity>
          <Text style={tw`text-center text-blue-500 mb-6`}>
            Didn't get a code? Resend
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`absolute bottom-5 w-full px-4`}>
        <Link href="/email" asChild>
          <TouchableOpacity
            style={tw`bg-[#304FFE] rounded-full py-4 items-center`}
            onPress={() => {
              console.log("Verification code:", code.join(""));
            }}
          >
            <Text style={tw`text-white font-medium text-lg`}>
              Verify Your Number
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

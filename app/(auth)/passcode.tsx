import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

export default function PasscodeScreen() {
  const router = useRouter();
  const { phoneNumber } = useLocalSearchParams();
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs: TextInput[] = [];

  // State to manage the background color of input fields
  const [inputStyles, setInputStyles] = useState([
    tw`bg-gray-300`,
    tw`bg-gray-300`,
    tw`bg-gray-300`,
    tw`bg-gray-300`,
  ]);

  const handleCodeChange = (text: string, index: number) => {
    // Allow only digits
    if (!/^\d*$/.test(text)) {
      return;
    }

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Change the input field background to black when typed
    const newStyles = [...inputStyles];
    newStyles[index] = tw`bg-black`;
    setInputStyles(newStyles);

    // Move to next input field if a digit is entered, or previous if cleared
    if (text && index < 3) {
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

  const handleFocus = (index: number) => {
    inputRefs[index].focus(); // Focus on the input when clicked
    // Change background to black if the input is focused and has a value
    const newStyles = [...inputStyles];
    if (code[index]) {
      newStyles[index] = tw`bg-black`;
    } else {
      newStyles[index] = tw`bg-gray-300`;
    }
    setInputStyles(newStyles);
  };

  const progress = 80;

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

      <View style={tw`flex-1 p-4`}>
        <Text style={tw`text-2xl font-bold mb-2`}>Create passcode</Text>
        <Text style={tw`text-gray-600 mb-6`}>
          This info needs to be accurate with your ID document
        </Text>

        <View style={tw`mt-16 items-center`}>
          <View style={tw`w-[85%] flex-row justify-center gap-5 items-center`}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                style={[
                  tw`w-10 h-10 rounded-full text-center text-xl`,
                  inputStyles[index], // Apply dynamic styles
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleCodeChange(text, index)}
                ref={(input) => {
                  inputRefs[index] = input as TextInput;
                }}
                onKeyPress={(e) => handleKeyPress(e, index)}
                selectionColor="transparent" // Hide the cursor
                secureTextEntry // Hide the digits entered
                onFocus={() => handleFocus(index)} // Focus handler
                onBlur={() => {
                  // Reset background color when focus is lost
                  const newStyles = [...inputStyles];
                  newStyles[index] = digit ? tw`bg-black` : tw`bg-gray-300`;
                  setInputStyles(newStyles);
                }}
              />
            ))}
          </View>
        </View>
      </View>

      <View style={tw`absolute bottom-5 w-full px-4`}>
        <Link href="/success" asChild>
          <TouchableOpacity
            style={tw`bg-[#304FFE] rounded-full py-4 items-center`}
            onPress={() => {
              console.log("Verification code:", code.join(""));
            }}
          >
            <Text style={tw`text-white font-medium text-lg`}>
              Confirm
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

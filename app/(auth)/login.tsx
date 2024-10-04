import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import tw from "twrnc";

export default function LoginScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>("BD");
  const [callingCode, setCallingCode] = useState("880");

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };


  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-4 pb-3 pt-6`}>
        <TouchableOpacity onPress={() => router.back()} style={tw``}>
          <Ionicons name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 p-4`}>
        <Text style={tw`text-2xl font-bold mb-2`}>Login to Coinpay</Text>
        <Text style={tw`text-gray-600 mb-6`}>
          Enter your registered mobile number and password to login
        </Text>

        <Text style={tw`text-gray-700 mb-2`}>Phone</Text>
        <View style={tw`flex-row mb-4 gap-2`}>
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag
            withCallingCodeButton
            withCallingCode
            withEmoji
            onSelect={onSelect}
            containerButtonStyle={tw`bg-white rounded-lg p-4 border border-gray-300`}
          />
          <TextInput
            style={tw`flex-1 bg-white rounded-lg p-4 border border-gray-300`}
            placeholder="Mobile number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <Text style={tw`text-gray-700 mb-2`}>Password</Text>
        <View
          style={tw`flex-row bg-white rounded-lg border border-gray-300 mb-6`}
        >
          <Ionicons
            name="lock-closed-outline"
            size={24}
            style={tw`items-center p-4`}
            color="gray"
          />
          <TextInput
            style={tw`flex-1 p-4`}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={tw`p-4`}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`absolute bottom-5 w-full px-4`}>
        <TouchableOpacity
          style={tw`bg-[#304FFE] rounded-full py-4 items-center`}
          onPress={() => router.push("/card")}
        >
          <Text style={tw`text-white font-semibold text-lg`}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

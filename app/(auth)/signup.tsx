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
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import tw from "twrnc";

export default function SignUpScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>("BD");
  const [callingCode, setCallingCode] = useState("880");
  const [modalVisible, setModalVisible] = useState(false);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const handleSignUp = () => {
    console.log(`Phone: +${callingCode}${phone}, Password: ${password}`);
    setModalVisible(true); // Show modal on signup
  };

  const progress = 15;

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
        <Text style={tw`text-2xl font-bold mb-2`}>Create an Account</Text>
        <Text style={tw`text-gray-600 mb-6`}>
          Enter your mobile number to verify your account
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
            size={22}
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
          onPress={handleSignUp}
        >
          <Text style={tw`text-white font-semibold text-lg`}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
        >
          <View style={tw`bg-white p-8 rounded-lg w-[90%]`}>
            <View style={tw`items-center mb-4`}>
              <Image
                source={require("@/assets/images/modal.png")}
                style={tw` h-54 mt-16`}
                resizeMode="contain"
              />
            </View>
            <Text style={tw`text-2xl font-bold mb-2 text-center`}>
              Verify your phone number before we send code
            </Text>
            <Text style={tw`text-center mb-6 font-medium`}>
              Is this correct? +234 708 889 9861
            </Text>
            <Link href="/confirmPhone" asChild>
              <TouchableOpacity
                style={tw`bg-[#304FFE] rounded-full py-3 items-center`}
              >
                <Text style={tw`text-white font-semibold text-lg`}>Yes</Text>
              </TouchableOpacity>
            </Link>
            <TouchableOpacity
              style={tw`border-[#304FFE] border rounded-full py-3 mt-2 items-center`}
              onPress={() => setModalVisible(false)}
            >
              <Text style={tw`text-[#304FFE] font-semibold text-lg`}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

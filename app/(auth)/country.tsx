import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import tw from "twrnc";

export default function CountryScreen() {
  const router = useRouter();

  const defaultCountry: Country = {
    cca2: "NG",
    name: "Nigeria",
    callingCode: ["234"],
    currency: ["NGN"],
    flag: "🇳🇬",
    region: "Africa",
    subregion: "Western Africa",
  };

  const [country, setCountry] = useState<Country | null>(defaultCountry);
  const [countryCode, setCountryCode] = useState<CountryCode>("NG");
  const [isVisible, setIsVisible] = useState(false);

  const onSelect = (selectedCountry: Country) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    setIsVisible(false);
  };

  const progress = 40;

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
        <Text style={tw`text-2xl font-bold mb-2`}>Country of residence</Text>
        <Text style={tw`text-gray-800 mb-6 text-[16px] w-[80%]`}>
          This info needs to be accurate with your ID document
        </Text>

        <Text style={tw`text-gray-700 mb-2`}>Country</Text>

        <View
          style={tw`flex-row bg-white rounded-lg border border-gray-300 mb-4 items-center pl-3`}
        >
          <CountryPicker
            {...{
              countryCode,
              withFilter: true,
              withFlag: true,
              withCountryNameButton: false,
              withAlphaFilter: true,
              withCallingCode: false,
              withEmoji: true,
              onSelect,
              visible: isVisible,
            }}
            onClose={() => setIsVisible(false)}
          />
          <TouchableOpacity
            style={tw`flex-1 pl-3`}
            onPress={() => setIsVisible(true)}
          >
            <TextInput
              style={tw`p-4`}
              value={country?.name?.toString() || "Select a country"} // Ensure value is a string
              editable={false}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`absolute bottom-5 w-full px-4`}>
        <TouchableOpacity
          style={tw`bg-[#304FFE] rounded-full py-4 items-center`}
          onPress={() => {
            if (country) {
              router.push("/selfie");
            } else {
              alert("Please select a country before continuing.");
            }
          }}
        >
          <Text style={tw`text-white font-semibold text-lg`}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

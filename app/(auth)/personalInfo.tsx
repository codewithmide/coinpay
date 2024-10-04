import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function PersonalInfoScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setDateOfBirth(date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
    hideDatePicker();
  };

  const progress = 35;

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
        <Text style={tw`text-2xl font-bold mb-2`}>Add your personal info</Text>
        <Text style={tw`text-gray-800 mb-6 text-[16px] w-[80%]`}>
          This info needs to accurate with your ID document
        </Text>

        <Text style={tw`text-gray-700 mb-2`}>Full Name</Text>
        <View style={tw`flex-row bg-white rounded-lg border border-gray-300 mb-4`}>
          <TextInput 
            style={tw`flex-1 p-4`} 
            placeholder="Mr John Doe" 
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <Text style={tw`text-gray-700 mb-2`}>Username</Text>
        <View style={tw`flex-row bg-white rounded-lg border border-gray-300 mb-4 pl-3`}>
          <Ionicons
            name="at-outline"
            size={24}
            color="#304FFE"
            style={tw`my-auto`}
          />
          <TextInput 
            style={tw`flex-1 p-4 pl-1`} 
            placeholder="username" 
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <Text style={tw`text-gray-700 mb-2`}>Date of Birth</Text>
        <TouchableOpacity 
          style={tw`flex-row bg-white rounded-lg border border-gray-300 mb-4 pl-3`}
          onPress={showDatePicker}
        >
          <Ionicons
            name="calendar-clear-outline"
            size={24}
            color="gray"
            style={tw`my-auto`}
          />
          <Text style={tw`flex-1 p-4 text-black`}>{dateOfBirth || "MM/DD/YYYY"}</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`absolute bottom-5 w-full px-4`}>
        <TouchableOpacity
          style={tw`bg-[#304FFE] rounded-full py-4 items-center`}
          onPress={() => router.push("/country")}
        >
          <Text style={tw`text-white font-semibold text-lg`}>Continue</Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display="inline"
        maximumDate={new Date()}
      />
    </SafeAreaView>
  );
}
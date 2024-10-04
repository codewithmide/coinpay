import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

interface Card {
  id: string;
  lastFour: string;
  type: "mastercard" | "visa";
}

export default function CardListScreen() {
  const router = useRouter();
  const [cards, setCards] = useState<Card[]>([
    { id: "1", lastFour: "3994", type: "mastercard" },
  ]);
  const [showSuccess, setShowSuccess] = useState(true);

  const renderCard = ({ item }: { item: Card }) => (
    <View style={tw`flex-row items-center bg-white rounded-lg p-4 mb-2`}>
      {item.type === "mastercard" && (
        <Ionicons name="card" size={24} color="#EB001B" />
      )}
      {item.type === "visa" && (
        <Ionicons name="card" size={24} color="#1A1F71" />
      )}
      <Text style={tw`ml-2`}>Account ••••••••••{item.lastFour}</Text>
    </View>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-4 pb-4 pt-6`}>
        <TouchableOpacity onPress={() => router.back()} style={tw``}>
          <Ionicons name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 p-4`}>
        {showSuccess && (
          <View
            style={tw`bg-green-100 p-3 rounded-lg mb-4 flex-row items-center`}
          >
            <Ionicons name="checkmark-circle" size={20} color="green" />
            <Text style={tw`text-green-800 ml-2`}>
              Your card successfully added
            </Text>
          </View>
        )}

        <Text style={tw`text-2xl font-bold mb-2`}>Card list</Text>
        <Text style={tw`text-gray-600 mb-6`}>
          Enter your credit card info into the box below.
        </Text>

        <FlatList
          data={cards}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          style={tw`mb-4`}
        />
      </View>

      <View style={tw`px-4 mb-4`}>
        <Link href="../notf" asChild>
          <TouchableOpacity
            style={tw`bg-[#304FFE] flex-row gap-3 justify-center rounded-full py-4 items-center mb-2`}
            onPress={() => {
              console.log("Add another card");
            }}
          >
            <Ionicons name="add-outline" size={24} color="#fff" />
            <Text style={tw`text-white font-medium text-lg`}>
              {" "}
              Add another card
            </Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          style={tw`border border-[#304FFE] rounded-full py-4 items-center`}
          onPress={() => {
            // Handle continue action
            console.log("Continue");
          }}
        >
          <Text style={tw`text-[#304FFE] font-medium text-lg`}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

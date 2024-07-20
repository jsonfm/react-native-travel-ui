import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "@/navigation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { useNavigationTyped } from "@/navigation/hook";
import { theme } from "@/theme";
import { ClockIcon, MapPinIcon, SunIcon } from "react-native-heroicons/solid";

type Props = NativeStackScreenProps<RootStackParamList, "Destination">;

export const DestinationScreen = (props: Props) => {
  const destination = props?.route?.params?.destination;
  const [isFav, setIsFav] = useState(false);
  const navigation = useNavigationTyped();

  return (
    <View className="flex-1 bg-white">
      <Image
        source={destination?.image}
        style={{ width: wp(100), height: hp(55) }}
      />

      <SafeAreaView className="flex-row justify-between items-center w-full absolute">
        <TouchableOpacity
          className="p-2 rounded-full ml-4"
          style={{ backgroundColor: `rgba(255, 255, 255, 0.5)` }}
          onPress={() => navigation.navigate("Home")}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: `rgba(255, 255, 255, 0.4)` }}
          className="p-2 rounded-full mr-4"
          onPress={() => setIsFav(!isFav)}
        >
          <HeartIcon
            size={wp(7)}
            // strokeWidth={2}
            color={isFav ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="px-5 flex-1 flex justify-between bg-white pt-8 -mt-14"
      >
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-row justify-between items-start">
            <Text
              style={{ fontSize: wp(7) }}
              className="font-bold flex-1 text-neutral-700"
            >
              {destination?.title}
            </Text>
            <Text
              style={{ fontSize: wp(7), color: theme.text }}
              className="font-semibold"
            >
              $ {destination?.price}
            </Text>
          </View>
          <Text
            style={{ fontSize: wp(3.7) }}
            className="text-neutral-700 tracking-wide mb-2"
          >
            {destination?.longDescription}
          </Text>
          <View className="flex-row justify-between mx-0">
            <View className="flex-row space-x-2 items-start">
              <ClockIcon size={wp(7)} color="skyblue" />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {destination?.duration}
                </Text>
                <Text className="text-neutral-600">Duration</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <MapPinIcon size={wp(7)} color="red" />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {destination?.duration}
                </Text>
                <Text className="text-neutral-600">Distance</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <SunIcon size={wp(7)} color="orange" />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {destination?.duration}
                </Text>
                <Text className="text-neutral-600">Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: theme.bg(0.7),
            height: wp(15),
            width: wp(50),
          }}
          className="mb-6 mx-auto flex justify-center items-center rounded-full "
        >
          <Text className="text-white font-bold">Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

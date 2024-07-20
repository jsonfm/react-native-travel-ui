import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { destinationData } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigationTyped } from "@/navigation/hook";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "@/navigation";

export const Destinations = () => {
  const navigation = useNavigationTyped();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData?.map((data, index) => (
        <DestinationCard
          navigation={navigation}
          key={`destination-${index}`}
          data={data}
        />
      ))}
    </View>
  );
};

interface Props {
  data: Record<string, any>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export const DestinationCard = ({ data, navigation }: Props) => {
  const [isFav, setIsFav] = useState(false);

  return (
    <TouchableOpacity
      style={{ width: wp(44), height: wp(65) }}
      className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
      onPress={() => navigation.navigate("Destination", { destination: data })}
    >
      <Image
        source={data?.image}
        style={{ width: wp(44), height: wp(65), borderRadius: 35 }}
        className="absolute"
      />

      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
        style={{
          width: wp(44),
          height: hp(15),
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />
      <TouchableOpacity
        style={{ backgroundColor: `rgba(255, 255, 255, 0.4)` }}
        className="absolute top-1 right-3 rounded-full p-3"
        onPress={() => setIsFav(!isFav)}
      >
        <HeartIcon size={wp(5)} color={isFav ? "red" : "white"} />
      </TouchableOpacity>
      <Text style={{ fontSize: wp(4) }} className="text-white font-semibold">
        {data?.title}
      </Text>
      <Text style={{ fontSize: wp(2.2) }} className="text-white">
        {data?.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};

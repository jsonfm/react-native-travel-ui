import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "@/theme";
import { categoriesData } from "@/constants";

export const Categories = () => {
  return (
    <View className="space-y-5">
      <View className="mx-5 flex-row items-center justify-between">
        <Text
          style={{ fontSize: wp(4) }}
          className="font-semibold text-neutral-700"
        >
          Categories
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-x-4"
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData?.map((data, index) => (
          <TouchableOpacity className="flex items-center space-y-2">
            <Image
              key={`cat-${index}`}
              source={data?.image}
              className="rounded-3xl"
              style={{ width: wp(20), height: wp(19) }}
            />
            <Text
              className="text-neutral-700 font-medium"
              style={{ fontSize: wp(3) }}
            >
              {data?.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

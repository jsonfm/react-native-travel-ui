import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Categories } from "@/components/Categories";
import { SortCategories } from "@/components/SortCategories";
import { Destinations } from "@/components/Destinations";

const ios = Platform.OS == "ios";
const topMargin = ios ? "mt-3" : "mt-10";
export const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={`space-y-6 ${topMargin}`}
      >
        <View className="mx-5 flex-row justify-between mb-10">
          <Text
            className="font-bold text-neutral-700"
            style={{ fontSize: wp(7) }}
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              style={{ width: wp(12), height: wp(12) }}
              source={require("@assets/illustrations/avatar.png")}
            />
          </TouchableOpacity>
        </View>
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color={"gray"} />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>
        <View className="mb-4">
          <Categories />
        </View>
        <View className="mb-4">
          <SortCategories />
        </View>
        <View className="mb-4">
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

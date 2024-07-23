import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, ScrollView, VStack } from "@gluestack-ui/themed";
import SlideImage from "./component/SlideImage";

import CardList from "./component/CardList";
import { EDisplayType } from "../../types";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { BottomTabsParams } from "../../navigations/config";
import {
  commonData,
  EData,
  headerSlideData,
  mixedData,
  planetData,
} from "../../db/home-data";
import PopularList from "./component/PopularList";
import { getRandomArray } from "../../utils/function";

type Props = {} & NativeStackScreenProps<BottomTabsParams, "Home">;

const Home = ({ navigation }: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack flex={1} p={"$4"} gap={"$4"} bg="$white">
        <SlideImage data={headerSlideData} />
        <PopularList
          popularData={getRandomArray(Object.values(mixedData), 5)}
        />
        <CardList
          title="Hệ mặt trời"
          data={Object.values(commonData)}
          displayType={EDisplayType.NORMAL}
          dataType={EData.COMMON}
        />
        <CardList
          title="Hành tinh"
          data={Object.values(planetData)}
          displayType={EDisplayType.NORMAL}
          dataType={EData.PLANET}
        />
      </VStack>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});

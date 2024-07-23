import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { HStack, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { EDisplayType } from "../../../types";
import { useNavigation } from "@react-navigation/native";
import { EData, IData } from "../../../db/home-data";

type Props = {
  data: IData[];
  displayType: EDisplayType;
  title: string;
  dataType: EData;
};

const { width } = Dimensions.get("screen");

const SIZE_TYPE: {
  [key in EDisplayType]: {
    widthSize: number;
    heightSize: number;
  };
} = {
  [EDisplayType.NORMAL]: {
    widthSize: 152,
    heightSize: 152,
  },
  [EDisplayType.LARGE]: {
    widthSize: width - 32,
    heightSize: 192,
  },
};

const CardList = ({ data, displayType, title, dataType }: Props) => {
  const navigation = useNavigation<any>();
  return (
    <VStack>
      <HStack justifyContent="space-between" mb={"$4"}>
        <Text fontWeight="$semibold" fontSize={"$xl"} color="$primary600">
          {title}
        </Text>
        {/* <Text fontWeight="$normal" fontSize={"$sm"} color="$textDark500">
          Xem tất cả
        </Text> */}
      </HStack>
      <ScrollView w={"$full"} horizontal showsHorizontalScrollIndicator={false}>
        <HStack gap={"$4"}>
          {data.map((item: IData, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("DetailCommon", {
                  id: item.id,
                  dataType: dataType,
                })
              }
            >
              <VStack gap={"$3"} width={SIZE_TYPE[displayType].widthSize}>
                <Image
                  source={
                    typeof item.image == "string"
                      ? { uri: item.image }
                      : item.image
                  }
                  width={SIZE_TYPE[displayType].widthSize}
                  height={SIZE_TYPE[displayType].heightSize}
                  rounded={"$xl"}
                  alt="image"
                />
                <Text
                  fontSize={"$md"}
                  fontWeight="$semibold"
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  color={"$coolGray500"}
                >
                  {item.description}
                </Text>
              </VStack>
            </TouchableOpacity>
          ))}
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default CardList;

const styles = StyleSheet.create({});

import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  Text,
  Box,
  HStack,
  VStack,
  Image,
  ImageBackground,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { EData, IData } from "../../../db/home-data";

type Props = {
  popularData: IData[];
};

const PopularList = ({ popularData }: Props) => {
  const navigation = useNavigation<any>();
  return (
    <VStack gap={"$4"}>
      <HStack justifyContent="space-between" mb={"$4"}>
        <Text fontWeight="$semibold" fontSize={"$xl"} color="$primary600">
          Phổ biến
        </Text>
        <Text fontWeight="$normal" fontSize={"$sm"} color="$textDark500">
          Xem tất cả
        </Text>
      </HStack>
      <HStack h={"$96"} gap={"$4"}>
        <VStack flex={1} gap={"$4"}>
          <TouchableOpacity
            style={{ flex: 3 }}
            onPress={() => {
              navigation.navigate("DetailCommon", {
                id: popularData[0].id,
                dataType: EData.ALL,
              });
            }}
          >
            <ImageBackground
              source={
                typeof popularData[0].image == "string"
                  ? { uri: popularData[0].image }
                  : popularData[0].image
              }
              imageStyle={{ borderRadius: 12 }}
              alt="marine1"
              flex={3}
              w={"$full"}
              resizeMode="cover"
              alignItems="center"
              justifyContent="flex-end"
              pb={"$4"}
            >
              <Text
                color="$white"
                fontWeight={"$bold"}
                maxWidth={"$32"}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {popularData[0].title}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2 }}
            onPress={() => {
              navigation.navigate("DetailCommon", {
                id: popularData[1].id,
                dataType: EData.ALL,
              });
            }}
          >
            <ImageBackground
              source={
                typeof popularData[1].image == "string"
                  ? { uri: popularData[1].image }
                  : popularData[1].image
              }
              imageStyle={{ borderRadius: 12 }}
              alt="marine1"
              flex={2}
              w={"$full"}
              resizeMode="cover"
              alignItems="center"
              justifyContent="flex-end"
              pb={"$4"}
            >
              <Text
                color="$white"
                fontWeight={"$bold"}
                maxWidth={"$32"}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {popularData[1].title}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </VStack>
        <VStack flex={1} gap={"$4"}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              navigation.navigate("DetailCommon", {
                id: popularData[2].id,
                dataType: EData.ALL,
              });
            }}
          >
            <ImageBackground
              source={
                typeof popularData[2].image == "string"
                  ? { uri: popularData[2].image }
                  : popularData[2].image
              }
              alt="marine1"
              flex={1}
              w={"$full"}
              resizeMode="cover"
              imageStyle={{ borderRadius: 12 }}
              alignItems="center"
              justifyContent="flex-end"
              pb={"$4"}
            >
              <Text
                color="$white"
                fontWeight={"$bold"}
                maxWidth={"$32"}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {popularData[2].title}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2 }}
            onPress={() => {
              navigation.navigate("DetailCommon", {
                id: popularData[3].id,
                dataType: EData.ALL,
              });
            }}
          >
            <ImageBackground
              source={
                typeof popularData[3].image == "string"
                  ? { uri: popularData[3].image }
                  : popularData[3].image
              }
              alt="marine1"
              flex={2}
              w={"$full"}
              resizeMode="cover"
              imageStyle={{ borderRadius: 12 }}
              alignItems="center"
              justifyContent="flex-end"
              pb={"$4"}
            >
              <Text
                color="$white"
                fontWeight={"$bold"}
                maxWidth={"$32"}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {popularData[3].title}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </VStack>
      </HStack>
      <Box>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            navigation.navigate("DetailCommon", {
              id: popularData[4].id,
              dataType: EData.ALL,
            });
          }}
        >
          <ImageBackground
            source={
              typeof popularData[4].image == "string"
                ? { uri: popularData[4].image }
                : popularData[4].image
            }
            alt="marine1"
            h={"$32"}
            w={"$full"}
            resizeMode="cover"
            imageStyle={{ borderRadius: 12 }}
            alignItems="center"
            justifyContent="flex-end"
            pb={"$4"}
          >
            <Text
              color="$white"
              fontWeight={"$bold"}
              maxWidth={"$64"}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {popularData[4].title}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
};

export default PopularList;

const styles = StyleSheet.create({});

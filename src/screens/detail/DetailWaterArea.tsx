import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonIcon,
  HStack,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft2 } from "iconsax-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import { titleWaterSea, waterArea } from "../../db/slide-data";
import { Text } from "@gluestack-ui/themed";

type Props = {} & NativeStackScreenProps<RootStackParams, "DetailWaterArea">;

const DetailWaterArea = ({ navigation, route }: Props) => {
  const waterName = route.params.waterName;
  const [data] = useState(waterArea[waterName]);

  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <ImageBackground source={{ uri: data.image }} w="$full" height={240}>
        <SafeAreaView>
          <HStack>
            <Button
              variant="link"
              size="lg"
              px="$2"
              onPress={() => navigation.goBack()}
            >
              <ButtonIcon as={ArrowLeft2} size="xl" color="$white" />
            </Button>
          </HStack>
        </SafeAreaView>
      </ImageBackground>
      <ScrollView>
        {/* Title */}
        <VStack p="$4" gap="$4">
          <Box marginTop={12}>
            <Text
              fontSize={"$2xl"}
              fontWeight={"$extrabold"}
              color="$primary600"
            >
              {titleWaterSea[waterName]}
            </Text>
          </Box>
          <VStack gap={"$2"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Độ sâu
            </Text>
            <Text>{data.depth_range}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Nhiệt độ
            </Text>
            <Text>{data.temperature}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Ánh sáng
            </Text>
            <Text>{data.light}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Áp suất
            </Text>
            <Text>{data.pressure}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Các sinh vật
            </Text>
            <Text>{data.marine_life}</Text>
          </VStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default DetailWaterArea;

const styles = StyleSheet.create({});

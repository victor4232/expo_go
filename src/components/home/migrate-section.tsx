'use client'

import { VStack, Heading, Text } from "@chakra-ui/react";

export default function MigrateSection() {
  return (
    <VStack py={20} gap={4}>
      <Heading fontSize="3xl">Development builds</Heading>
      <Text maxW="600px" textAlign="center">
        Create your own custom Expo Go replacement with native code support.
      </Text>
    </VStack>
  );
}
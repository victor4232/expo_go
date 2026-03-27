'use client'

import { Box, Image } from "@chakra-ui/react";

export default function Carousel() {
  return (
    <Box w="100%" display="flex" justifyContent="center" py={20}>
      <Image
        src="/images/slide-1.webp"
        alt="preview"
        borderRadius="2xl"
        maxW="400px"
      />
    </Box>
  );
}
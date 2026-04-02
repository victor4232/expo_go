'use client'

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Image, chakra } from "@chakra-ui/react";

const images = [
  "/image/slide-1.webp",
  "/image/slide-2.webp",
  "/image/slide-3.webp",
  "/image/slide-4.webp",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={8}
      w="100%"
    >
      <style>{`
        .carousel-img {
          height: 600px;
          min-height: 500px;
          max-height: 80svh;
          width: 100%;
          object-fit: contain;
        }
        @media (min-width: 1024px) {
          .carousel-img { max-height: 60svh; }
        }
      `}</style>

      {/* Slides */}
      <Box overflow="hidden" w="100%">
        <Box
          display="flex"
          ml={`32px`}
          style={{
            transform: `translate3d(${-current * 100}%, 0px, 0px)`,
            transition: "transform 0.6s ease",
            touchAction: "pan-y pinch-zoom",
          }}
        >
          {images.map((src, index) => (
            <Box
              key={index}
              minW={0}
              flex="0 0 100%" 
              pl={`32px`}
              style={{ willChange: "transform", userSelect: "none" }}
            >
              <Image
                src={src}
                alt={`Expo Go App`}
                draggable={false}
                className="carousel-img"
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Dots — order-1 desktop (abaixo), -order-1 mobile (acima) */}
      <Box
        display="flex"
        h="8px"
        alignItems="center"
        justifyContent="center"
        gap={1}
        order={{ base: -1, lg: 1 }}
      >
        {images.map((_, index) => (
          <chakra.button
            key={index}
            type="button"
            w={current === index ? "24px" : "8px"}
            h="8px"
            borderRadius="full"
            bg={
              current === index
                ? "var(--expo-theme-background-selected)"
                : "var(--expo-theme-background-element)"
            }
            border="none"
            cursor="pointer"
            p={0}
            transition="all 0.2s"
            onClick={() => setCurrent(index)}
          />
        ))}
      </Box>
    </Box>
  );
}
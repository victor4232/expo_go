'use client'

import { VStack, HStack, Box, Text, Heading, Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import Carousel from "./carousel";

const SDK_VERSIONS = [55, 54, 53, 52, 51, 50, 49, 48, 47, 46];

const PLATFORMS = [
  {
    label: "Android",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" role="img" style={{ width: 20, height: 20 }}>
        <path fill="currentColor" d="M15.9003 15.3983L4.07117 21.8866C3.90796 21.976 3.73602 22.0135 3.56921 22.0096L13.0907 12.6522L15.9003 15.3983ZM12.3759 11.953L2.6991 21.4628C2.63103 21.3289 2.5907 21.1762 2.5907 21.0096V2.97156C2.59077 2.79829 2.63464 2.64035 2.70789 2.50281L12.3759 11.953ZM20.3651 11.2059C21.0509 11.5894 21.0469 12.577 20.3583 12.955L16.8173 14.8964L13.8046 11.951L16.6669 9.13757L20.3651 11.2059ZM3.5946 1.97156C3.75607 1.972 3.92195 2.01168 4.07898 2.09949L15.7567 8.62878L13.0887 11.2518L3.5946 1.97156Z" />
      </svg>
    ),
    href: "#",
  },
  {
    label: "iOS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" role="img" style={{ width: 20, height: 20 }}>
        <path fill="currentColor" fillRule="evenodd" d="M5.47855 16.9963C6.11402 17.0215 6.8496 17.5684 7.53031 18.1525L6.22953 20.4016C5.78678 21.1663 4.80774 21.4273 4.043 20.9846C3.27856 20.5417 3.01733 19.5627 3.46 18.7981L4.00004 17.8645L4.00882 17.8752C4.24144 17.4419 4.55113 16.9595 5.47855 16.9963ZM12.2608 3.59884C12.7035 2.83414 13.6816 2.57318 14.4463 3.01583C15.211 3.45856 15.472 4.43665 15.0293 5.20138L8.47464 16.5227H4.77738L12.2608 3.59884Z" clipRule="evenodd" />
        <path fill="currentColor" d="M11.6182 13.3223C12.3354 13.325 13.0904 13.3673 13.5508 14.0488C14.0331 14.7629 14.0683 15.6813 13.8867 16.5225H3.59961C2.71613 16.5222 2 15.8054 2 14.9219C2.00021 14.0385 2.71626 13.3225 3.59961 13.3223H11.6182ZM20.4004 13.3223C21.2837 13.3225 21.9998 14.0385 22 14.9219C22 15.8054 21.2839 16.5222 20.4004 16.5225H15.6777L13.8125 13.3223H20.4004Z" />
        <path fill="currentColor" fillRule="evenodd" d="M20.6172 18.7981C21.0599 19.5627 20.7986 20.5418 20.0342 20.9846C19.2695 21.4274 18.2904 21.1663 17.8477 20.4016L13.2969 12.5403L13.2988 12.5413C12.9983 11.8872 12.6475 10.5569 13.4316 8.98854C13.7057 8.44042 14.0613 8.21003 14.4561 8.15748L20.6172 18.7981ZM9.63087 3.0149C10.3955 2.57261 11.3738 2.83433 11.8164 3.59889L13.8691 7.14479L11.9688 10.2464L9.04786 5.20143C8.60512 4.43669 8.86613 3.45765 9.63087 3.0149Z" clipRule="evenodd" />
      </svg>
    ),
    href: "#",
  },
  {
    label: "Android Emulator",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" role="img" style={{ width: 20, height: 20 }}>
        <path fill="currentColor" d="M17.0628 15.073C16.5576 15.073 16.1467 14.6605 16.1467 14.1537C16.1467 13.6469 16.5576 13.2347 17.0628 13.2347C17.5679 13.2347 17.9788 13.6469 17.9788 14.1537C17.9788 14.6605 17.5679 15.073 17.0628 15.073ZM6.9372 15.073C6.43204 15.073 6.02116 14.6605 6.02116 14.1537C6.02116 13.6469 6.43204 13.2347 6.9372 13.2347C7.44234 13.2347 7.85325 13.6469 7.85325 14.1537C7.85325 14.6605 7.44234 15.073 6.9372 15.073ZM17.3913 9.53705L19.2222 6.35598C19.3272 6.17313 19.2647 5.93959 19.0828 5.834C18.9008 5.72871 18.6677 5.79135 18.5624 5.97389L16.7087 9.19523C15.291 8.54619 13.6989 8.18468 12 8.18468C10.3011 8.18468 8.70893 8.54619 7.29131 9.19523L5.43751 5.97389C5.33226 5.79135 5.09916 5.72871 4.9172 5.834C4.73524 5.93959 4.67251 6.17313 4.77776 6.35598L6.60865 9.53705C3.46479 11.2524 1.31456 14.4454 1 18.2177H23C22.6851 14.4454 20.5349 11.2524 17.3913 9.53705Z" />
      </svg>
    ),
    href: "#",
  },
  {
    label: "iOS Simulator",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" role="img" style={{ width: 20, height: 20 }}>
        <path fill="currentColor" d="M20.4478 17.3538C20.1312 18.0852 19.7564 18.7585 19.3222 19.3775C18.7303 20.2214 18.2457 20.8055 17.8722 21.1299C17.2933 21.6623 16.673 21.935 16.0088 21.9505C15.5319 21.9505 14.9568 21.8148 14.2874 21.5395C13.6158 21.2656 12.9986 21.1299 12.4343 21.1299C11.8424 21.1299 11.2076 21.2656 10.5287 21.5395C9.84865 21.8148 9.30085 21.9582 8.88201 21.9724C8.24504 21.9996 7.61014 21.7192 6.9764 21.1299C6.57191 20.7771 6.06598 20.1723 5.45989 19.3155C4.80961 18.4005 4.27499 17.3396 3.85615 16.13C3.4076 14.8235 3.18274 13.5583 3.18274 12.3335C3.18274 10.9304 3.48591 9.72034 4.09316 8.70628C4.5704 7.89174 5.20531 7.24922 5.99994 6.77753C6.79457 6.30584 7.65317 6.06547 8.57781 6.0501C9.08374 6.0501 9.7472 6.20659 10.5717 6.51416C11.3938 6.82276 11.9217 6.97926 12.1532 6.97926C12.3262 6.97926 12.9127 6.79627 13.9068 6.43145C14.847 6.09313 15.6404 5.95304 16.2905 6.00823C18.0519 6.15038 19.3752 6.84473 20.2552 8.09567C18.6799 9.05016 17.9007 10.387 17.9162 12.102C17.9304 13.4379 18.415 14.5495 19.3674 15.4321C19.799 15.8418 20.2811 16.1584 20.8174 16.3833C20.7011 16.7206 20.5783 17.0436 20.4478 17.3538ZM16.4081 1.45728C16.4081 2.50431 16.0256 3.48192 15.2631 4.38678C14.343 5.46249 13.2301 6.08408 12.0232 5.986C12.0078 5.86039 11.9989 5.72819 11.9989 5.58926C11.9989 4.58412 12.4365 3.50841 13.2135 2.62888C13.6015 2.18355 14.0949 1.81327 14.6932 1.51789C15.2902 1.22692 15.855 1.066 16.3861 1.03845C16.4016 1.17842 16.4081 1.3184 16.4081 1.45727V1.45728Z" />
      </svg>
    ),
    href: "#",
  },
];

export default function Hero() {
  const [selectedSdk, setSelectedSdk] = useState(55);
  const [open, setOpen] = useState(false);

  return (
    <Box
      as="section"
      w="100%"
      bg="var(--expo-theme-background-element)"
      minH="calc(100vh - 60px)"
    >
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>

      <Box
        className="hero-grid"
        maxW="1280px"
        mx="auto"
        px={6}
        py={{ base: 10, lg: 16 }}
      >
        {/* ── Left column ── */}
        <Box display="flex" w="100%">
          <VStack align="start" w="100%" gap={10} >

            {/* Heading */}
            <Heading
              as="h1"
              fontSize={{ base: "32px", lg: "48px" }}
              lineHeight={{ base: "130%", lg: "110%" }}
              letterSpacing={{ base: "-0.025em", lg: "-0.05em" }}
              fontWeight={600}
              maxW={{ base: "15ch", lg: "none" }}
              color="var(--expo-theme-text-default)"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: 9, lg: 12 }}
                h={{ base: 9, lg: 12 }}
                borderRadius={{ base: "lg", lg: "13px" }}
                bg="var(--expo-color-white)"
                p={1.5}
                boxShadow="var(--expo-theme-shadows-md)"
                verticalAlign={{ base: "middle", lg: "top" }}
                mr={{ base: 2.5, lg: 4 }}
              >
                <svg viewBox="0 0 20 20" fill="none" role="img" style={{ width: "100%", height: "100%", color: "#000" }}>
                  <path d="M18.072 7.75a1.749 1.749 0 00-1.56-.732 1.763 1.763 0 00-1.436.946 1.55 1.55 0 00.302 1.75 2.57 2.57 0 001.716-.484 2.53 2.53 0 00.978-1.48zM12.866 1L11.751.394 6.897 3.072l.387.207.736.383 1.332-.733L12.867.987 12.866 1zm.449-.184a.173.173 0 01.124.115l1.626 4.755a.158.158 0 01-.077.207 3.126 3.126 0 00-1.384 1.519 3.09 3.09 0 00-.134 2.042 3.29 3.29 0 001.35 1.793 3.343 3.343 0 002.195.524.208.208 0 01.202.123l1.68 4.88a.196.196 0 01-.078.215l-5.163 2.992a.195.195 0 01-.078.015.208.208 0 01-.14-.022l-1.81-1.129a.18.18 0 01-.078-.076l-3.538-8.065-5.388 3.039a.25.25 0 01-.21.008l-1.224-.69a.177.177 0 01-.077-.23l5.234-9.847c.02-.033.05-.06.085-.076L11.65.023a.2.2 0 01.186 0l1.479.793zM6.843 3.46l-.256-.13-5.044 9.523.92.514 4.352-5.643a.212.212 0 01.178-.077.217.217 0 01.155.115l4.738 10.82 1.266.775L8.066 4.62l-.216-.614-1.014-.552.007.007zm7.804 5.679a1.932 1.932 0 01.092-1.28c.176-.404.484-.737.875-.945a2.152 2.152 0 012.509.307 1.934 1.934 0 01.056 2.745l-.056.056a2.118 2.118 0 01-1.986.516 2.118 2.118 0 01-.928-.508 2.091 2.091 0 01-.562-.891z" fill="currentColor" />
                </svg>
              </Box>
              <Box as="span" verticalAlign="bottom">Expo Go</Box>{" "}
              <Box as="span" verticalAlign="bottom" color="var(--expo-theme-text-secondary)">
                is a learning environment and sandbox for getting started
              </Box>
            </Heading>

            {/* SDK selector + Install cards — lg:pr-8 xl:pr-24 */}
            <VStack w="100%" gap={2} pr={{ lg: 8, xl: 24 }}>
              <HStack w="100%" justify="space-between" gap={2}>
                <Text
                  fontSize="sm"
                  fontWeight={600}
                  color="var(--expo-theme-text-secondary)"
                  display={{ base: "none", lg: "block" }}
                >
                  SDK Version
                </Text>

                <Box position="relative" w={{ base: "100%", lg: "auto" }}>
                  <Button
                    h="36px"
                    px={4}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight={600}
                    bg="var(--expo-theme-background-element)"
                    color="var(--expo-theme-text-default)"
                    border="none"
                    _hover={{ bg: "var(--expo-theme-background-hover)" }}
                    gap={2}
                    w={{ base: "100%", lg: "auto" }}
                    minW={24}
                    justifyContent="center"
                    onClick={() => setOpen(!open)}
                  >
                    <Box as="span" fontWeight={600}>SDK {selectedSdk}</Box>
                    {selectedSdk === 55 && (
                      <Box as="span" ml="-1" color="var(--expo-theme-text-secondary)">
                        (latest)
                      </Box>
                    )}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      style={{ width: 16, height: 16, flexShrink: 0, color: "var(--expo-theme-icon-secondary)" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9L12 15L18 9" />
                    </svg>
                  </Button>

                  {open && (
                    <VStack
                      position="absolute"
                      top="110%"
                      right={0}
                      bg="white"
                      borderRadius="xl"
                      boxShadow="lg"
                      border="1px solid var(--expo-theme-border-default)"
                      overflow="hidden"
                      zIndex={10}
                      minW="140px"
                      gap={0}
                    >
                      {SDK_VERSIONS.map((sdk) => (
                        <Box
                          key={sdk}
                          w="100%"
                          px={4}
                          py={2}
                          cursor="pointer"
                          fontSize="sm"
                          fontWeight={500}
                          _hover={{ bg: "var(--expo-theme-background-hover)" }}
                          onClick={() => { setSelectedSdk(sdk); setOpen(false); }}
                        >
                          SDK {sdk} {sdk === 55 && "(latest)"}
                        </Box>
                      ))}
                    </VStack>
                  )}
                </Box>
              </HStack>

              {/* Install cards */}
              <VStack w="100%" borderRadius="xl" bg="var(--expo-color-white)" p={2} gap={0}>
                {PLATFORMS.map(({ label, icon, href }) => (
                  <Link
                    as={NextLink}
                    href={href}
                    key={label}
                    _hover={{ textDecoration: "none" }}
                    w="100%"
                  >
                    <HStack
                      w="100%"
                      justify="space-between"
                      px={4}
                      py={4}
                      borderRadius="lg"
                      cursor="pointer"
                      color="var(--expo-theme-text-default)"
                      _hover={{ bg: "var(--expo-theme-background-hover)" }}
                      transition="background-color 0.2s"
                    >
                      <HStack gap={2}>
                        <Box color="var(--expo-color-black)" flexShrink={0}>
                          {icon}
                        </Box>
                        <Text fontSize="sm" fontWeight={500}>
                          {label}
                        </Text>
                      </HStack>

                      <Text fontSize="sm" fontWeight={500} color="var(--expo-theme-text-link)">
                        Install
                      </Text>
                    </HStack>
                  </Link>
                ))}
              </VStack>
            </VStack>

            {/* ── Mobile-only carousel (hidden on lg+) ── */}
            <Box
              display={{ base: "block", lg: "none" }}
              overflow="hidden"
              borderRadius="xl"
              bg="var(--expo-color-white)"
              w="100%"
              mb="-144px"
            >
              <Box display="flex" alignItems="center" justifyContent="center" pt={8}>
                <Carousel />
              </Box>
            </Box>

            {/* Ready to migrate — lg:pr-8 xl:pr-24 */}
            <VStack w="100%" align="start" gap={2} pr={{ lg: 8, xl: 24 }}>
              <Text fontSize="base" fontWeight={600} color="var(--expo-theme-text-secondary)">
                Ready to migrate?
              </Text>
              <VStack w="100%" borderRadius="xl" bg="var(--expo-color-white)" p={2} gap={0}>
                {[
                  {
                    title: "Expo Go vs Development Build",
                    action: "View guide",
                    href: "/blog/expo-go-vs-development-builds",
                  },
                  {
                    title: "Migrate from Expo Go to development build",
                    action: "Read docs",
                    href: "https://docs.expo.dev/develop/development-builds/expo-go-to-dev-build/",
                  },
                ].map(({ title, action, href }) => (
                  <Link
                    as={NextLink}
                    href={href}
                    key={title}
                    target="_blank"
                    rel="noopener noreferrer"
                    w="100%"
                    _hover={{ textDecoration: "none" }}
                  >
                    <HStack
                      w="100%"
                      justify="space-between" 
                      px={4}
                      py={4}
                      borderRadius="lg"
                      flexDirection={{ base: "column", lg: "row" }}
                      align={{ base: "start", lg: "center" }}
                      color="var(--expo-theme-text-default)"
                      _hover={{ bg: "var(--expo-theme-background-hover)" }}
                      transition="background-color 0.2s"
                    >
                      <Text fontSize="sm" fontWeight={500} color="var(--expo-theme-text-secondary)">
                        {title}
                      </Text>

                      <Text
                        fontSize="sm"
                        fontWeight={500}
                        color="var(--expo-theme-text-link)"
                        flexShrink={0}
                      >
                        {action}
                      </Text>
                    </HStack>
                  </Link>
                ))}
              </VStack>
            </VStack>

          </VStack>
        </Box>

        {/* ── Right column: desktop carousel (hidden on mobile) ── */}
        <Box
          display={{ base: "none", lg: "flex" }}
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          borderRadius="40px"
          bg="var(--expo-color-white)"
          py={20}
        >
          <Carousel />
        </Box>

      </Box>
    </Box>
  );
}
'use client'

import {
  VStack,
  HStack,
  Box,
  Text,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface FooterColumn {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Star us on GitHub", href: "https://github.com/expo/expo", external: true },
      { label: "Expo CLI on GitHub", href: "https://github.com/expo/expo/tree/main/packages/%40expo/cli", external: true },
      { label: "EAS - Expo Application Services", href: "/services" },
      { label: "EAS CLI on GitHub", href: "https://github.com/expo/eas-cli", external: true },
      { label: "Expo Go", href: "/go" },
      { label: "Expo Orbit", href: "/orbit" },
      { label: "Snack", href: "https://snack.expo.dev", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "https://docs.expo.dev/", external: true },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
      { label: "Newsletter", href: "/mailing-list/signup" },
      { label: "Support", href: "/support" },
      { label: "Trust Center", href: "/trust" },
      { label: "Join Discord", href: "https://chat.expo.dev", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Homepage", href: "/home" },
      { label: "Pricing", href: "/pricing" },
      { label: "Customers", href: "/customers" },
      { label: "Consultants", href: "/consultants" },
      { label: "About", href: "/about" },
      { label: "Branding", href: "/brand" },
      { label: "Work at Expo", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "/terms" },
      { label: "Acceptable use policy", href: "/acceptable-use" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Privacy explained", href: "/privacy-explained" },
      { label: "Cookie policy", href: "/privacy/cookies" },
      { label: "Security & Compliance", href: "/security" },
      { label: "Enterprise trust", href: "/trust" },
      { label: "Community guidelines", href: "/community-guidelines" },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="var(--expo-theme-border-default)"
      bg="var(--expo-theme-background-default)"
    >
      <Box maxW="1280px" mx="auto" px={6} pt={16} pb={20}>

        <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
          {COLUMNS.map((col) => (
            <VStack key={col.title} align="start" gap={0}>
              <Text
                px={3.5}
                py={2}
                fontWeight={500}
                fontSize="sm"
                color="var(--expo-theme-text-default)"
              >
                {col.title}
              </Text>
              {col.links.map(({ label, href, external }) => (
                <ChakraLink
                  key={label}
                  asChild
                  display="flex"
                  alignItems="center"
                  gap={1}
                  w="100%"
                  px={3.5}
                  py={2}
                  fontSize="sm"
                  borderRadius="md"
                  color="var(--expo-theme-text-secondary)"
                  _hover={{
                    bg: "var(--expo-theme-background-subtle)",
                    opacity: 0.8,
                    textDecoration: "none",
                  }}
                  transition="background-color 0.15s, opacity 0.15s"
                >
                  <NextLink
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    {label}
                    {external && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14, color: "var(--expo-theme-icon-secondary)", flexShrink: 0 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    )}
                  </NextLink>
                </ChakraLink>
              ))}
            </VStack>
          ))}
        </SimpleGrid>

        <HStack
          mt={20}
          justify="space-between"
          align="center"
          gap={6}
          flexWrap="wrap"
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <VStack align="start" gap={4}>
            <HStack gap={0}>
              <NextLink href="/" aria-label="Expo home">
                <svg viewBox="0 0 71 20" fill="none" style={{ width: 84, color: "var(--expo-theme-icon-default)" }}>
                  <path d="M9.258 6.342c.158-.23.331-.26.472-.26.14 0 .374.03.532.26 2.06 2.806 6.332 10.208 6.727 10.611.585.597 1.388.225 1.854-.452.46-.667.587-1.135.587-1.634 0-.34-6.653-12.614-7.324-13.636C11.462.248 11.252 0 10.15 0h-.825c-1.1 0-1.259.248-1.903 1.23C6.75 2.254.097 14.528.097 14.868c0 .5.127.967.587 1.634.466.677 1.269 1.05 1.854.452.395-.403 4.661-7.805 6.72-10.61zm14.941-5.237v15.344h9.35v-3.113h-6.125v-3.244h5.45V6.98h-5.45V4.218h6.125V1.105h-9.35zM46.25 16.449l-3.88-5.568 3.619-5.195h-3.662L40.54 8.23l-1.765-2.543h-3.706l3.618 5.217-3.857 5.546h3.661l2.027-2.915 2.027 2.915h3.705zm7.572-10.982c-1.482 0-2.637.614-3.378 1.732V5.686H47.37V20h3.073v-5.063c.74 1.117 1.896 1.731 3.378 1.731 2.768 0 4.97-2.52 4.97-5.611 0-3.091-2.202-5.59-4.97-5.59zm-.697 8.242c-1.504 0-2.681-1.14-2.681-2.652 0-1.49 1.177-2.653 2.68-2.653 1.483 0 2.681 1.184 2.681 2.653 0 1.49-1.198 2.652-2.68 2.652zm12.188-8.242c-3.16 0-5.558 2.411-5.558 5.612 0 3.2 2.397 5.59 5.557 5.59 3.139 0 5.558-2.39 5.558-5.59 0-3.2-2.42-5.612-5.558-5.612zm0 2.96c1.438 0 2.55 1.117 2.55 2.652 0 1.49-1.112 2.63-2.55 2.63-1.46 0-2.55-1.14-2.55-2.63 0-1.535 1.09-2.653 2.55-2.653z" fill="currentColor" />
                </svg>
              </NextLink>

              <Box w="1px" h="28px" bg="var(--expo-theme-border-default)" mx={4} />

              <HStack gap={0.5}>
                {[
                  { title: "GitHub", href: "https://www.github.com/expo/expo", path: "M12 1.60205C5.9225 1.60205 1 6.41965 1 12.3676C1 17.1314 4.14875 21.155 8.52125 22.5815C9.07125 22.6757 9.2775 22.3527 9.2775 22.0701C9.2775 21.8144 9.26375 20.9666 9.26375 20.065C6.5 20.5629 5.785 19.4056 5.565 18.8001C5.44125 18.4906 4.905 17.5351 4.4375 17.2794C4.0525 17.0776 3.5025 16.5797 4.42375 16.5662C5.29 16.5528 5.90875 17.3467 6.115 17.6697C7.105 19.298 8.68625 18.8404 9.31875 18.5578C9.415 17.8581 9.70375 17.3871 10.02 17.1179C7.5725 16.8488 5.015 15.9203 5.015 11.8024C5.015 10.6317 5.44125 9.66278 6.1425 8.90919C6.0325 8.64005 5.6475 7.53658 6.2525 6.05631C6.2525 6.05631 7.17375 5.77372 9.2775 7.15978C10.1575 6.91756 11.0925 6.79645 12.0275 6.79645C12.9625 6.79645 13.8975 6.91756 14.7775 7.15978C16.8813 5.76026 17.8025 6.05631 17.8025 6.05631C18.4075 7.53658 18.0225 8.64005 17.9125 8.90919C18.6138 9.66278 19.04 10.6182 19.04 11.8024C19.04 15.9337 16.4688 16.8488 14.0213 17.1179C14.42 17.4544 14.7638 18.1003 14.7638 19.1096C14.7638 20.5495 14.75 21.7068 14.75 22.0701C14.75 22.3527 14.9563 22.6891 15.5063 22.5815C17.69 21.86 19.5875 20.4865 20.9318 18.6542C22.2761 16.822 22.9994 14.6233 23 12.3676C23 6.41965 18.0775 1.60205 12 1.60205Z" },
                ].map(({ title, href, path }) => (
                  <Box
                    key={title}
                    as="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    w={8}
                    h={8}
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="var(--expo-theme-border-default)"
                    bg="var(--expo-theme-button-quaternary-background)"
                    color="var(--expo-theme-icon-default)"
                    _hover={{ bg: "var(--expo-theme-button-quaternary-hover)", textDecoration: "none" }}
                    transition="background-color 0.15s"
                  >
                    <svg viewBox="0 0 24 24" fill="none" style={{ width: 16, height: 16 }}>
                      <path fill="currentColor" d={path} />
                    </svg>
                  </Box>
                ))}
              </HStack>
            </HStack>

            <Text fontSize="sm" color="var(--expo-theme-text-secondary)">
              Copyright © 2026 650 Industries, Inc. All rights reserved.
            </Text>

            <HStack
              as="button"
              gap={1.5}
              color="var(--expo-theme-text-secondary)"
              _hover={{ color: "var(--expo-theme-text-default)" }}
              transition="color 0.15s"
              cursor="pointer"
              bg="transparent"
              border="none"
            >
              <Text fontSize="sm" fontWeight={600}>Your Privacy Choices</Text>
            </HStack>
          </VStack>

          <Box
            as="a"
            href="https://status.expo.dev"
            target="_blank"
            rel="noopener noreferrer"
            display="inline-flex"
            alignItems="center"
            gap={2}
            h="36px"
            px={4}
            borderRadius="full"
            fontSize="sm"
            fontWeight={500}
            border="1px solid"
            borderColor="var(--expo-theme-border-default)"
            bg="var(--expo-theme-button-quaternary-background)"
            color="var(--expo-theme-text-default)"
            _hover={{ bg: "var(--expo-theme-button-quaternary-hover)", textDecoration: "none" }}
            transition="background-color 0.15s"
          >
            <Box w={2} h={2} borderRadius="full" bg="var(--amber-11)" flexShrink={0} />
            Minor Service Outage
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14, color: "var(--expo-theme-icon-secondary)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
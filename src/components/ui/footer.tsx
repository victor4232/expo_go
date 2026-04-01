'use client'

import { Box, Text, HStack, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { Image, Link } from "@chakra-ui/react";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Star us on GitHub", href: "https://github.com/expo/expo", external: true },
      { label: "Expo CLI on GitHub", href: "https://github.com/expo/expo/tree/main/packages/%40expo/cli", external: true },
      { label: "Expo Application Services (EAS)", href: "/services" },
      { label: "EAS CLI on GitHub", href: "https://github.com/expo/eas-cli", external: true },
      { label: "Expo Go", href: "/go" },
      { label: "Expo Orbit", href: "/orbit" },
      { label: "Snack", href: "https://snack.expo.dev", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.expo.dev/", external: true },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
      { label: "Support", href: "/support" },
      { label: "Trust Center", href: "/trust" },
      { label: "Join Discord", href: "https://chat.expo.dev", external: true },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Enterprise", href: "/solutions/enterprise" },
      { label: "Startup", href: "/solutions/startups" },
      { label: "Solo devs", href: "/solutions/solo-devs" },
      { label: "React web devs", href: "/solutions/expo-for-react-web-devs" },
      { label: "E-commerce", href: "/solutions/ecom" },
      { label: "Crypto", href: "/solutions/crypto" },
      { label: "Finserv", href: "/solutions/financial-services" },
      { label: "QSR", href: "/solutions/qsr" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/home" },
      { label: "Pricing", href: "/pricing" },
      { label: "Customers", href: "/customers" },
      { label: "Consultants", href: "/consultants" },
      { label: "About", href: "/about" },
      { label: "Branding", href: "/brand" },
      { label: "Careers", href: "/careers" },
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

const SOCIALS = [
  {
    title: "GitHub",
    href: "https://www.github.com/expo/expo",
    path: "M12 1.60205C5.9225 1.60205 1 6.41965 1 12.3676C1 17.1314 4.14875 21.155 8.52125 22.5815C9.07125 22.6757 9.2775 22.3527 9.2775 22.0701C9.2775 21.8144 9.26375 20.9666 9.26375 20.065C6.5 20.5629 5.785 19.4056 5.565 18.8001C5.44125 18.4906 4.905 17.5351 4.4375 17.2794C4.0525 17.0776 3.5025 16.5797 4.42375 16.5662C5.29 16.5528 5.90875 17.3467 6.115 17.6697C7.105 19.298 8.68625 18.8404 9.31875 18.5578C9.415 17.8581 9.70375 17.3871 10.02 17.1179C7.5725 16.8488 5.015 15.9203 5.015 11.8024C5.015 10.6317 5.44125 9.66278 6.1425 8.90919C6.0325 8.64005 5.6475 7.53658 6.2525 6.05631C6.2525 6.05631 7.17375 5.77372 9.2775 7.15978C10.1575 6.91756 11.0925 6.79645 12.0275 6.79645C12.9625 6.79645 13.8975 6.91756 14.7775 7.15978C16.8813 5.76026 17.8025 6.05631 17.8025 6.05631C18.4075 7.53658 18.0225 8.64005 17.9125 8.90919C18.6138 9.66278 19.04 10.6182 19.04 11.8024C19.04 15.9337 16.4688 16.8488 14.0213 17.1179C14.42 17.4544 14.7638 18.1003 14.7638 19.1096C14.7638 20.5495 14.75 21.7068 14.75 22.0701C14.75 22.3527 14.9563 22.6891 15.5063 22.5815C17.69 21.86 19.5875 20.4865 20.9318 18.6542C22.2761 16.822 22.9994 14.6233 23 12.3676C23 6.41965 18.0775 1.60205 12 1.60205Z",
  },
  {
    title: "X",
    href: "https://www.twitter.com/expo",
    path: "M13.9027 10.4686L21.3482 2H19.5838L13.119 9.3532L7.95547 2H2L9.8082 13.1193L2 22H3.76443L10.5915 14.2348L16.0445 22H22L13.9023 10.4686H13.9027ZM11.4861 13.2173L10.695 12.1101L4.40018 3.29968H7.11025L12.1902 10.4099L12.9813 11.5172L19.5847 20.7594H16.8746L11.4861 13.2177V13.2173Z",
  },
  {
    title: "Discord",
    href: "https://chat.expo.dev",
    path: "M18.9556 6.25999C17.6518 5.67 16.2671 5.24 14.8218 5C14.6399 5.31 14.4377 5.73 14.2962 6.06C12.759 5.83999 11.2328 5.83999 9.71672 6.06C9.57521 5.73 9.36295 5.31 9.19112 5C7.73573 5.24 6.35105 5.67 5.05634 6.25999C2.4386 10.08 1.73111 13.81 2.08485 17.4899C3.82327 18.7399 5.50106 19.5 7.14953 20C7.55382 19.46 7.91768 18.8799 8.231 18.27C7.63468 18.05 7.06868 17.78 6.5229 17.4599C6.6644 17.36 6.8059 17.25 6.93729 17.14C10.2322 18.63 13.801 18.63 17.0555 17.14C17.197 17.25 17.3284 17.36 17.4699 17.4599C16.9241 17.78 16.3581 18.05 15.7618 18.27C16.0751 18.8799 16.439 19.46 16.8432 20C18.4907 19.5 20.1786 18.7399 21.9079 17.4899C22.3425 13.23 21.2196 9.53002 18.9556 6.25999ZM8.68581 15.22C7.6953 15.22 6.88674 14.33 6.88674 13.24C6.88674 12.15 7.67509 11.26 8.68581 11.26C9.68639 11.26 10.505 12.15 10.4848 13.24C10.4848 14.33 9.68639 15.22 8.68581 15.22ZM15.3272 15.22C14.3367 15.22 13.5271 14.33 13.5271 13.24C13.5271 12.15 14.3164 11.26 15.3272 11.26C16.3278 11.26 17.1464 12.15 17.1262 13.24C17.1262 14.33 16.3379 15.22 15.3272 15.22Z",
  },
  {
    title: "Bluesky",
    href: "https://bsky.app/profile/expo.dev",
    path: "M12 10.9855C11.0944 9.20223 8.62822 5.87897 6.33526 4.23997C4.13873 2.66991 3.30078 2.94195 2.75144 3.19327C2.11561 3.48417 2 4.47254 2 5.05405C2 5.63555 2.31486 9.82155 2.52023 10.5203C3.19881 12.829 5.61446 13.6091 7.83911 13.3588C7.95283 13.3417 8.06817 13.3259 8.18494 13.3113C8.07039 13.3299 7.955 13.3457 7.83911 13.3588C4.57891 13.8476 1.68354 15.0506 5.48101 19.3311C9.65822 23.7101 11.2058 18.3921 12 15.6957C12.7942 18.3921 13.7089 23.5184 18.4442 19.3311C22 15.6957 19.4211 13.8478 16.1609 13.3589C16.045 13.3458 15.9296 13.33 15.8151 13.3115C15.9318 13.326 16.0472 13.3418 16.1609 13.3589C18.3856 13.6093 20.8012 12.8291 21.4798 10.5205C21.6852 9.82171 22 5.63569 22 5.05419C22 4.47269 21.8844 3.48432 21.2486 3.19342C20.6992 2.94209 19.8613 2.67005 17.6647 4.24012C15.3718 5.87912 12.9056 9.20223 12 10.9855Z",
  },
];

export default function Footer() {
  return (
    <Box as="footer">
      <Box maxW="1280px" mx="auto" px={6}>

        {/* ── Nav: branding column + 5 link columns ── */}
        <Box
          as="nav"
          aria-label="Expo Directory"
          display="flex"
          gap={{ base: 10, lg: 4 }}
          py={{ base: 10, lg: 0 }}
          pb={{ lg: 12 }}
          pt={{ lg: 22 }}
          flexDir={{ base: "column", lg: "row" }}
        >
          {/* Left: logo + newsletter */}
          <Box
            maxW={{ lg: "300px" }}
            w={{ lg: "100%" }}
            display="flex"
            flexDir={{ base: "column", md: "row", lg: "column" }}
            gap={6}
          >
            {/* Logo */}
            <Link
              as={NextLink}
              href="/"
              display="inline-block"
              alignSelf="start"
              borderRadius="xl"
              boxShadow="0 5px 10px rgba(0,0,0,0.05), 0 15px 25px rgba(0,0,0,0.12)"
              _dark={{
                boxShadow:
                  "0 5px 10px rgba(255,255,255,0.05), 0 15px 25px rgba(255,255,255,0.12)",
              }}
            >
              <Image
                src="https://static.expo.dev/static/images/footer-icon.webp"
                alt="Expo"
                boxSize="44px"
              />
            </Link>

            {/* Newsletter block */}
            <Box
              display="flex"
              flexDir={{ base: "row", lg: "column" }}
              gap={2}
              alignItems={{ base: "center", lg: "start" }}
              justifyContent={{ lg: "center" }}
              pb={{ lg: 6 }}
              h={{ lg: "100%" }}
              bg={{ base: "var(--expo-theme-background-subtle)", md: "transparent" }}
              p={{ base: 4, md: 0 }}
              borderRadius={{ base: "xl", md: "none" }}
            >
              <Box display="flex" flexDir="column" gap={{ lg: 2 }} alignItems="start">
                <Text
                  fontFamily="mono"
                  textTransform="uppercase"
                  fontSize="xs"
                  color="var(--expo-theme-text-secondary)"
                  display="flex"
                  alignItems="center"
                  gap={1.5}
                >
                  <Box as="span" display="inline-block" w="6px" h="10px" bg="#0072DE" />
                  Newsletter
                </Text>
                <Text fontSize="sm" color="var(--expo-theme-text-secondary)">
                  Stay in touch with all things expo
                </Text>
              </Box>

              <Box
                as="button"
                display="inline-flex"
                alignItems="center"
                gap={2}
                h="36px"
                px={4}
                borderRadius="full"
                fontSize="sm"
                fontWeight={600}
                bg="var(--expo-theme-button-primary-background)"
                color="var(--expo-theme-button-primary-text)"
                border="1px solid var(--expo-theme-button-primary-border)"
                ml={{ base: "auto", md: 0 }}
                style={{ whiteSpace: "nowrap", cursor: "pointer" }}
                _hover={{ bg: "var(--expo-theme-button-primary-hover)" }}
                transition="background-color 0.15s"
              >
                Subscribe
              </Box>
            </Box>
          </Box>

          {/* Right: 5 link columns */}
          <Box
            flex={1}
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(5, 1fr)",
            }}
            gap={4}
            rowGap={10}
          >
            {COLUMNS.map((col) => (
              <Box key={col.title}>
                <Text fontWeight={600} fontSize="base" mb={5}>
                  {col.title}
                </Text>
                <Box as="ul" m={0} p={0} listStyleType="none" display="flex" flexDir="column" gap={3}>
                  {col.links.map(({ label, href, external }) => (
                    <Box as="li" key={label} m={0}>
                      <Link
                        as={NextLink}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        fontSize="sm"
                        color="var(--expo-theme-text-secondary)"
                        _hover={{
                          opacity: 0.8,
                          color: "var(--expo-theme-text-default)",
                          textDecoration: "underline",
                        }}
                        transition="color 0.15s"
                      >
                        {label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Bottom bar ── */}
        <Box
          as="section"
          fontSize="xs"
          color="var(--expo-theme-text-secondary)"
          py={6}
          borderTop={{ base: "1px solid var(--expo-theme-border-default)", md: "none" }}
        >
          {/* Row 1: copyright + status badge + socials */}
          <Box
            display="flex"
            flexDir={{ base: "column", md: "row" }}
            alignItems="center"
            gap={{ base: 3, md: 2 }}
          >
            <Text as="span">© 2026 650 Industries, Inc.</Text>

            {/* Status badge */}
            <Link
              as={NextLink}
              href="https://status.expo.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="All Systems Operational"
              display="inline-flex"
              alignItems="center"
              gap={1}
              px={1}
              py={0}
              h="auto"
              borderRadius="full"
              fontSize="xs"
              fontWeight={500}
              border="1px solid var(--expo-theme-button-quaternary-border)"
              bg="var(--expo-theme-button-quaternary-background)"
              color="var(--expo-theme-button-quaternary-text)"
              style={{ textDecoration: "none", whiteSpace: "nowrap" }}
              _hover={{ bg: "var(--expo-theme-button-quaternary-hover)" }}
              transition="background-color 0.15s"
            >
              <Box as="span" w={2} h={2} borderRadius="full" bg="var(--expo-color-green10)" mr={1} />
              All Systems Operational
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14, color: "var(--expo-theme-button-quaternary-icon)", flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>

            {/* Socials — pushed right on md+ */}
            <Box
              display="flex"
              alignItems="center"
              ml={{ base: 0, md: "auto" }}
              my={{ base: 2, md: 0 }}
            >
              <HStack gap={1}>
                {SOCIALS.map(({ title, href, path }) => (
                  <Link
                    key={title}
                    as={NextLink}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    p={1}
                    h={6}
                    borderRadius="lg"
                    fontSize="xs"
                    border="1px solid var(--expo-theme-button-quaternary-border)"
                    bg="var(--expo-theme-button-quaternary-background)"
                    color="var(--expo-theme-text-default)"
                    style={{ textDecoration: "none" }}
                    _hover={{ bg: "var(--expo-theme-button-quaternary-hover)", color: "var(--expo-theme-text-default)" }}
                    transition="background-color 0.15s"
                  >
                    <svg viewBox="0 0 24 24" fill="none" width={16} height={16}>
                      <path fill="currentColor" d={path} />
                    </svg>
                  </Link>
                ))}
              </HStack>
            </Box>
          </Box>

          {/* Row 2: Privacy Choices */}
          <Box
            display="flex"
            flexDir={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            pt={2}
            gap={4}
          >
            <Box
              as="button"
              display="inline-flex"
              alignItems="center"
              gap={1.5}
              fontSize="sm"
              color="var(--expo-theme-text-secondary)"
              bg="transparent"
              border="none"
              cursor="pointer"
              _hover={{ color: "var(--expo-theme-text-default)" }}
              transition="color 0.15s"
              aria-label="Your Privacy Choices"
            >
              {/* California privacy icon */}
              <svg width={30} height={16} viewBox="0 0 743 376" fill="none">
                <rect width="742.6" height="376" rx="188" fill="white" />
                <rect x="14.2146" y="14.2146" width="714.171" height="347.571" rx="173.785" stroke="#405D96" strokeWidth="28.4292" />
                <path d="M421.723 0H554.6C658.43 0 742.6 84.1705 742.6 188C742.6 291.83 658.43 376 554.6 376H320.877L421.723 0Z" fill="#405D96" />
                <path fillRule="evenodd" clipRule="evenodd" d="M315.783 112.736C321.683 117.519 322.591 126.181 317.809 132.084L216.494 257.149C207.93 267.721 192.099 268.548 182.48 258.926L123.211 199.638C117.84 194.266 117.84 185.556 123.211 180.184C128.581 174.812 137.288 174.812 142.659 180.184L198.33 235.873L296.44 114.763C301.222 108.86 309.882 107.953 315.783 112.736Z" fill="#405D96" />
                <path fillRule="evenodd" clipRule="evenodd" d="M456.576 106.585C462.095 101.365 470.799 101.608 476.017 107.129L608.556 247.338C613.774 252.858 613.531 261.565 608.013 266.785C602.494 272.005 593.79 271.761 588.572 266.241L456.033 126.031C450.814 120.511 451.058 111.804 456.576 106.585Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M610.222 108.733C615.592 114.106 615.592 122.815 610.222 128.188L473.815 264.636C468.445 270.008 459.738 270.008 454.367 264.636C448.997 259.264 448.997 250.554 454.367 245.182L590.774 108.733C596.144 103.361 604.851 103.361 610.222 108.733Z" fill="white" />
              </svg>
              <Text as="span" fontWeight={600}>Your Privacy Choices</Text>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
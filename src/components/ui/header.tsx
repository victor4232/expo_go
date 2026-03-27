'use client'

import { useState, useRef, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import NextLink from "next/link";

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      style={{
        width: 16, height: 16,
        color: "var(--expo-theme-icon-secondary)",
        flexShrink: 0,
        transition: "transform 0.2s",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9L12 15L18 9" />
    </svg>
  );
}

function Dropdown({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <Box
      position="absolute"
      top="calc(100% + 4px)"
      left="50%"
      style={{ transform: "translateX(-50%)" }}
      bg="white"
      border="1px solid var(--expo-theme-border-default)"
      borderRadius="12px"
      boxShadow="0 8px 24px 0 rgba(14,18,27,0.12)"
      p={3}
      minW="440px"
      zIndex={200}
      display={open ? "block" : "none"}
      opacity={open ? 1 : 0}
      style={{ pointerEvents: open ? "auto" : "none", transition: "opacity 0.15s" }}
    >
      {children}
    </Box>
  );
}

function DropItem({
  href,
  icon,
  label,
  badge,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  badge?: string;
}) {
  return (
    <Box
      as="a"
      href={href}
      display="flex"
      alignItems="center"
      gap="10px"
      px="12px"
      py="10px"
      borderRadius="8px"
      fontSize="sm"
      fontWeight={500}
      color="var(--expo-theme-text-default)"
      style={{ textDecoration: "none" }}
      _hover={{ bg: "var(--expo-theme-background-subtle)" }}
      transition="background-color 0.15s"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="28px" h="28px"
        borderRadius="8px"
        border="1px solid var(--expo-theme-border-default)"
        bg="white"
        flexShrink={0}
        color="var(--expo-theme-text-default)"
      >
        {icon}
      </Box>
      {label}
      {badge && (
        <Box
          as="span"
          px="6px"
          py="2px"
          borderRadius="full"
          fontSize="xs"
          fontWeight={500}
          bg="var(--expo-theme-background-info)"
          color="var(--expo-theme-text-link)"
          border="1px solid var(--expo-theme-border-info)"
          ml="auto"
          flexShrink={0}
        >
          {badge}
        </Box>
      )}
    </Box>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <Box
      px="12px"
      py="6px"
      fontSize="xs"
      fontWeight={600}
      letterSpacing="0.06em"
      color="var(--expo-theme-text-tertiary)"
      style={{ textTransform: "uppercase" }}
    >
      {children}
    </Box>
  );
}

const icons = {
  sdk: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></svg>,
  cli: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><polyline points="4 17 10 11 4 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><line x1="12" y1="19" x2="20" y2="19" strokeLinecap="round" strokeWidth={1.5} /></svg>,
  go: <svg viewBox="0 0 20 20" fill="none" style={{ width: 14, height: 14 }}><path d="M18.072 7.75a1.749 1.749 0 00-1.56-.732 1.763 1.763 0 00-1.436.946 1.55 1.55 0 00.302 1.75 2.57 2.57 0 001.716-.484 2.53 2.53 0 00.978-1.48zM12.866 1L11.751.394 6.897 3.072l.387.207.736.383 1.332-.733L12.867.987 12.866 1zm.449-.184a.173.173 0 01.124.115l1.626 4.755a.158.158 0 01-.077.207 3.126 3.126 0 00-1.384 1.519 3.09 3.09 0 00-.134 2.042 3.29 3.29 0 001.35 1.793 3.343 3.343 0 002.195.524.208.208 0 01.202.123l1.68 4.88a.196.196 0 01-.078.215l-5.163 2.992a.195.195 0 01-.078.015.208.208 0 01-.14-.022l-1.81-1.129a.18.18 0 01-.078-.076l-3.538-8.065-5.388 3.039a.25.25 0 01-.21.008l-1.224-.69a.177.177 0 01-.077-.23l5.234-9.847c.02-.033.05-.06.085-.076L11.65.023a.2.2 0 01.186 0l1.479.793z" fill="currentColor" /></svg>,
  snack: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></svg>,
  orbit: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><circle cx="12" cy="12" r="3" strokeWidth={1.5} /><path d="M12 1C12 1 17 5 17 12s-5 11-5 11M12 1C12 1 7 5 7 12s5 11 5 11M1 12h22" strokeLinecap="round" strokeWidth={1.5} /></svg>,
  cicd: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></svg>,
  build: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth={1.5} /><line x1="8" y1="21" x2="16" y2="21" strokeWidth={1.5} /><line x1="12" y1="17" x2="12" y2="21" strokeWidth={1.5} /></svg>,
  submit: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></svg>,
  update: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><polyline points="23 4 23 10 17 10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></svg>,
  hosting: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><rect x="2" y="2" width="20" height="8" rx="2" ry="2" strokeWidth={1.5} /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" strokeWidth={1.5} /><line x1="6" y1="6" x2="6.01" y2="6" strokeWidth={2} strokeLinecap="round" /><line x1="6" y1="18" x2="6.01" y2="18" strokeWidth={2} strokeLinecap="round" /></svg>,
  observe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth={1.5} /><circle cx="12" cy="12" r="3" strokeWidth={1.5} /></svg>,
  launch: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l-3-3zm12-12C11 8 8 11 8 11L5.62 9.53l6.13-6.13 4.75 1.1zM12 12l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="M14.5 4.5l5 5" strokeLinecap="round" strokeWidth={1.5} /></svg>,
  enterprise: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><circle cx="12" cy="12" r="10" strokeWidth={1.5} /><line x1="2" y1="12" x2="22" y2="12" strokeWidth={1.5} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth={1.5} /></svg>,
  startup: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><polyline points="16 7 22 7 22 13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></svg>,
  solo: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth={1.5} strokeLinecap="round" /><circle cx="12" cy="7" r="4" strokeWidth={1.5} /></svg>,
  react: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><circle cx="12" cy="12" r="2" strokeWidth={1.5} /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" strokeWidth={1.5} /></svg>,
  ecom: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><circle cx="9" cy="21" r="1" strokeWidth={1.5} /><circle cx="20" cy="21" r="1" strokeWidth={1.5} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></svg>,
  crypto: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" strokeWidth={1.5} /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeWidth={1.5} /></svg>,
  finserv: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth={1.5} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth={1.5} /></svg>,
  qsr: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 14, height: 14 }}><path d="M18 8h1a4 4 0 0 1 0 8h-1" strokeLinecap="round" strokeWidth={1.5} /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" strokeWidth={1.5} /><line x1="6" y1="1" x2="6" y2="4" strokeLinecap="round" strokeWidth={1.5} /><line x1="10" y1="1" x2="10" y2="4" strokeLinecap="round" strokeWidth={1.5} /><line x1="14" y1="1" x2="14" y2="4" strokeLinecap="round" strokeWidth={1.5} /></svg>,
};

function ProductMenu() {
  return (
    <Box display="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
      <Box>
        <SectionLabel>Build your app</SectionLabel>
        <DropItem href="/expo-sdk" icon={icons.sdk} label="Expo SDK" />
        <DropItem href="https://docs.expo.dev/more/expo-cli/" icon={icons.cli} label="Expo CLI" />
        <DropItem href="/go" icon={icons.go} label="Expo Go" />
        <DropItem href="https://snack.expo.dev" icon={icons.snack} label="Snack" />
        <DropItem href="/orbit" icon={icons.orbit} label="Orbit" />
      </Box>
      <Box>
        <SectionLabel>Services</SectionLabel>
        <DropItem href="/services/workflows" icon={icons.cicd} label="CI/CD Workflows" />
        <DropItem href="/services/build" icon={icons.build} label="Build" />
        <DropItem href="/services/submit" icon={icons.submit} label="Submit" />
        <DropItem href="/services/updates" icon={icons.update} label="Update" />
        <DropItem href="/services/hosting" icon={icons.hosting} label="Hosting" />
        <DropItem href="/services/observe" icon={icons.observe} label="Observe" badge="Preview" />
        <DropItem href="/services/launch" icon={icons.launch} label="Launch" />
      </Box>
    </Box>
  );
}

function SolutionsMenu() {
  return (
    <Box display="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
      <Box>
        <SectionLabel>By Company Size</SectionLabel>
        <DropItem href="/solutions/enterprise" icon={icons.enterprise} label="Enterprise" />
        <DropItem href="/solutions/startup" icon={icons.startup} label="Startup" />
        <DropItem href="/solutions/solo-devs" icon={icons.solo} label="Solo devs" />
        <DropItem href="/solutions/react-web-devs" icon={icons.react} label="React web devs" />
      </Box>
      <Box>
        <SectionLabel>By Industry</SectionLabel>
        <DropItem href="/solutions/ecommerce" icon={icons.ecom} label="E-commerce" />
        <DropItem href="/solutions/crypto" icon={icons.crypto} label="Crypto" />
        <DropItem href="/solutions/finserv" icon={icons.finserv} label="Finserv" />
        <DropItem href="/solutions/qsr" icon={icons.qsr} label="QSR" />
      </Box>
    </Box>
  );
}

function NavItem({
  label,
  href,
  hasDropdown,
  open,
  onToggle,
  children,
}: {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  open?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
}) {
  if (!hasDropdown) {
    return (
      <Box
        as="a"
        href={href}
        display="flex"
        alignItems="center"
        h="36px"
        px="16px"
        fontSize="sm"
        fontWeight={400}
        color="var(--expo-theme-text-default)"
        borderRadius="full"
        style={{ textDecoration: "none", whiteSpace: "nowrap" }}
        _hover={{ bg: "var(--expo-theme-button-quaternary-hover)" }}
        transition="background-color 0.15s"
      >
        {label}
      </Box>
    );
  }

  return (
    <Box position="relative">
      <Box
        as="button"
        display="flex"
        alignItems="center"
        gap="4px"
        h="36px"
        px="16px"
        fontSize="sm"
        fontWeight={400}
        color="var(--expo-theme-text-default)"
        borderRadius="full"
        bg={open ? "var(--expo-theme-button-quaternary-hover)" : "transparent"}
        border="1px solid"
        borderColor={open ? "var(--expo-theme-border-default)" : "transparent"}
        cursor="pointer"
        style={{ fontFamily: "inherit", whiteSpace: "nowrap" }}
        _hover={{ bg: "var(--expo-theme-button-quaternary-hover)" }}
        transition="background-color 0.15s"
        onClick={onToggle}
      >
        {label}
        <ChevronDown open={open} />
      </Box>
      <Dropdown open={!!open}>{children}</Dropdown>
    </Box>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<"product" | "solutions" | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (menu: "product" | "solutions") =>
    setOpenMenu((prev) => (prev === menu ? null : menu));

  return (
    <Box
      as="header"
      ref={ref}
      position="fixed"
      top={0}
      w="100%"
      zIndex={50}
      borderBottom="1px solid"
      borderColor="var(--expo-theme-border-default)"
      bg="var(--expo-theme-background-default)"
    >
      <HStack
        maxW="1280px"
        mx="auto"
        px={6}
        h="60px"
        justify="space-between"
      >
        <HStack gap={0} flex={1}>
          <Box mr={2} flexShrink={0}>
            <NextLink href="/" aria-label="Navigate to home" style={{ display: "flex" }}>
              <svg
                viewBox="0 0 71 20"
                fill="none"
                role="img"
                style={{ width: 74, height: "auto", color: "var(--expo-theme-text-default)", display: "block" }}
              >
                <path d="M9.258 6.342c.158-.23.331-.26.472-.26.14 0 .374.03.532.26 2.06 2.806 6.332 10.208 6.727 10.611.585.597 1.388.225 1.854-.452.46-.667.587-1.135.587-1.634 0-.34-6.653-12.614-7.324-13.636C11.462.248 11.252 0 10.15 0h-.825c-1.1 0-1.259.248-1.903 1.23C6.75 2.254.097 14.528.097 14.868c0 .5.127.967.587 1.634.466.677 1.269 1.05 1.854.452.395-.403 4.661-7.805 6.72-10.61zm14.941-5.237v15.344h9.35v-3.113h-6.125v-3.244h5.45V6.98h-5.45V4.218h6.125V1.105h-9.35zM46.25 16.449l-3.88-5.568 3.619-5.195h-3.662L40.54 8.23l-1.765-2.543h-3.706l3.618 5.217-3.857 5.546h3.661l2.027-2.915 2.027 2.915h3.705zm7.572-10.982c-1.482 0-2.637.614-3.378 1.732V5.686H47.37V20h3.073v-5.063c.74 1.117 1.896 1.731 3.378 1.731 2.768 0 4.97-2.52 4.97-5.611 0-3.091-2.202-5.59-4.97-5.59zm-.697 8.242c-1.504 0-2.681-1.14-2.681-2.652 0-1.49 1.177-2.653 2.68-2.653 1.483 0 2.681 1.184 2.681 2.653 0 1.49-1.198 2.652-2.68 2.652zm12.188-8.242c-3.16 0-5.558 2.411-5.558 5.612 0 3.2 2.397 5.59 5.557 5.59 3.139 0 5.558-2.39 5.558-5.59 0-3.2-2.42-5.612-5.558-5.612zm0 2.96c1.438 0 2.55 1.117 2.55 2.652 0 1.49-1.112 2.63-2.55 2.63-1.46 0-2.55-1.14-2.55-2.63 0-1.535 1.09-2.653 2.55-2.653z" fill="currentColor" />
              </svg>
            </NextLink>
          </Box>

          <HStack gap={0} display={{ base: "none", md: "flex" }}>
            <NavItem label="Docs" href="https://docs.expo.dev" />
            <NavItem
              label="Product"
              hasDropdown
              open={openMenu === "product"}
              onToggle={() => toggle("product")}
            >
              <ProductMenu />
            </NavItem>
            <NavItem
              label="Solutions"
              hasDropdown
              open={openMenu === "solutions"}
              onToggle={() => toggle("solutions")}
            >
              <SolutionsMenu />
            </NavItem>
            <NavItem label="Enterprise" href="/solutions/enterprise" />
            <NavItem label="Pricing" href="/pricing" />
            <NavItem label="Blog" href="/blog" />
          </HStack>
        </HStack>

        <HStack gap={3} display={{ base: "none", lg: "flex" }} flexShrink={0}>
          <Box
            as="a"
            href="https://github.com/expo/expo"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            gap="6px"
            h="36px"
            px="16px"
            borderRadius="full"
            fontSize="sm"
            fontWeight={500}
            color="var(--expo-theme-text-secondary)"
            bg="transparent"
            border="1px solid var(--expo-theme-border-default)"
            style={{ textDecoration: "none", whiteSpace: "nowrap" }}
            _hover={{ bg: "var(--expo-theme-button-quaternary-hover)" }}
            transition="background-color 0.15s"
          >
            <svg viewBox="0 0 24 24" fill="none" style={{ width: 16, height: 16, color: "var(--expo-theme-icon-secondary)", flexShrink: 0 }}>
              <path fill="currentColor" d="M12 1.60205C5.9225 1.60205 1 6.41965 1 12.3676C1 17.1314 4.14875 21.155 8.52125 22.5815C9.07125 22.6757 9.2775 22.3527 9.2775 22.0701C9.2775 21.8144 9.26375 20.9666 9.26375 20.065C6.5 20.5629 5.785 19.4056 5.565 18.8001C5.44125 18.4906 4.905 17.5351 4.4375 17.2794C4.0525 17.0776 3.5025 16.5797 4.42375 16.5662C5.29 16.5528 5.90875 17.3467 6.115 17.6697C7.105 19.298 8.68625 18.8404 9.31875 18.5578C9.415 17.8581 9.70375 17.3871 10.02 17.1179C7.5725 16.8488 5.015 15.9203 5.015 11.8024C5.015 10.6317 5.44125 9.66278 6.1425 8.90919C6.0325 8.64005 5.6475 7.53658 6.2525 6.05631C6.2525 6.05631 7.17375 5.77372 9.2775 7.15978C10.1575 6.91756 11.0925 6.79645 12.0275 6.79645C12.9625 6.79645 13.8975 6.91756 14.7775 7.15978C16.8813 5.76026 17.8025 6.05631 17.8025 6.05631C18.4075 7.53658 18.0225 8.64005 17.9125 8.90919C18.6138 9.66278 19.04 10.6182 19.04 11.8024C19.04 15.9337 16.4688 16.8488 14.0213 17.1179C14.42 17.4544 14.7638 18.1003 14.7638 19.1096C14.7638 20.5495 14.75 21.7068 14.75 22.0701C14.75 22.3527 14.9563 22.6891 15.5063 22.5815C17.69 21.86 19.5875 20.4865 20.9318 18.6542C22.2761 16.822 22.9994 14.6233 23 12.3676C23 6.41965 18.0775 1.60205 12 1.60205Z" />
            </svg>
            40K+
          </Box>

          <Box
            as="a"
            href="/login"
            display="flex"
            alignItems="center"
            h="36px"
            px="16px"
            borderRadius="full"
            fontSize="sm"
            fontWeight={500}
            bg="white"
            color="var(--expo-theme-text-default)"
            border="1px solid var(--expo-theme-border-default)"
            style={{ textDecoration: "none", whiteSpace: "nowrap" }}
            _hover={{ bg: "var(--expo-theme-background-subtle)" }}
            transition="background-color 0.15s"
          >
            Log in
          </Box>

          <Box
            as="a"
            href="/signup"
            display="flex"
            alignItems="center"
            h="36px"
            px="16px"
            borderRadius="full"
            fontSize="sm"
            fontWeight={500}
            bg="var(--expo-theme-button-primary-background)"
            color="white"
            border="1px solid var(--expo-theme-button-primary-border)"
            style={{ textDecoration: "none", whiteSpace: "nowrap" }}
            _hover={{ bg: "var(--expo-theme-button-primary-hover)" }}
            transition="background-color 0.15s"
          >
            Sign up
          </Box>
        </HStack>

        <Box display={{ base: "flex", lg: "none" }}>
          <Box
            as="button"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="36px" h="36px"
            borderRadius="full"
            bg="transparent"
            border="1px solid var(--expo-theme-border-default)"
            cursor="pointer"
            color="var(--expo-theme-icon-default)"
            _hover={{ bg: "var(--expo-theme-button-quaternary-hover)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: 18, height: 18 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12H21M3 6H21M3 18H21" />
            </svg>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
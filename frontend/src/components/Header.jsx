import { Box, Text, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      padding={4}
      flexDirection="column"
    >
      <Image
        src="/src/assets/quotebook.png"
        alt="Quote Book Logo"
        height="150px"
      ></Image>
      <Text fontSize="3xl" fontWeight="bold" marginTop={2} color="#EEDDE5">
        Hack at UCI's Quote Book
      </Text>
    </Box>
  );
}

import { Box, Text } from "@chakra-ui/react";

export default function QuoteCard({ quote }) {
    return (
        <Box p={4} borderWidth="1px" borderRadius="md" shadow="sm" bg="white">
      <Text fontWeight="bold">{quote.name}</Text>
      <Text>{quote.message}</Text>
      <Text fontSize="sm" color="gray.500">{quote.time}</Text>
    </Box>
    )
}
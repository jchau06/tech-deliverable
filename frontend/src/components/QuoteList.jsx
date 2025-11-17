import { VStack, Text } from "@chakra-ui/react";
import QuoteCard from "./QuoteCard";

export default function QuoteList({ quotes }) {
    <VStack spacing={4} align="stretch">
      <Text>Previous Quotes</Text>
      {quotes.map((quote) => (
        <QuoteCard key={quote.time} quote={quote} />
      ))}
    </VStack>
}
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";

export default function QuoteForm({ onSubmitSuccess }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to submit");

      e.target.reset();

      onSubmitSuccess?.();
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      marginTop={6}
      padding={4}
      borderRadius="md"
      background="gray.50"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold">
          {" "}
          Submit a quote!{" "}
        </Text>
        <FormControl isRequired>
          <FormLabel fontWeight="bold" htmlFor="name">
            Name
          </FormLabel>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            variant="filled"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontWeight="bold" htmlFor="message">
            Quote
          </FormLabel>
          <Textarea
            id="quote"
            name="message"
            placeholder="Your quote"
            variant="filled"
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" borderRadius="md" width="100%">
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

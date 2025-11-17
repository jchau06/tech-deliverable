import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function QuoteFilter({ value, onChange }) {
  
  return (
    <Box marginBottom={4}>
      <FormControl>
        <FormLabel fontWeight="bold">Filter Quotes</FormLabel>
        <Select
          value={value}
          onChange={onChange}
          maxWidth="240px"
          borderRadius="md"
          variant="filled"
        >
          <option value="all">All Quotes</option>
          <option value="7">Last Week</option>
          <option value="30">Last Month</option>
          <option value="365">Last Year</option>
        </Select>
      </FormControl>
    </Box>
  );
}

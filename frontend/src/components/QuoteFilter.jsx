import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function QuoteFilter({ value, onChange }) {
  
  return (
    <Box 
    display="flex"
    alignItems="center"
    paddingLeft={4}
    paddingRight={4}
    flexDirection="column">
      <FormControl>
        <FormLabel fontWeight="bold" color="#EEDDE5" fontSize="xl">Filter Quotes</FormLabel>
        <Select
          value={value}
          onChange={onChange}
          maxWidth="240px"
          borderRadius="md"
          variant="filled"
          bg="#FFF7F5"   
          _focus={{ bg: "#FFF7F5" }}  
          _hover={{ bg: "#FBEDEA" }}   
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

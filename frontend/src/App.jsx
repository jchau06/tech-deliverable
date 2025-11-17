import "./App.css";
import Header from "./components/Header.jsx";
import QuoteFilter from "./components/QuoteFilter.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import QuoteList from "./components/QuoteList.jsx";
import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
  const [filterValue, setFilterValue] = useState("all");
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    let url = "/api/quotes";
    if (filterValue && filterValue !== "all") {
      url += `?max_age=${filterValue}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setQuotes(data);
  };

  useEffect(() => {
    fetchQuotes();
  }, [filterValue]);

  const handleNewQuote = () => {
    fetchQuotes();
  };

  return (
    <div className="App">
      <Header />
      <Flex gap={6} align="flex-start">
        <Box flex="1" maxWidth="30vw">
          <QuoteFilter
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <QuoteForm onSubmitSuccess={handleNewQuote} />
        </Box>
        <Box flex="2" maxHeight="65vh" overflowY="auto">
          <QuoteList quotes={quotes} />
        </Box>
      </Flex>
    </div>
  );
}

export default App;

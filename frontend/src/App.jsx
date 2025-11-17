import "./App.css";
import Header from "./components/Header.jsx";
import QuoteFilter from "./components/QuoteFilter.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import QuoteList from "./components/QuoteList.jsx";
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
      {/* TODO: include an icon for the quote book */}
      <Header />
      <QuoteFilter
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
       <QuoteForm onSubmitSuccess={handleNewQuote} />
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default App;

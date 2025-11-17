import "./App.css";
import Header from "./components/Header.jsx";
import QuoteFilter from "./components/QuoteFilter.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import QuoteList from "./components/QuoteList.jsx";
import { useEffect, useState } from "react";

function App() {
  const [filterValue, setFilterValue] = useState("all");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      let url = "/api/quotes";
      if (filterValue && filterValue !== "all") {
        url += `?max_age=${filterValue}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setQuotes(data);
    };

    fetchQuotes();
  }, [filterValue]);

  const handleNewQuote = (newQuote) => {
    const ageInDays =
      (new Date() - new Date(newQuote.time)) / (1000 * 60 * 60 * 24);
    if (
      filterValue === "all" ||
      !filterValue ||
      ageInDays <= parseInt(filterValue)
    ) {
      setQuotes((prev) => [...prev, newQuote]);
    }
  };


  return (
    <div className="App">
      {/* TODO: include an icon for the quote book */}
      <Header />
      <QuoteFilter
        value={filterValue}
        onChange={(e) => {
          const val = e.target.value;
          setFilterValue(val === "all" ? null : parseInt(val));
        }}
      />
       <QuoteForm onSubmitSuccess={handleNewQuote} />
      <QuoteList quotes={quotes} />

      {/* <h2>Previous Quotes</h2> */}
      {/* TODO: Display the actual quotes from the database */}
      {/* <div className="messages">
				<p>Peter Anteater</p>
				<p>Zot Zot Zot!</p>
				<p>Every day</p>
			</div> */}
    </div>
  );
}

export default App;

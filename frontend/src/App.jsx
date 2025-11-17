import "./App.css";
import Header from "./components/Header.jsx";
import QuoteFilter from "./components/QuoteFilter.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import QuoteList from "./components/QuoteList.jsx";


function App() {
	return (
		<div className="App">
			{/* TODO: include an icon for the quote book */}
			<Header />
			<QuoteFilter />
			<QuoteForm />
			<QuoteList />

			<h2>Previous Quotes</h2>
			{/* TODO: Display the actual quotes from the database */}
			<div className="messages">
				<p>Peter Anteater</p>
				<p>Zot Zot Zot!</p>
				<p>Every day</p>
			</div>
		</div>
	);
}

export default App;

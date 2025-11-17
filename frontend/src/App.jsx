import "./App.css";
import Header from "./components/Header.jsx";
import QuoteFilter from "./components/QuoteFilter.jsx";
import QuoteForm from "./components/QuoteForm.jsx";

function App() {
	return (
		<div className="App">
			{/* TODO: include an icon for the quote book */}
			<h1>Hack at UCI Tech Deliverable</h1>
			<QuoteFilter />
			<QuoteForm 
			/>

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

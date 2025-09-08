import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Question_Cards from "./Components/Question_Cards";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	// Load dark mode preference from localStorage
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) setDarkMode(savedTheme === "dark");
	}, []);

	// Apply dark mode class to body
	useEffect(() => {
		document.body.classList.toggle("dark-mode", darkMode);
		localStorage.setItem("theme", darkMode ? "dark" : "light");
	}, [darkMode]);

	// Scroll event listener for scroll-top button
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			document.body.classList.toggle("scrolling", scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Toggle dark mode
	const toggleDarkMode = () => setDarkMode((prev) => !prev);

	return (
		<div className={`App text-center mt-4 ${darkMode ? "dark-mode" : ""}`}>
			<Header />

			{/* Dark Mode Toggle Button */}
			<button
				className={`btn ${
					darkMode ? "btn-light" : "btn-dark"
				} position-fixed top-0 end-0 m-3 change-mode-btn`}
				onClick={toggleDarkMode}
				aria-label="Toggle dark mode"
			>
				{darkMode ? (
					<span>
						☀<span className="text">Light Mode</span>
					</span>
				) : (
					<span>
						🌜
						<span className="text">Dark Mode</span>
					</span>
				)}
			</button>

			<Question_Cards />

			<Footer />
		</div>
	);
}

export default App;

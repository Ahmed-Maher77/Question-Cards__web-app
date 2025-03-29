import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Question_Cards from "./Components/Question_Cards";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("theme") === "dark"
	);

	// Toggle dark mode & save to localStorage
	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const newMode = !prev;
			localStorage.setItem("theme", newMode ? "dark" : "light");
			return newMode;
		});
	};

	useEffect(() => {
		document.body.classList.toggle("dark-mode", darkMode);
	}, [darkMode]);

	return (
		<div className={`App text-center mt-4 ${darkMode ? "dark-mode" : ""}`}>
			<Header />
			<motion.button
				className="btn btn-outline-secondary position-fixed top-0 end-0 m-3 change-mode-btn"
				onClick={toggleDarkMode}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				{darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
			</motion.button>
			<Question_Cards />
			<Footer />
		</div>
	);
}

export default App;

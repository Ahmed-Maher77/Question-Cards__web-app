// External dependencies
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Question_Cards from "./Components/Question_Cards";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import ScreenReaderAnnouncements from "./Components/ScreenReaderAnnouncements";

// React hooks
import {
	useEffect,
	useState,
	useCallback,
	useMemo,
	useLayoutEffect,
} from "react";

function App() {
	// State management
	const [darkMode, setDarkMode] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// Effects
	useEffect(() => {
		// Load dark mode preference from localStorage
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) setDarkMode(savedTheme === "dark");
	}, []);

	useEffect(() => {
		// Simulate loading time and hide loader
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	useLayoutEffect(() => {
		// Apply dark mode class to body (synchronous DOM updates)
		document.body.classList.toggle("dark-mode", darkMode);
		localStorage.setItem("theme", darkMode ? "dark" : "light");
	}, [darkMode]);

	useEffect(() => {
		// Scroll event listener for scroll-top button
		const handleScroll = () => {
			const scrollY = window.scrollY;
			document.body.classList.toggle("scrolling", scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Event handlers
	const toggleDarkMode = useCallback(() => {
		setDarkMode((prev) => !prev);
	}, []);

	// Memoized values
	const darkModeButtonContent = useMemo(() => {
		return darkMode ? (
			<span>
				☀<span className="text">Light Mode</span>
			</span>
		) : (
			<span>
				🌜
				<span className="text">Dark Mode</span>
			</span>
		);
	}, [darkMode]);

	return (
		<div className={`App text-center mt-4 ${darkMode ? "dark-mode" : ""}`}>
			{/* Accessibility: Skip to main content */}
			<a
				href="#main-content"
				className="visually-hidden-focusable btn btn-primary position-absolute"
				style={{ top: "10px", left: "10px", zIndex: 1000 }}
			>
				Skip to main content
			</a>

			{/* Loading screen */}
			{isLoading && <Loader darkMode={darkMode} />}

			{/* Main content (rendered after loading) */}
			{!isLoading && <Header shouldAnimate={true} />}

			{/* Dark mode toggle */}
			<button
				className="change-mode-btn position-fixed top-0 end-0 m-3"
				onClick={toggleDarkMode}
				aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
				aria-pressed={darkMode}
			>
				{darkModeButtonContent}
			</button>

			<main id="main-content" role="main">
				{!isLoading && <Question_Cards shouldAnimate={true} />}
			</main>

			{!isLoading && <Footer shouldAnimate={true} />}

			{/* Screen reader announcements */}
			<ScreenReaderAnnouncements />
		</div>
	);
}

export default App;

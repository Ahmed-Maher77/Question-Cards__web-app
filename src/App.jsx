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
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{ marginRight: "4px" }}
				>
					<circle cx="12" cy="12" r="5" />
					<line x1="12" y1="1" x2="12" y2="3" />
					<line x1="12" y1="21" x2="12" y2="23" />
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
					<line x1="1" y1="12" x2="3" y2="12" />
					<line x1="21" y1="12" x2="23" y2="12" />
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
				</svg>
				<span className="text">Light Mode</span>
			</span>
		) : (
			<span>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{ marginRight: "4px" }}
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
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

// React hooks
import { useEffect, useState } from "react";

const ScreenReaderAnnouncements = () => {
	// State management
	const [announcement, setAnnouncement] = useState("");

	// Effects
	useEffect(() => {
		// Listen for custom announcement events
		const handleAnnouncement = (event) => {
			setAnnouncement(event.detail.message);
			// Auto-clear announcement after 1 second
			setTimeout(() => setAnnouncement(""), 1000);
		};

		window.addEventListener("announce", handleAnnouncement);
		return () => window.removeEventListener("announce", handleAnnouncement);
	}, []);

	return (
		<div
			aria-live="polite"
			aria-atomic="true"
			className="visually-hidden"
			role="status"
		>
			{announcement}
		</div>
	);
};

// Utility function to announce messages to screen readers
export const announceToScreenReader = (message) => {
	const event = new CustomEvent("announce", { detail: { message } });
	window.dispatchEvent(event);
};

export default ScreenReaderAnnouncements;

/**
 * Performance utilities for accessibility and optimization
 */

// Check if user prefers reduced motion (accessibility)
export const prefersReducedMotion = () => {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

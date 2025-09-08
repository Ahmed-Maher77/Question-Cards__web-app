// React hooks
import { memo, useMemo } from "react";

// Dependencies
import { motion } from "framer-motion";

// Utils
import {
	footerVariants,
	socialLinksVariants,
	socialLinkVariants,
	copyrightVariants,
} from "../utils/Animations_Variants";

// Social media links data
const socialLinks = [
	{
		name: "Portfolio",
		url: "https://ahmedmaher-portfolio.vercel.app/",
		icon: "fas fa-globe",
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/ahmed-maher-algohary",
		icon: "fab fa-linkedin",
	},
	{
		name: "GitHub",
		url: "https://github.com/Ahmed-Maher77",
		icon: "fab fa-github",
	},
	{
		name: "Facebook",
		url: "https://web.facebook.com/profile.php?id=100012154268952",
		icon: "fab fa-facebook",
	},
];

const Footer = ({ shouldAnimate = true }) => {
	// Memoized values
	const currentYear = useMemo(() => new Date().getFullYear(), []);

	return (
		<motion.footer
			className="bg-dark text-light text-center py-4 mt-5 shadow-lg"
			role="contentinfo"
			variants={footerVariants}
			initial={shouldAnimate ? "initial" : false}
			animate={shouldAnimate ? "animate" : false}
			exit="exit"
		>
			<div className="container">
				{/* Social Media Links */}
				<nav aria-label="Social media links">
					<motion.div
						className="social-links-container"
						variants={socialLinksVariants}
						initial={shouldAnimate ? "hidden" : false}
						animate={shouldAnimate ? "visible" : false}
					>
						{socialLinks.map(({ name, url, icon }) => (
							<motion.a
								key={name}
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
								aria-label={`Visit ${name} profile (opens in new tab)`}
								variants={socialLinkVariants}
								whileHover={{
									scale: 1.1,
									y: -3,
									transition: { duration: 0.2 },
								}}
								whileTap={{ scale: 0.95 }}
							>
								<i className={icon} aria-hidden="true"></i>
								<span className="visually-hidden">{name}</span>
							</motion.a>
						))}
					</motion.div>
				</nav>

				{/* Copyright */}
				<motion.p
					className="mb-0"
					variants={copyrightVariants}
					initial={shouldAnimate ? "hidden" : false}
					animate={shouldAnimate ? "visible" : false}
				>
					Copyrights &copy; {currentYear}{" "}
					<a
						href="https://ahmedmaher-portfolio.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-light fw-bold my-name"
						aria-label="Visit Ahmed Maher's portfolio (opens in new tab)"
					>
						Ahmed Maher
					</a>
				</motion.p>
			</div>
		</motion.footer>
	);
};

// Memoize the Footer component to prevent unnecessary re-renders
export default memo(Footer);

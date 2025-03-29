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

const Footer = () => {
	return (
		<footer className="bg-dark text-light text-center py-4 mt-5 shadow-lg">
			<div className="container">
				{/* Social Media Links */}
				<ul className="list-inline mb-3">
					{socialLinks.map(({ name, url, icon }) => (
						<li className="list-inline-item mx-2" key={name}>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-light fs-4 social-link"
								aria-label={name}
							>
								<i className={icon}></i>
							</a>
						</li>
					))}
				</ul>

				{/* Copyright */}
				<p className="mb-0">
					Copyrights &copy; {new Date().getFullYear()}{" "}
					<a
						href="https://ahmedmaher-portfolio.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-light fw-bold text-decoration-none my-name"
					>
						Ahmed Maher
					</a>
				</p>
			</div>

			{/* Custom CSS for Hover Effect */}
			<style>
				{`
          .social-link, .my-name {
            transition: transform 0.3s ease, color 0.3s ease;
          }
          .social-link:hover {
            transform: scale(1.2);
            color: #0d6efd !important;
          }
            .my-name:hover {
                color:rgb(65, 130, 227) !important;
            }
        `}
			</style>
		</footer>
	);
};

export default Footer;

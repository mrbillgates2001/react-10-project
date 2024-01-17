import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<hr style={{ margin: "48px 0" }} />
			<div className="container">
				<div className="footer-above">
					<div>
						<h1>Funiro.</h1>
						<h6>400 University Drive Suite 200 Coral Gables, FL 33134 USA</h6>
					</div>
					<div>
						<h6>Links</h6>
						<ul>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/shop">Shop</NavLink>
							</li>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							<li>
								<NavLink to="/contact">Contact</NavLink>
							</li>
						</ul>
					</div>
					<div>
						<h6>Help</h6>
						<ul>
							<li>
								<NavLink to="/">Payment Options</NavLink>
							</li>
							<li>
								<NavLink to="/">Returns</NavLink>
							</li>
							<li>
								<NavLink to="/">Privacy Policies</NavLink>
							</li>
						</ul>
					</div>
					<div>
						<h6>Newsletter</h6>
						<input type="text" placeholder="Enter Your Email Address" />
						<button>Subscribe</button>
					</div>
				</div>
				<hr />
				<div className="footer-below">
					<p>2023 furino. All rights reverved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

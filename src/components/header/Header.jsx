import React from "react";
import "./Header.scss";
import {
	cart,
	like,
	logo,
	profile,
	search,
} from "../../../public/images/Header";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav className="container">
				<div className="logo">
						<Link to="/">
							<img src={logo} alt="" />
						</Link>
				</div>

				<div className="navbar">
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

				<div className="buttons">
					<button>
						<img src={profile} alt="" />
					</button>
					<button>
						<img src={search} alt="" />
					</button>
					<button>
						<img src={like} alt="" />
					</button>
					<button>
						<img src={cart} alt="" />
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;

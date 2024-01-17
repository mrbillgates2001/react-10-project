import React, { useEffect, useState } from "react";
import "./Home.scss";
import {
	living,
	bedroom,
	dining,
	FurniroFurniture,
} from "../../../public/images/home";
import Products from "./Products";
import axios from "axios";

const Home = () => {
	const [products, setProducts] = useState([]);
	const [showAllCards, setShowAllCards] = useState(false);

	const fetchProducts = async () => {
		try {
			const res = await axios.get(`http://localhost:3000/products`);
			const data = await res.data;
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	const toggleProductCards = () => {
		setShowAllCards((prev) => !prev);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<main>
			<div className="hero">
				<div className="container">
					<div className="hero-content">
						<div className="hero-left"></div>
						<div className="hero-right">
							<span>New Arrival</span>
							<h1>Discover Our New Collection</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
								tellus, luctus nec ullamcorper mattis.
							</p>
							<button>BUY Now</button>
						</div>
					</div>
				</div>
			</div>

			<div className="range">
				<div className="container">
					<h3>Browse The Range</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div className="range-cards">
						<div className="r-card">
							<img src={dining} alt="" />
							<span>Dining</span>
						</div>

						<div className="r-card">
							<img src={living} alt="" />
							<span>Living</span>
						</div>

						<div className="r-card">
							<img src={bedroom} alt="" />
							<span>Bedroom</span>
						</div>
					</div>
				</div>
			</div>

			<div className="products container">
				<h3>Our Product</h3>

				{showAllCards ? (
					<div className="wrapper">
						{products.map((product, index) => (
							<Products key={index} product={product} />
						))}

						{products.map((product, index) => (
							<Products key={index + products.length} product={product} />
						))}
					</div>
				) : (
					<div className="wrapper">
						{products.map((product, index) => (
							<Products key={index} product={product} />
						))}
					</div>
				)}
				<button className="showmore" onClick={toggleProductCards}>
					{showAllCards ? "Show Less" : "Show More"}
				</button>

				{/* <div className="wrapper">
					{products.map((product) => (
						<Products key={product.id} product={product} />
					))}
				</div>

				<div className="wrapper-2">
					{products.map((product) => (
						<Products key={product.id} product={product} />
					))}
				</div>

				<button className="showmore">Show More</button> */}
			</div>

			<div className="furniture container">
				<img src={FurniroFurniture} alt="" />
			</div>
		</main>
	);
};

export default Home;

import React, { useEffect, useState } from "react";
import "./Shop.scss";
import { Link } from "react-router-dom";
import { view_list, grid, system_ia, guarantee, shipping, trophy, customer_support } from "../../../public/images/shop";
import Products from "../home/Products";
import axios from "axios";

const Shop = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		try {
			const res = await axios.get(`http://localhost:3000/products`);
			const data = await res.data;
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<main className="shop">
			<div className="hero-shop">
				<div className="container">
					<h1>Shop</h1>
					<p>
						<span>
							<Link to="/">{`home >`}</Link>
						</span>{" "}
						shop
					</p>
				</div>
			</div>

			<div className="filter-sort">
				<div className="container filter-sort">
					<div className="filter">
						<img src={system_ia} alt="" />
						<span>Filter</span>
						<img src={grid} alt="" />
						<img src={view_list} alt="" />
						<div className="line"></div>
						<p>Showing 1–16 of 32 results</p>
					</div>
					<div className="sort">
						<p>Show</p>
						<input
							style={{ width: "55px", height: "55px" }}
							type="text"
							name=""
							id=""
							placeholder="16"
						/>
						<p>Sort by</p>
						<select name="sort" id="sort">
							<option value="sort">Default</option>
							<option value="sort">Cheap</option>
							<option value="sort">Expensive</option>
						</select>
					</div>
				</div>
			</div>

			<div className="products container">
				<div className="wrapper all-products ">
					{products.map((product, index) => (
						<Products key={index} product={product} />
					))}

					{products.map((product, index) => (
						<Products key={index} product={product} />
					))}

					{products.map((product, index) => (
						<Products key={index} product={product} />
					))}
					<div className="pagination">
						<button>1</button>
						<button>2</button>
						<button>3</button>
						<button>Next</button>
					</div>
				</div>
			</div>

      <div className="services">
        <div className="container services">
          <div className="service">
            <img src={trophy} alt="" />
            <div className="s-text">
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </div>

          <div className="service">
            <img src={guarantee} alt="" />
            <div className="s-text">
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>

          <div className="service">
            <img src={shipping} alt="" />
            <div className="s-text">
              <h4>Free Shipping</h4>
              <p>Order over 150 $</p>
            </div>
          </div>

          <div className="service">
            <img src={customer_support} alt="" />
            <div className="s-text">
              <h4>24 / 7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
		</main>
	);
};

export default Shop;

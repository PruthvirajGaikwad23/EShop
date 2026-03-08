import React,{useState, useEffect} from "react";
import axios from "axios";
import Product from "./Product";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const getProducts = () => {
        axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
            setProducts(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container">
        <h2 className="text-center">Products</h2>
        <div className="row">
            {
                products.map((product) => <Product key={product.id} data={product} />)
            }
        </div>
    </div>
    );
}
export default ProductList;
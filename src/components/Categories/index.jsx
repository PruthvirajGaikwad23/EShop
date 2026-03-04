import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const getCategories = () => {
    axios.get("https://api.escuelajs.co/api/v1/categories")
        .then((response) => {
            setCategories(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getCategories();
    }, []);

  return (
    <div className="container">
        <h2 className="text-center">Categories</h2>
        <div className="row">
            {
                categories.map((category) => <Category key={category.id} data={category} />)
            }
        </div>
    </div>
  );
};
export default Categories;

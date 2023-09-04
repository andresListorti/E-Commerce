import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";

export default function Products() {
  // const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts()
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>Productos</div>;
}

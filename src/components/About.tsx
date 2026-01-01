import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [input,setInput]=useState<string>("")

  useEffect(() => {


    
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");

        const response = res.data;

        if (isMounted) setProducts(response);
        console.log(response);
      } catch (e) {
        console.log("failes To fetch", e);
      }
    };

    fetchData();

    return () => (isMounted = false);
  }, []);

  return (
    <div>
      <h1>About</h1>

      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default About;

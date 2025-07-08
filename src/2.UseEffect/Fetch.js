//7. Fetch user data from an API when the component mounts.

import React, { useEffect, useState } from "react";

import "./fetch.css";
function Fetch(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setData(json);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log("error in fetch");
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error("error in fetch", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  if (loading) return <h1>loading.....</h1>;

  return (
    <div className="complete">
      {data.map((item) => (
        <div key={item.id} className="container">
          <img src={item.image} alt={item.name} width={100} height={100}></img>
          <h1>{item.title}</h1>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Fetch;

// Always return JSX inside .map()
// Either use explicit `return` inside `{}`
// Or use implicit return with `()`

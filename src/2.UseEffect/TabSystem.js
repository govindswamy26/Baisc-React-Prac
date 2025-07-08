import React, { useEffect, useState } from "react";

function TabSystem(props) {
  const [fetchA, setFetchA] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let url = "";
    if (fetchA === 1) url = "users"; // users
    if (fetchA === 2) url = "posts"; // posts
    if (fetchA === 3) url = "comments"; // comments
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.slice(0, 5));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [fetchA]);

  if (loading) return <h1>Loading.....</h1>;
  return (
    <div>
      <div>
        <button onClick={() => setFetchA(1)}>Users</button>
      </div>
      <div>
        <button onClick={() => setFetchA(2)}>Posts</button>
      </div>
      <div>
        <button onClick={() => setFetchA(3)}>comments</button>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {fetchA === 1 && `${item.name} (${item.email})`}
            {fetchA === 2 && `${item.title}`}
            {fetchA === 3 && `${item.name}: ${item.body}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TabSystem;

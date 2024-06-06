import { useEffect, useState } from "react";
import { makeRequest } from "../api/api";

function Card() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    makeRequest("get", "jokes/random")
      .then((data) => {
        setJoke(data.value);
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
      });
  }, []);

  return (
    <div>
      <h1>Card Test</h1>
      <p>{joke}</p>
    </div>
  );
}

export default Card;

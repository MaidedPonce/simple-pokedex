import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [characters, setCharacters] = useState({
      results: []
  });
  useEffect(() => {
    fetch(API)
      .then((rsp) => rsp.json())
      .then((data) => setCharacters(data));
  }, []);
  // console.log(characters)
  return characters;
};

export default useInitialState;

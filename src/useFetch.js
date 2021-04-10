import React, { useState , useEffect} from "react";
import Fetching from "./fetch";
import { setStorage } from "./setStorage";


const UseFetch = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState(undefined);

  useEffect(() => {

  }, []);

  const get = () => {

  }

  
  return { data, get: (segment, options) => get(segment, options), post };
};


export default UseFetch

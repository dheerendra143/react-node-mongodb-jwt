const getHost = () => {
    console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
    const baseURL = process.env.REACT_APP_API_URL;
    return baseURL;
  };
  export  { getHost };
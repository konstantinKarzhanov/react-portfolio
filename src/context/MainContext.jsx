import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  const URL =
    "https://my-json-server.typicode.com/konstantinKarzhanov/react-portfolio/projects/";
  const [dataFromAPI, setDataFromAPI] = useState(null);
  const { isLoading, fetchError, data } = useFetch(URL);

  useEffect(() => {
    setDataFromAPI(data);
  }, [data]);

  const renderLoading = () => {
    return <p>Data is loading, please wait...</p>;
  };

  const renderError = (error) => {
    return <p>{`${error.name}: ${error.message}`}</p>;
  };

  const renderData = (data, callback) => {
    if (data && data.length > 0) {
      return callback(data);
    } else {
      return <p>There is no data yet</p>;
    }
  };

  return (
    <MainContext.Provider
      value={{
        isLoading,
        fetchError,
        dataFromAPI,
        renderLoading,
        renderError,
        renderData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContextProvider };
export default MainContext;

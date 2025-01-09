import React from "react";
import ReactDOM from "react-dom/client";
import client from "./api/apolloClient";
import { ApolloProvider } from "@apollo/client";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

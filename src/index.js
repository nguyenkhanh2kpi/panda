import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./contexts/ContextProvider";
import { registerLicense } from '@syncfusion/ej2-base';
const root = ReactDOM.createRoot(document.getElementById("root"));

registerLicense('ORg4AjUWIQA/Gnt2VlhhQlJCfV5DQmFOYVF2R2BJflR0cF9DYUwgOX1dQl9gSH5RfkVhWXlcdXNcQmc=');
root.render(
    <ChakraProvider>
      <ContextProvider> <App /></ContextProvider>
     
    </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

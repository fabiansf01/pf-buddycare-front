import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Paypal from "./Paypal";

const rootElement = document.getElementById("root");

 const price = 5

ReactDOM.render(
  <StrictMode>
    <Paypal 
    price={price}
    />
  </StrictMode>,
  rootElement
);


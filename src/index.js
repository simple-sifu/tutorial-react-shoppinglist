import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ShoppingList from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ShoppingList />
  </StrictMode>
);

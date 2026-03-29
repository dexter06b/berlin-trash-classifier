import { loadDisposalItems } from "./data-loader.js";

loadDisposalItems().catch((error) => {
  console.error("Failed to load card data", error);
});

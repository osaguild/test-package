import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Upload } from "@osaguild/ipfs-uploader";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <Upload message="hello uploader" />
  </StrictMode>
);

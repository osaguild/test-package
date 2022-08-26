import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { IpfsUploader } from "@osaguild/ipfs-uploader";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <IpfsUploader />
  </StrictMode>
);

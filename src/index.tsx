import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { IpfsUploader } from "@osaguild/ipfs-uploader";

const REACT_APP_PINATA_API_JWT = process.env.REACT_APP_PINATA_API_JWT as string;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <IpfsUploader
      pinataApiJwt={REACT_APP_PINATA_API_JWT}
      callback={(event) => {
        console.log(event.eventType);
      }}
    />
  </StrictMode>
);

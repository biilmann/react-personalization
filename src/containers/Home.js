import React from "react";
import { withSiteData } from "react-static";
import logoImg from "../logo.png";
import Personalized from "../personalized/Personalized";
import { localeBucket } from "../personalized/buckets";

const bucket = localeBucket();

export default withSiteData(() => (
  <div>
    <Personalized
      bucket={bucket}
      fallback={<h1>...</h1>}
      render={choice => {
        switch (choice) {
          case "es":
            return <h1>Esto es un demo de personalizar en el cliente</h1>;
          default:
            return <h1>This is a small client side personalization demo</h1>;
        }
      }}
    />

    <p>With cookie fixation and both random and function based bucketing</p>
  </div>
));

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
      choices={{
        es: <h1>Esto es un demo de personalizar en el cliente</h1>,
        en: <h1>This is a small client side personalization demo</h1>
      }}
    />

    <Personalized
      bucket={bucket}
      fallback={<p>...</p>}
      choices={{
        es: <p>Implementatondo fixacion de los cookies y con bucketing</p>,
        en: (
          <p>
            With cookie fixation and both random and function based bucketing
          </p>
        )
      }}
    />
  </div>
));

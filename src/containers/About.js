import React from "react";
import Personalized from "../personalized/Personalized";
import { randomBucket } from "../personalized/buckets";

const bucket = randomBucket("random", ["a", "b"]);

export default () => (
  <div>
    <Personalized
      fallback={<div>Loading...</div>}
      bucket={bucket}
      choices={{
        a: <h1>This is what we're all about</h1>,
        b: <h1>React Static is all about:</h1>
      }}
    />
    <p>
      React, static sites, performance, speed. It's the stuff that makes us
      tick.
    </p>
  </div>
);

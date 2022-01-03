import React from "react";

import { Background } from "./elements/Background";
import { Welcome } from "./sections/Welcome";

const Home: React.FC = () => {
  return (
    <>
      <Background />
      <Welcome />
    </>
  );
};

export default Home;

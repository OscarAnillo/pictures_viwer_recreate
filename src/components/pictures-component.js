import { useState } from "react";

import { RadioButtons } from "./radio-buttons";
import { DisplayFrame } from "./display-frame";

import stars from "../data/pictures-data";

export const PicturesComponent = () => {
  const [source, setSource] = useState(stars.dawn);

  const changeHandler = (next) => {
    setSource(stars[next]);
  };

  return (
    <div>
      <h1 className="title">Choose the picture</h1>
      <RadioButtons changeHandler={changeHandler} />
      <DisplayFrame source={source} />
    </div>
  );
};

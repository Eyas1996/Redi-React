import { useState } from "react";
import { sculptureList } from "./Data.js";

function Gallery() {
  let [index, setIndex] = useState(0);
  let [details, setDetails] = useState(false);

  function handleClick() {
    setIndex(index + 1 < sculptureList.length ? index + 1 : 0);
  }
  function handleClickPrevious() {
    setIndex(index <= 0 ? sculptureList.length - 1 : index - 1);
  }

  function showDetails() {
    setDetails(!details);
  }

  let sculpture = sculptureList[index];
  return (
    <div className="d-flex flex-column align-items-center mx-auto w-50 pb5 pt-5">
      <button
        className="mx-auto w-25 btn btn-primary mb-2"
        onClick={handleClick}
      >
        Next
      </button>
      <button
        className="mx-auto w-25 btn btn-success mb-4"
        onClick={handleClickPrevious}
      >
        Previous
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button className="btn btn-info mt-2" onClick={showDetails}>
        {!details ? "Show details" : "Hidde details"}
      </button>
      <p>{details && sculpture.description}</p>
      <hr />
    </div>
  );
}
export default Gallery;

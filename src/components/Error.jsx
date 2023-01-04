import React from "react";

function Error(props) {
  let spellcheck, tr;
  if (props.click) {
    spellcheck = "Check Spelling of city name";
    tr = "Try Again";
  } else {
    spellcheck = "";
    tr = "";
  }
  return (
    <div>
      <br />
      <h3>{spellcheck} </h3>
      <br />
      <h3>{tr}</h3>
    </div>
  );
}

export default Error;

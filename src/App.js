import React from "react";
import "./styles.css";

// export added because it was giving error no idea why :)
export default function App() {
  const [inp, setInp] = React.useState("");

  let inp_strings = [];
  let inp_string = "";
  let idx = 0;

  // this function will format the text areas when you hit submit
  function setup(text) {
    inp_strings = text.split("\n");
    document.getElementById("output").value = inp_strings;
  }

  // this function will clear out all the text areas and empty out the input strings
  function clear() {
    // clear all text areas and empty the initial values
    document.getElementById("output").value = "";
    document.getElementById("input").value = "";
    document.getElementById("chosen").value = "";
    inp_strings = [];
    inp_string = "";
    dx = 0;
  }

  // this fucntion will select a random string from the list of inputs
  function randomReplace() {
    // caluclate the random idx
    idx = Math.floor(Math.random() * inp_strings.length);
    // get the index from the input string
    inp_string = inp_strings[idx];
    // place the selected string into the string chosen area
    if (inp_string && inp_string.length > 0)
      document.getElementById("chosen").value = inp_string;
    // update the strings left
    document.getElementById("output").value = inp_strings;
  }

  // this fucntion will select a random string from the list of inputs
  function randomNoReplace() {
    // calculate the random idx
    idx = Math.floor(Math.random() * inp_strings.length);
    // remove the index from the input string
    inp_string = inp_strings.splice(idx, 1);
    // place the selected string into the sting chosen area
    if (inp_string && inp_string.length > 0)
      document.getElementById("chosen").value = inp_string;
    // update the stirngs left
    document.getElementById("output").value = inp_strings;
  }

  return (
    <div>
      <h1> Assignment 9</h1>
      <p>
        {" "}
        Enter strings to be chosen.
        <br />
        Separate multiple strings by new lines.
      </p>
      <br />
      <p>Strings entered: </p>
      <textarea
        placeholder="enter words here"
        id="input"
        value={inp}
        onChange={(event) => setInp(event.target.value)}
      ></textarea>
      <br />
      <p>Strings left: </p>
      <textarea placeholder="words entered" id="output"></textarea>
      <br />
      <p>String chosen: </p>
      <textarea placeholder="word chosen" id="chosen"></textarea>
      <br />
      <br />
      <button onClick={() => clear()}>Clear</button>
      <button onClick={() => setup(inp)}>Submit</button>
      <br />
      <button onClick={() => randomReplace()}>With replacement</button>
      <button onClick={() => randomNoReplace()}>without replacement</button>
      <br />
      <br />
      <p>
        <strong> COLLABORATION SUMMARY </strong>
        <br />
        <br />
        Beth, Tori, Niha
        <br />
        Beth built the input and randomizer. Niha and Tori added the clear
        functionality and used the random number to output the choosen stirng.
      </p>
    </div>
  );
}

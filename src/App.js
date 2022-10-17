import { useState, useRef, useEffect } from "react";
import "./App.css";
import React from "react";
import TextRow from "./componets/TextRow";

const deepClone = (object) => {
  /* This function will create a "deep-clone" of an object which is necessary
	when creating a copy an object with multiple nested layers of objects or arrays. */
  return JSON.parse(JSON.stringify(object));
};

const App = () => {
 const [textAlong,setTextAlong] = useState("")
 const textHandler = (keyObj) =>{
setTextAlong(textAlong.concat(keyObj.letter.toLowerCase()))
if (keyObj.letter==='Backspace') {
  let backSpaceFunc = textAlong.length -1 ;
console.log(textAlong)
  let newText =textAlong.slice(backSpaceFunc,0)
setTextAlong(newText.concat(newText))
console.log(newText)
}


 }
  return (
    <div className="App-header">
      <div>
        <TextRow textAlong = {textAlong}></TextRow>
      </div>
      <KeyboardGrid textHandler={textHandler} />
    </div>
  );
};

const KeyboardGrid = (props) => {
  const keyBoardArr = [
    [
      { letter: "`", isPressed: false },
      { letter: "1", isPressed: false },
      { letter: "2", isPressed: false },
      { letter: "3", isPressed: false },
      { letter: "4", isPressed: false },
      { letter: "5", isPressed: false },
      { letter: "6", isPressed: false },
      { letter: "7", isPressed: false },
      { letter: "8", isPressed: false },
      { letter: "9", isPressed: false },
      { letter: "0", isPressed: false },
      { letter: "-", isPressed: false },
      { letter: "=", isPressed: false },
      { letter: "Backspace", isPressed: false },
    ],
    [
      { letter: "Tab", isPressed: false },
      { letter: "Q", isPressed: false },
      { letter: "W", isPressed: false },
      { letter: "E", isPressed: false },
      { letter: "R", isPressed: false },
      { letter: "T", isPressed: false },
      { letter: "Y", isPressed: false },
      { letter: "U", isPressed: false },
      { letter: "I", isPressed: false },
      { letter: "O", isPressed: false },
      { letter: "P", isPressed: false },
      { letter: "[", isPressed: false },
      { letter: "]", isPressed: false },
      { letter: "\\", isPressed: false },
    ],
    [
      { letter: "CapsLock", isPressed: false },
      { letter: "A", isPressed: false },
      { letter: "S", isPressed: false },
      { letter: "D", isPressed: false },
      { letter: "F", isPressed: false },
      { letter: "G", isPressed: false },
      { letter: "H", isPressed: false },
      { letter: "J", isPressed: false },
      { letter: "K", isPressed: false },
      { letter: "L", isPressed: false },
      { letter: ";", isPressed: false },
      { letter: "'", isPressed: false },
      { letter: "Enter", isPressed: false },
    ],
    [
      { letter: "Shift", isPressed: false },
      { letter: "Z", isPressed: false },
      { letter: "X", isPressed: false },
      { letter: "C", isPressed: false },
      { letter: "V", isPressed: false },
      { letter: "B", isPressed: false },
      { letter: "N", isPressed: false },
      { letter: "M", isPressed: false },
      { letter: ",", isPressed: false },
      { letter: ".", isPressed: false },
      { letter: "/", isPressed: false },
      { letter: "Shift", isPressed: false },
    ],
    [{ letter: " ", isPressed: false }],
  ];

  const [keyRows, setKeyRows] = useState(keyBoardArr);
  const [keyRowClone, setKeyRowClone] = useState([...keyRows]);
  const [keyHitDown, setKeyHitDown] = useState({});
  const [keyHitUp, setKeyUp] = useState({});

  const handleKeyDown = (e) => {
    let keyRowClone = [...keyRows];
    keyRowClone.map((keyArr, index) => {
      keyArr.map((keyObj, index) => {
        if (keyObj.letter.toLowerCase() === e.key.toLowerCase()) {
          console.log(keyObj.isPressed);

          setKeyHitDown(e.key);
         
         props.textHandler(keyObj)
          return (keyObj.isPressed = true);
        }
      });
    });
  };

  const handleKeyUp = (e) => {
    let keyRowClone = [...keyRows];
    keyRowClone.map((keyArr, index) => {
      keyArr.map((keyObj, index) => {
        if (keyObj.letter.toLowerCase() === e.key.toLowerCase()) {
          console.log(e.key);
          setKeyUp(e.key);
          console.log(keyObj.isPressed);
          return (keyObj.isPressed = false);
        }
      });
    });
  };

  /* The following lines for the useRef and useEffect are serving a single purpose for us, it is getting the div in the JSX of <KeyboardGrid/> and focusing it on page load.*/
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div
      className="Keyboard-grid"
      ref={ref}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    
     onKeyUp={handleKeyUp}>
      {keyRows.map((keyRow, index) => {
        // console.log(keyRow);
        return <KeyboardRow keyRow={keyRow} key={index} />;
      })}
    </div>
  );
};

const KeyboardRow = (props) => {
  return (
    <div className="Keyboard-row">
      {props.keyRow.map((keyObject, index) => {
        // console.log(keyObject);
        return <KeyboardKey keyObject={keyObject} key={index} />;
      })}
    </div>
  );
};

const KeyboardKey = (props) => {
  let keyboardKeyClass;
  if (props.keyObject.isPressed === false) {
    keyboardKeyClass = { color: "green" };
  }
  if (props.keyObject.isPressed === true) {
    keyboardKeyClass = { color: "red" };
  }

  return (
    <div style={keyboardKeyClass} className="Keyboard-key">
      {props.keyObject.letter}
    </div>
  );
};

export default App;

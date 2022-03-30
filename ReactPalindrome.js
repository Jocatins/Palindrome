import React, { useState } from "react";

function Palindrome() {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  let input;
  let palindrome = [];
  const handleInput = (e) => {
    input = e.target.value;
    console.log(input);
  };
  const reverseWord = (value) => {
    for (let i = value.length - 1; i > -1; i--) {
      const elem = value[i];
      console.log(elem);
      palindrome.push(elem);
    }
  };
  const concatWord = () => {
    palindrome = palindrome.join("");
    console.log(palindrome);
  };
  const confirmMatch = () => {
    if (input === palindrome) {
      setSuccess(true);
      return;
    }
    setFail(true);
  };
  const clearPalindrome = () => {
    palindrome = [];
  };
  const resetForm = () => {
    if (success || fail) {
      setSuccess(false);
      setFail(false);
    }
  };
  const checkIfPalindrome = (value) => {
    resetForm();
    reverseWord(value);
    concatWord();
    confirmMatch();
    clearPalindrome();
  };
  return (
    <>
      <div className="App">
        <div className="main">
          <div className="input-area">
            <input type="text" onChange={(e) => handleInput(e)} />
            <button onClick={() => checkIfPalindrome(input)}>Submit</button>
          </div>
          {success && <div className="success">This is a Palindrome</div>}
          {fail && <div className="fail">This is not a Palindrome</div>}
        </div>
      </div>
    </>
  );
}

export default Palindrome;

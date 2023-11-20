/* TASK
Focus an input upon a component mounting
useRef - for interaction with the actual DOM
Requirements:
- Upon page load, focus the input
*/

import { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <label htmlFor="focused-input">Focus me on page load!</label>
      <input id="focused-input" ref={inputRef}></input>
    </div>
  );
};

export default FocusInput;

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
      <h3>TASK</h3>
      <p>Focus the inout upon page load using useRef</p>
      <input id="focused-input" ref={inputRef}></input>
      <label htmlFor="focused-input">Focus me on page load!</label>
    </div>
  );
};

export default FocusInput;

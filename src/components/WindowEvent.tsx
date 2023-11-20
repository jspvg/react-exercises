import { useEffect } from "react";

const WindowEvent = () => {
  const handleDoubleClick = () => {
    alert("Double click!");
  };

  useEffect(() => {
    window.addEventListener("dblclick", handleDoubleClick);

    return () => {
      window.removeEventListener("dblclick", handleDoubleClick);
    };
  }, []);

  return <h2>Window event active!</h2>;
};

export default WindowEvent;

import { createContext, useContext } from "react";
import { DrawingColorCtx } from "../types/pixelArt";

export const DrawingColorContext = createContext<DrawingColorCtx | undefined>(
  undefined
);

export const useDrawingColor = (): DrawingColorCtx => {
  const context = useContext(DrawingColorContext);
  if (!context) {
    throw new Error(
      "useDrawingColor must be used within a DrawingColorProvider"
    );
  }
  return context;
};

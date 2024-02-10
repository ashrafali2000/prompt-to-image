"use client";
import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ImageContextProps {
  image: string; // Assuming image is a string, you can adjust the type accordingly
  defaultLoader: Boolean;
  promptImageHandler: Dispatch<SetStateAction<string>>;
  setDefaultLoader: Dispatch<boolean>;
}

export const ImageContext = createContext<ImageContextProps | undefined>(
  undefined
);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error(
      "useImageContext must be used within an ImageContext.Provider"
    );
  }
  return context;
};

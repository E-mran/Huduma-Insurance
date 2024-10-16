"use client";
import React from "react";

interface CopyTextProps {
  text: string;
  className?: string;
  children: React.ReactNode;
}
const CopyTextLabel = ({ text, className }: CopyTextProps) => {
  const copyText = async (text: string) => {
    try {
      var audio = document.getElementById("copiedSound") as HTMLAudioElement;
      audio.play();
      navigator.clipboard.writeText(text);
    } catch (e) {}
  };

  return (
    <>
      <audio id="copiedSound" src="/sounds/copyText.mp3"></audio>
      <label
        className={`hover:cursor-pointer ${className ? className : ""}`}
        onClick={() => copyText(text)}
      >
        {text}
      </label>
    </>
  );
};

export const CopyTextDiv = ({ children, text, className }: CopyTextProps) => {
  const copyText = async (text: string) => {
    try {
      var audio = document.getElementById("copiedSound") as HTMLAudioElement;
      audio.play();
      navigator.clipboard.writeText(text);
    } catch (e) {}
  };

  return (
    <div
      onClick={() => copyText(text)}
      className={`hover:cursor-pointer ${className ? className : ""}`}
    >
      <audio id="copiedSound" src="/sounds/copyText.mp3"></audio>
      {children}
    </div>
  );
};

export default CopyTextLabel;

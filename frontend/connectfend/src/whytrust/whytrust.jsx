import React from "react";
import "./whytrust.css";
import trustImg from "../assets/iot.png"; // your image path

export default function whyTrust() {
  return (
    <div className="trust-section">
      <div className="trust-left">
        <h1 className="trust-title">Why trust connect me?</h1>

        <p className="trust-text">
          Lorem ipsum dolor sit amet consectetur. Eget ac integer convallis nibh
          posuere sit congue curabitur. Dolor ac nullam bibendum sit libero erat
          blandit tincidunt. Risus arcu integer mauris egestas pellentesque
          faucibus tincidunt ullamcorper proin. Et arcu nunc at sagittis vel
          sollicitudin tincidunt nisi. Amet pellentesque eget sit mattis risus
          eget. Amet elit et nisl proin mi lacus leo dignissim. Tincidunt sed
          aliquam elementum felis.
        </p>
      </div>

      <div className="trust-right">
        <img src={trustImg} alt="trust" />
      </div>
    </div>
  );
}

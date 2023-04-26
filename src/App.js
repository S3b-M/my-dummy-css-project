import React from "react";
import "./styles.css";

export default function App() {
  return (
    <label htmlFor="terms_and_conditions" className="terms_and_conditions_box">
      I agree with{" "}
      <span className="terms_and_conditions_text" style={{ color: "blue" }}>
        Terms and conditions
      </span>
      <div className="pop_over">No ice cream will be delivered</div>
    </label>
  );
}

import React from "react";

import "./stepper.scss";

export default function Stepper(props) {
  if (props.fourStep) {
    return (
      <div class="stepper">
        <div class="stepper__list stepper__list--active">{props.step1}</div>
        <div class="stepper__list--line"></div>
        <div class="stepper__list">{props.step2}</div>
        <div class="stepper__list--line"></div>
        <div class="stepper__list">{props.step3}</div>
        <div class="stepper__list--line"></div>
        <div class="stepper__list">{props.step4}</div>
      </div>
    );
  }

  return (
    <div class="stepper">
      <div class="stepper__list stepper__list--active">{props.step1}</div>
      <div class="stepper__list--line"></div>
      <div class="stepper__list">{props.step2}</div>
      <div class="stepper__list--line"></div>
      <div class="stepper__list">{props.step3}</div>
    </div>
  );
}

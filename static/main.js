"use strict";

function handleUnitChange(btn, value, currentUnit, unitHeading) {
  btn.addEventListener("click", () => {
    console.log(btn.textContent, currentUnit.textContent, value.textContent);
    switch (true) {
      case btn.textContent.toLowerCase() === "days":
        if (["day", "days"].includes(currentUnit.textContent) === false) {
          const newValue = localStorage.getItem("time");
          value.textContent = newValue;
          currentUnit.textContent = newValue > 1 ? "days" : "day";
          unitHeading.textContent = newValue > 1 ? "Days" : "Day";
        }
        break;
      case btn.textContent.toLowerCase() === "hours":
        if (["hour", "hours"].includes(currentUnit.textContent) === false) {
          const newValue = localStorage.getItem("time") * 24;
          value.textContent = newValue;
          currentUnit.textContent = newValue > 1 ? "hours" : "hour";
          unitHeading.textContent = newValue > 1 ? "Hours" : "Hour";
        }
        break;
      case btn.textContent.toLowerCase() === "minutes":
        console.log(currentUnit.textContent, "here");
        if (["minute", "minutes"].includes(currentUnit.textContent) === false) {
          const newValue = localStorage.getItem("time") * 24 * 60;
          value.textContent = newValue;
          currentUnit.textContent = newValue > 1 ? "minutes" : "minute";
          unitHeading.textContent = newValue > 1 ? "Minutes" : "Minute";
        }
        break;
      case btn.textContent.toLowerCase() === "seconds":
        if (["second", "seconds"].includes(currentUnit.textContent) === false) {
          const newValue = localStorage.getItem("time") * 24 * 60 ** 2;
          value.textContent = newValue;
          currentUnit.textContent = newValue > 1 ? "seconds" : "second";
          unitHeading.textContent = newValue > 1 ? "Seconds" : "Second";
        }
        break;
      case btn.textContent.toLowerCase() === "milliseconds":
        if (currentUnit.textContent !== "millisecond") {
          const newValue = localStorage.getItem("time") * 24 * 60 ** 2 * 1000;
          value.textContent = newValue;
          currentUnit.textContent = newValue > 1 ? "milliseconds" : "millisecond";
          unitHeading.textContent = newValue > 1 ? "Milliseconds" : "Millisecond";
        }
        break;
      default:
        value.textContent = localStorage.getItem("time");
        currentUnit.textContent = localStorage.getItem("time") > 1 ? "days" : "day";
        unitHeading.textContent = localStorage.getItem("time") > 1 ? "Days" : "Day";
        break;
    }
  });
}

function handleUnitSelect(currentUnit, unitHeading, target, value) {
  switch (true) {
    case target === "days":
      if (["day", "days"].includes(currentUnit.textContent) === false) {
        const newValue = localStorage.getItem("time");
        value.textContent = newValue;
        currentUnit.textContent = newValue > 1 ? "days" : "day";
        unitHeading.textContent = newValue > 1 ? "Days" : "Day";
      }
      break;
    case target === "hours":
      if (["hour", "hours"].includes(currentUnit.textContent) === false) {
        const newValue = localStorage.getItem("time") * 24;
        value.textContent = newValue;
        currentUnit.textContent = newValue > 1 ? "hours" : "hour";
        unitHeading.textContent = newValue > 1 ? "Hours" : "Hour";
      }
      break;
    case target === "minutes":
      console.log(currentUnit.textContent, "here");
      if (["minute", "minutes"].includes(currentUnit.textContent) === false) {
        const newValue = localStorage.getItem("time") * 24 * 60;
        value.textContent = newValue;
        currentUnit.textContent = newValue > 1 ? "minutes" : "minute";
        unitHeading.textContent = newValue > 1 ? "Minutes" : "Minute";
      }
      break;
    case target === "seconds":
      if (["second", "seconds"].includes(currentUnit.textContent) === false) {
        const newValue = localStorage.getItem("time") * 24 * 60 ** 2;
        value.textContent = newValue;
        currentUnit.textContent = newValue > 1 ? "seconds" : "second";
        unitHeading.textContent = newValue > 1 ? "Seconds" : "Second";
      }
      break;
    case target === "milliseconds":
      if (currentUnit.textContent !== "millisecond") {
        const newValue = localStorage.getItem("time") * 24 * 60 ** 2 * 1000;
        value.textContent = newValue;
        currentUnit.textContent = newValue > 1 ? "milliseconds" : "millisecond";
        unitHeading.textContent = newValue > 1 ? "Milliseconds" : "Millisecond";
      }
      break;
    default:
      value.textContent = localStorage.getItem("time");
      currentUnit.textContent = localStorage.getItem("time") > 1 ? "days" : "day";
      break;
  }
}

window.onload = function () {
  const btnDay = document.getElementById("btn-d");
  const btnHour = document.getElementById("btn-h");
  const btnMinute = document.getElementById("btn-min");
  const btnSecond = document.getElementById("btn-s");
  const btnMillisecond = document.getElementById("btn-ms");

  const unit = document.getElementById("unit");
  const unitHeading = document.getElementById("unit-heading");
  const time = document.getElementById("time");

  localStorage.setItem("time", +time.textContent);

  handleUnitChange(btnDay, time, unit, unitHeading);
  handleUnitChange(btnHour, time, unit, unitHeading);
  handleUnitChange(btnMinute, time, unit, unitHeading);
  handleUnitChange(btnSecond, time, unit, unitHeading);
  handleUnitChange(btnMillisecond, time, unit, unitHeading);

  // handle mobile select
  const select = document.getElementById("menu-dropdown");
  select.addEventListener("change", (e) => {
    handleUnitSelect(unit, unitHeading, e.target.value, time);
  });
};

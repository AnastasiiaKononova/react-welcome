import React, { Component } from "react";

class BOM extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            window.navigator.geolocation.getCurrentPosition((position) => {
              console.log(position); // Без дозволу користувача нічого не вийде!
            });
          }}
        >
          Pick me up{" "}
        </button>
      </div>
    );
  }
}

export default BOM;

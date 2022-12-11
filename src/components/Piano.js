import "../styles/Piano.css";

function Piano() {
  return (
    <div id="piano">
      <img
        class="logo"
        src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
        alt="freeCodeCamp Logo"
      />
      <div class="keys">
        <div class="key do"></div>
        <div class="key re black--key"></div>
        <div class="key mi black--key"></div>
        <div class="key fa"></div>
        <div class="key sol black--key"></div>
        <div class="key la black--key"></div>
        <div class="key si black--key"></div>

        <div class="key do"></div>
        <div class="key re black--key"></div>
        <div class="key mi black--key"></div>
        <div class="key fa"></div>
        <div class="key sol black--key"></div>
        <div class="key la black--key"></div>
        <div class="key si black--key"></div>
      </div>
    </div>
  );
}

export default Piano;

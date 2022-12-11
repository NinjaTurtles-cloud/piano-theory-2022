import { useState } from "react";

function ScaleForm() {
  const [rootNote, setRootNote] = useState("Do");

  const handleChangeRootNote = (e) => {
    setRootNote(e.target.value);
  };

  return (
    <div>
      <h2>{rootNote}</h2>
      <form>
        <p>
          <label>RootNote</label>
          <br />
          <select
            name="root"
            defaultValue={rootNote}
            onChange={handleChangeRootNote}
          >
            <option value="Do">Do</option>
            <option value="Reb">Reb</option>
            <option value="Re">Re</option>
            <option value="Mib">Mib</option>
            <option value="Mi">Mi</option>
            <option value="Fa">Fa</option>
            <option value="Solb">Solb</option>
            <option value="Sol">Sol</option>
            <option value="Lab">Lab</option>
            <option value="La">La</option>
            <option value="Sib">Sib</option>
            <option value="Si">Si</option>
          </select>
        </p>

        <form>
          <p>
            intervalle
            <br />
            <input type="checkbox" name="1bemole" id="1b" />{" "}
            <label for="1b">1b</label>
            <br />
            <input type="checkbox" name="1" id="1" /> <label for="1">1</label>
            <br />
            <input type="checkbox" name="1diese" id="1d" />{" "}
            <label for="1d">1#</label>
            <br />
            <input type="checkbox" name="2bemole" id="2b" />{" "}
            <label for="2b">2b</label>
            <br />
            <input type="checkbox" name="2" id="2" /> <label for="2">2</label>
            <br />
            <input type="checkbox" name="2diese" id="2d" />{" "}
            <label for="2d">2#</label>
            <br />
            <input type="checkbox" name="2bemole" id="2b" />{" "}
            <label for="2b">2b</label>
            <br />
            <input type="checkbox" name="2" id="2" /> <label for="2">2</label>
            <br />
            <input type="checkbox" name="2diese" id="2d" />{" "}
            <label for="2d">2#</label>
            <br />
            <input type="checkbox" name="3bemole" id="3b" />{" "}
            <label for="3b">3b</label>
            <br />
            <input type="checkbox" name="3" id="3" /> <label for="3">3</label>
            <br />
            <input type="checkbox" name="3diese" id="3d" />{" "}
            <label for="3d">3#</label>
            <br />
            <input type="checkbox" name="4bemole" id="4b" />{" "}
            <label for="4b">4b</label>
            <br />
            <input type="checkbox" name="4" id="4" /> <label for="4">4</label>
            <br />
            <input type="checkbox" name="4diese" id="4d" />{" "}
            <label for="4d">4#</label>
            <br />
            <input type="checkbox" name="5bemole" id="5b" />{" "}
            <label for="5b">5b</label>
            <br />
            <input type="checkbox" name="5" id="5" /> <label for="5">5</label>
            <br />
            <input type="checkbox" name="5diese" id="5d" />{" "}
            <label for="5d">5#</label>
            <br />
            <input type="checkbox" name="6bemole" id="6b" />{" "}
            <label for="6b">6b</label>
            <br />
            <input type="checkbox" name="6" id="6" /> <label for="6">6</label>
            <br />
            <input type="checkbox" name="6diese" id="6d" />{" "}
            <label for="6d">6#</label>
            <br />
            <input type="checkbox" name="7bemole" id="7b" />{" "}
            <label for="6b">6b</label>
            <br />
            <input type="checkbox" name="7" id="7" /> <label for="7">7</label>
            <br />
            <input type="checkbox" name="7diese" id="7d" />{" "}
            <label for="7d">7#</label>
            <br />
          </p>
        </form>
      </form>
    </div>
  );
}

export default ScaleForm;

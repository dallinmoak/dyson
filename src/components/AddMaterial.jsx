'use client'

import { useState } from "react";

export default function AddMaterial() {

  const checkMaterialExists = async (name) => {
    if(name){
      const path = `/api/materials/by-name/${name}`;
      const res = await fetch(path);
      return res.ok;
    }
    return false;
  };

  const materialTypeOptions = ['structure', 'structure-crafter', 'raw', 'raw-craftable', 'craftable'];

  const [newMaterial, setNewMaterial] = useState();

  const validateAndSetName = async (nameVal) => {
    const exists = await checkMaterialExists(nameVal);
    if (exists) {
      alert("Material already exists");
    } else {
      setNewMaterial((prev) => ({ ...prev, name: nameVal }));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNewMaterial();
    const formData = new FormData(e.target.form);
    const nameVal = formData.get("name");
    await validateAndSetName(nameVal);
  };

  return (
    <div>
      <h1>Add Material</h1>
      <p>New material: {`\n${JSON.stringify(newMaterial)}`}</p>
      <form>
        <label>
          Material Name:
          <input type="text" name="name" />
        </label>
        <label>
          Material Type:
          <select name="type">
            {materialTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" onClick={handleSubmit}>Add Material</button>
      </form>
    </div>
  );
}

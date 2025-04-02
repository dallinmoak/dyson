'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RecipeIngredient({ ingredient, showDetails = false }) {

  const [material, setMaterial] = useState([]);
  useEffect(() => {
    const fetchMaterials = async () => {
      const res = await fetch(`/api/materials/${ingredient.materialId}`);
      const data = await res.json();
      setMaterial(data);
    }
    fetchMaterials();
  }, [])
  if (!showDetails) {
    return (
      <>
        <li>
          {ingredient.quantity}x&nbsp;
          <Link href={`/materials/${ingredient.materialId}`}>
            {material.name}
            {/* {ingredient.materialId} */}
          </Link>
        </li>
      </>
    )
  }
}
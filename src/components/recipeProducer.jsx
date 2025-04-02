'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RecipeProducer({ id }) {
  const [material, setMaterial] = useState();
  useEffect(() => {
    const fetchMaterials = async () => {
      const res = await fetch(`/api/materials/${id}`);
      const data = await res.json();
      setMaterial(data);
    }
    fetchMaterials();
  }, []);

  return <span><Link href={`/materials/${id}`}>{material?.name}</Link></span>
}
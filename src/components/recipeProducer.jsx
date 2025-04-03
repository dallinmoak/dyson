'use client';

import { encodeName } from "@/lib/utils";
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

  return <span><Link href={`/materials/${material?.name ? encodeName(material.name) : ''}`}>{material?.name}</Link></span>
}
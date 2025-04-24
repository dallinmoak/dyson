'use client';

import { encodeName } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MaterialNameLink({ id }) {
  const [material, setMaterial] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterials = async () => {
      const res = await fetch(`/api/materials/${id}`);
      const data = await res.json();
      if (data.name) setMaterial(data);
      setLoading(false);
    };
    fetchMaterials();
  }, []);
  if (loading) {
    return <span>...</span>;
  }
  if (material) {
    return (
      <Link href={`/materials/${material?.name ? encodeName(material.name) : ''}`}>
        <img src={material?.icon} className="inline-block w-5 h-5 mr-1" />
        {material?.name}
      </Link>
    );
  } else return <span>{id}</span>;
}
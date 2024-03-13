"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");
  return (
    <Link
      href={`/?cat=${param}`}
      className={`hover:text-amber-600 hover:font-semibold
            ${
              cat == param
                ? "underline underline-offset-8 rounded-lg decoration-4 decoration-amber-500"
                : ""
            }
        `}
    >
      {title}
    </Link>
  );
}

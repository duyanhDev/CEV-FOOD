"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./header";

export default function Navigation() {
  const pathname = usePathname();

  return <Header />;
}

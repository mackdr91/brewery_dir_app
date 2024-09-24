// components/ConditionalNavbar.jsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

/**
 * Returns the Navbar component if the current route is not the root route
 * ("/"), otherwise returns null.
 *
 * @returns {JSX.Element | null} The Navbar component or null.
 */
export default function ConditionalNavbar() {
  const pathname = usePathname();

  return pathname !== "/" ? <Navbar /> : null;
}
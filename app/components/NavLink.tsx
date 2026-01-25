import Link from "next/link"
import type { NavLinkProps } from "@/app/types"

export default function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-light ${isActive ? "text-orange-light" : "text-white"}`}
      >{children}</Link>
    </li>
  )
}
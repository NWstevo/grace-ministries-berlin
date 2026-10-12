"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, site, type NavItem } from "@/lib/site";

function isActive(pathname: string, item: NavItem) {
  return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
}

export function MainNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdowns on outside click or Escape.
  useEffect(() => {
    function onPointer(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <nav ref={navRef} aria-label="Main" className="bg-navy-900 text-white">
      <div
        className={`mx-auto flex max-w-7xl items-center gap-3 px-4 sm:px-6 ${
          isHome ? "nav-logo-offset" : ""
        }`}
      >
        {/* On the homepage the big logo sits in the hero; other pages show a small one here. */}
        {!isHome && (
          <Link href="/" onClick={closeAll} className="shrink-0 py-2" aria-label={`${site.shortName}, home`}>
            <Image src="/images/logo.png" alt="" width={800} height={800} className="size-11" />
          </Link>
        )}

        {/* Desktop */}
        <ul className="hidden flex-1 items-stretch lg:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item);
            const open = openMenu === item.label;
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => item.children && setOpenMenu(null)}
              >
                {item.children ? (
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenMenu(open ? null : item.label)}
                    className={`nav-item flex h-16 items-center gap-1 border-b-2 px-3 text-[15px] font-medium transition-colors ${
                      active ? "border-gold-400 text-gold-400" : "border-transparent hover:text-gold-300"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeAll}
                    className={`nav-item flex h-16 items-center border-b-2 px-3 text-[15px] font-medium transition-colors ${
                      active ? "border-gold-400 text-gold-400" : "border-transparent hover:text-gold-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && open && (
                  <ul className="absolute top-full left-0 min-w-60 overflow-hidden rounded-b-md border-t-2 border-gold-400 bg-white py-2 text-ink shadow-xl">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={closeAll}
                          className="block px-4 py-2.5 text-[15px] hover:bg-cream-100 hover:text-bronze"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <span className="flex-1 font-caps text-sm tracking-widest text-gold-400 lg:hidden">{isHome ? "Menu" : ""}</span>

        <Link
          href="/visit"
          onClick={closeAll}
          className="shrink-0 rounded-md bg-gold-400 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-gold-300 xl:px-5"
        >
          Join Us
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 flex size-12 shrink-0 items-center justify-center lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <ul id="mobile-nav" className="border-t border-white/10 px-4 pb-4 lg:hidden">
          {nav.map((item) => {
            const active = isActive(pathname, item);
            const open = openMenu === item.label;
            return (
              <li key={item.label} className="border-b border-white/10">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    aria-current={active ? "page" : undefined}
                    className={`flex-1 py-3.5 text-base font-medium ${active ? "text-gold-400" : ""}`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-label={`${item.label} submenu`}
                      onClick={() => setOpenMenu(open ? null : item.label)}
                      className="flex size-12 items-center justify-center"
                    >
                      <ChevronDown className={`size-5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                  )}
                </div>
                {item.children && open && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={closeAll} className="block py-2.5 text-white/80 hover:text-gold-300">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { mainNavigation } from "@/lib/navigation";

export function SiteHeader() {
  const dropdownGroups = useMemo(
    () => mainNavigation.filter((group) => group.items?.length),
    [],
  );
  const [activeTitle, setActiveTitle] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelMenuClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleMenuClose = () => {
    cancelMenuClose();
    closeTimer.current = setTimeout(() => {
      setActiveTitle("");
      closeTimer.current = null;
    }, 140);
  };

  useEffect(() => {
    const syncScroll = () => setScrolled(window.scrollY > 0);
    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", syncScroll);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);
  const activeGroup =
    dropdownGroups.find((group) => group.title === activeTitle) ?? dropdownGroups[0];
  const isMenuOpen = Boolean(activeTitle && activeGroup);

  return (
    <header
      data-scrolled={scrolled}
      className="site-header"
      data-menu-open={isMenuOpen ? "true" : "false"}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          cancelMenuClose();
          setActiveTitle("");
        }
      }}
      onMouseEnter={cancelMenuClose}
      onMouseLeave={scheduleMenuClose}
    >
      <div className="site-header__bar">
        <Link className="site-header__brand" href="/" aria-label="EIVIS sākums">
          <span className="site-header__mark" aria-hidden="true" />
          <span>EIVIS</span>
        </Link>

        <nav className="site-header__nav" aria-label="Galvenā navigācija">
          {mainNavigation.map((group) => (
            <div
              className="site-header__nav-item"
              data-active={activeTitle === group.title ? "true" : "false"}
              key={group.title}
              onFocus={() => {
                cancelMenuClose();
                if (group.items?.length) {
                  setActiveTitle(group.title);
                  return;
                }

                setActiveTitle("");
              }}
              onMouseEnter={() => {
                cancelMenuClose();
                if (group.items?.length) {
                  setActiveTitle(group.title);
                  return;
                }

                setActiveTitle("");
              }}
            >
              <Link
                className="site-header__nav-link"
                href={group.href}
                aria-haspopup={group.items ? "true" : undefined}
                aria-expanded={group.items ? activeTitle === group.title : undefined}
              >
                <span>{group.title}</span>
                {group.items ? <ChevronDown aria-hidden="true" size={14} /> : null}
              </Link>
            </div>
          ))}
        </nav>

        <Link
          className="site-header__cta"
          href="/kontakti"
          onFocus={() => setActiveTitle("")}
          onMouseEnter={() => {
            cancelMenuClose();
            setActiveTitle("");
          }}
        >
          Pieteikt demonstrāciju
        </Link>
      </div>

      <div
        className="site-header__dropdown"
        onFocus={() => {
          cancelMenuClose();
          if (activeGroup) {
            setActiveTitle(activeGroup.title);
          }
        }}
        onMouseEnter={() => {
          cancelMenuClose();
          if (activeGroup) {
            setActiveTitle(activeGroup.title);
          }
        }}
        role="menu"
      >
        <div className="site-header__dropdown-inner">
          <div className="site-header__dropdown-content" key={activeGroup?.title}>
            <p className="site-header__dropdown-title">{activeGroup?.title}</p>
            <div className="site-header__dropdown-grid">
              {activeGroup?.items?.map((item) => (
                <Link
                  className="site-header__dropdown-link"
                  href={item.href}
                  key={item.href}
                  role="menuitem"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

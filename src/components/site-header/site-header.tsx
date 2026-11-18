"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { mainNavigation } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const dropdownGroups = useMemo(
    () => mainNavigation.filter((group) => group.items?.length),
    [],
  );
  const [activeTitle, setActiveTitle] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const mobilePanel = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobilePanel.current?.querySelector<HTMLElement>("a, button")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        mobileButton.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !mobilePanel.current) return;
      const focusable = Array.from(
        mobilePanel.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileGroup("");
  };
  const closeDesktopMenu = () => {
    cancelMenuClose();
    setActiveTitle("");
  };
  const activeGroup =
    dropdownGroups.find((group) => group.title === activeTitle) ?? dropdownGroups[0];
  const isMenuOpen = Boolean(activeTitle && activeGroup);

  return (
    <header
      data-scrolled={scrolled}
      className="site-header"
      data-menu-open={isMenuOpen || mobileOpen ? "true" : "false"}
      data-mobile-open={mobileOpen ? "true" : "false"}
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
          <Image src="/eivis-logo-full-black.svg" alt="" width={116} height={24} unoptimized />
        </Link>

        <button
          ref={mobileButton}
          className="site-header__mobile-trigger"
          type="button"
          aria-label={mobileOpen ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>

        <nav className="site-header__nav" aria-label="Galvenā navigācija">
          {mainNavigation.map((group) => (
            <div
              className="site-header__nav-item"
              data-active={activeTitle === group.title ? "true" : "false"}
              data-current={pathname === group.href || pathname.startsWith(`${group.href}/`) ? "true" : "false"}
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
                onClick={closeDesktopMenu}
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
        ref={mobilePanel}
        id="mobile-navigation"
        className="site-header__mobile-panel"
        aria-hidden={!mobileOpen}
      >
        <nav className="site-header__mobile-nav" aria-label="Mobilā navigācija">
          {mainNavigation.map((group) => {
            const expanded = mobileGroup === group.title;
            return (
              <div className="site-header__mobile-group" key={group.title}>
                {group.items?.length ? (
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`mobile-group-${group.title}`}
                    onClick={() => setMobileGroup(expanded ? "" : group.title)}
                  >
                    <span>{group.title}</span>
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                ) : (
                  <Link href={group.href} onClick={closeMobileMenu}>{group.title}</Link>
                )}
                {group.items?.length ? (
                  <div
                    id={`mobile-group-${group.title}`}
                    className="site-header__mobile-submenu"
                    hidden={!expanded}
                  >
                    <Link href={group.href} onClick={closeMobileMenu}>Skatīt sadaļu</Link>
                    {group.items.map((item) => (
                      <Link href={item.href} key={item.href} onClick={closeMobileMenu}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
        <Link className="site-header__mobile-cta" href="/kontakti" onClick={closeMobileMenu}>
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
                  onClick={closeDesktopMenu}
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

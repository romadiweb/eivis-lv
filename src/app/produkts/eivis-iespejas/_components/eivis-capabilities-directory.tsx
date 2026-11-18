"use client";

import {
  BookOpenCheck, Boxes, Building2, CalendarRange, CircleDollarSign,
  ClipboardCheck, GraduationCap, House, LayoutDashboard, LibraryBig,
  Search, Settings2, ShoppingCart, UsersRound, type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  capabilityFilters, capabilityGroups,
  type CapabilityFilter, type CapabilityGroup, type CapabilityIcon,
} from "./capabilities-data";
import "./eivis-capabilities-directory.css";

const icons: Record<CapabilityIcon, LucideIcon> = {
  daily: LayoutDashboard, students: GraduationCap, learning: BookOpenCheck,
  quality: ClipboardCheck, planning: CalendarRange, courses: LibraryBig,
  finance: CircleDollarSign, housing: House, facilities: Building2,
  supply: ShoppingCart, content: Boxes, people: UsersRound, admin: Settings2,
};

type GroupProps = {
  group: CapabilityGroup;
  index: number;
  open: boolean;
  query: string;
  onToggle: () => void;
};

function EivisCapabilityGroup({ group, index, open, query, onToggle }: GroupProps) {
  const Icon = icons[group.icon];
  const visibleFeatures = query
    ? group.features.filter((item) => item.name.toLocaleLowerCase("lv").includes(query))
    : group.features;
  const panelId = `capability-group-${index}`;
  const expanded = open || Boolean(query);

  return (
    <article className="capability-directory__group">
      <div className="capability-directory__group-header">
        <span className="capability-directory__icon"><Icon size={18} aria-hidden="true" /></span>
        <div>
          <h3>{group.title}</h3>
          <p>{group.description}</p>
        </div>
        {!query && (
          <button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={onToggle}>
            {expanded ? "Rādīt mazāk" : "Skatīt visas iespējas"}
          </button>
        )}
      </div>
      <div id={panelId} className="capability-directory__rows" hidden={!expanded}>
        {visibleFeatures.map((item) => (
          <div className="capability-directory__row" key={item.name}>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function EivisCapabilitiesDirectory() {
  const [activeFilter, setActiveFilter] = useState<CapabilityFilter>("Visas iespējas");
  const [queryValue, setQueryValue] = useState("");
  const [openGroups, setOpenGroups] = useState(() => new Set([capabilityGroups[0].title]));
  const query = queryValue.trim().toLocaleLowerCase("lv");

  const visibleGroups = useMemo(() => capabilityGroups.filter((group) => {
    const inFilter = activeFilter === "Visas iespējas" || group.filter === activeFilter;
    const matchesQuery = !query || group.title.toLocaleLowerCase("lv").includes(query)
      || group.features.some((item) => item.name.toLocaleLowerCase("lv").includes(query));
    return inFilter && matchesQuery;
  }), [activeFilter, query]);

  const selectFilter = (filter: CapabilityFilter) => {
    setActiveFilter(filter);
    setQueryValue("");
    const first = capabilityGroups.find((group) => filter === "Visas iespējas" || group.filter === filter);
    setOpenGroups(new Set(first ? [first.title] : []));
  };

  const toggleGroup = (title: string) => {
    setOpenGroups((current) => {
      const next = new Set(current);
      if (next.has(title)) next.delete(title); else next.add(title);
      return next;
    });
  };

  return (
    <section className="capability-directory" aria-labelledby="capability-directory-title">
      <header className="capability-directory__intro">
        <p className="capability-directory__eyebrow">Funkcionalitāte</p>
        <h2 id="capability-directory-title">Iespējas katrai iestādes darba jomai.</h2>
        <p>No ikdienas saziņas un mācību procesa līdz finanšu, personāla un resursu pārvaldībai — EIVIS apvieno dažādas funkcionalitātes vienotā, individuāli pielāgojamā vidē.</p>
      </header>

      <div className="capability-directory__tools">
        <div className="capability-directory__filters" aria-label="Funkcionalitātes kategorijas">
          {capabilityFilters.map((filter) => (
            <button type="button" data-active={filter === activeFilter || undefined} onClick={() => selectFilter(filter)} key={filter}>
              {filter}
            </button>
          ))}
        </div>
        <label className="capability-directory__search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Meklēt iespēju</span>
          <input value={queryValue} onChange={(event) => setQueryValue(event.target.value)} placeholder="Meklēt iespēju..." type="search" />
        </label>
      </div>

      <p className="capability-directory__note">Attēlotās iespējas ir piemērs no EIVIS konfigurācijas. Katras iestādes funkcionalitāte, struktūra un terminoloģija tiek pielāgota individuāli.</p>

      <div className="capability-directory__groups" aria-live="polite">
        {visibleGroups.map((group) => (
          <EivisCapabilityGroup
            group={group}
            index={capabilityGroups.indexOf(group)}
            key={group.title}
            open={openGroups.has(group.title)}
            query={query}
            onToggle={() => toggleGroup(group.title)}
          />
        ))}
        {!visibleGroups.length && <p className="capability-directory__empty">Neviena atbilstoša iespēja netika atrasta.</p>}
      </div>

    </section>
  );
}

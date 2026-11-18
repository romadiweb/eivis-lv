import { Check, ChevronDown, ClipboardList, FileText, Minus, Settings2, ShieldCheck, UsersRound } from "lucide-react";

const permissionRows = [
  { icon: FileText, label: "Dokumenti", permissions: [true, true, true] },
  { icon: ClipboardList, label: "Pieteikumi", permissions: [true, true, false] },
  { icon: UsersRound, label: "Personāls", permissions: [true, false, false] },
] as const;

export function PermissionsPreview() {
  return (
    <div className="permissions-preview" role="img" aria-label="Ilustratīvs EIVIS lomu un piekļuves tiesību pārvaldības panelis">
      <div className="permissions-preview__bar" aria-hidden="true">
        <span className="permissions-preview__dots"><i /><i /><i /></span>
        <span><ShieldCheck size={15} />Piekļuves pārvaldība</span><Settings2 size={15} />
      </div>
      <div className="permissions-preview__body" aria-hidden="true">
        <div className="permissions-preview__role"><span><small>Lietotāja loma</small><strong>Darbinieks</strong></span><ChevronDown size={15} /></div>
        <div className="permissions-preview__table">
          <div className="permissions-preview__head"><span>Sadaļa</span><span>Skatīt</span><span>Izveidot</span><span>Rediģēt</span></div>
          {permissionRows.map(({ icon: Icon, label, permissions }, rowIndex) => (
            <div className="permissions-preview__row" key={label}>
              <span><Icon size={15} />{label}</span>
              {permissions.map((enabled, index) => (
                <span className={enabled ? "permissions-preview__enabled" : "permissions-preview__disabled"} data-animated={rowIndex === 1 && index === 1 || undefined} key={`${label}-${index}`}>
                  {enabled ? <Check size={13} /> : <Minus size={13} />}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="permissions-preview__status"><i />Piekļuve atbilstoši lomai</p>
      </div>
    </div>
  );
}

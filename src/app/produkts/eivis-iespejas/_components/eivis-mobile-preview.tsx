import {
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Menu,
  Megaphone,
  MoreVertical,
  PanelTop,
} from "lucide-react";

export function EivisMobilePreview() {
  return (
    <div
      className="mobile-preview"
      role="img"
      aria-label="Ilustratīva EIVIS administrācijas darba vide mobilā pārlūkā"
    >
      <div className="mobile-preview__canvas" aria-hidden="true">
        <div className="mobile-preview__floating-card">
          <div className="mobile-preview__floating-icon"><PanelTop size={17} /></div>
          <div>
            <strong>Informācijas panelis</strong>
            <span>Personalizēta darba vide</span>
          </div>
          <span className="mobile-preview__active"><i />Aktīvs</span>
          <div className="mobile-preview__floating-lines">
            <span /><span /><span />
          </div>
        </div>

        <div className="mobile-preview__phone">
          <span className="mobile-preview__side mobile-preview__side--left" />
          <span className="mobile-preview__side mobile-preview__side--right" />
          <div className="mobile-preview__screen">
            <div className="mobile-preview__island"><i /></div>

            <div className="mobile-preview__admin-header">
              <div className="mobile-preview__status">
                <strong>9:41</strong>
                <div className="mobile-preview__status-icons">
                  <span className="mobile-preview__signal-bars"><i /><i /><i /><i /></span>
                  <svg viewBox="0 0 18 12" aria-hidden="true">
                    <path d="M1 4.5C5.5.5 12.5.5 17 4.5M4 7.5c3-2.5 7-2.5 10 0M7.2 10.3a2.6 2.6 0 0 1 3.6 0" />
                  </svg>
                  <span className="mobile-preview__battery"><i /></span>
                </div>
              </div>
              <div className="mobile-preview__admin-nav">
                <Menu size={18} />
                <span className="mobile-preview__avatar">K</span>
                <strong>Administrācija</strong>
                <ChevronDown size={13} />
                <span className="mobile-preview__nav-spacer" />
                <span className="mobile-preview__nav-action"><CalendarDays size={16} /></span>
                <span className="mobile-preview__nav-action"><CheckCircle2 size={16} /></span>
                <span className="mobile-preview__nav-action"><MoreVertical size={16} /></span>
              </div>
            </div>

            <div className="mobile-preview__dashboard">
              <div className="mobile-preview__greeting">
                <h5>Labdien, Konstancija</h5>
                <span>Otrdiena, 17. novembris</span>
              </div>

              <div className="mobile-preview__counters">
                <span><CalendarDays size={14} />Notikumi</span>
                <span><CheckCircle2 size={14} />Uzdevumi</span>
                <span><Bell size={14} />Ziņas</span>
              </div>

              <div className="mobile-preview__news">
                <div className="mobile-preview__news-icon"><Megaphone size={22} /></div>
                <div className="mobile-preview__news-copy">
                  <span className="mobile-preview__new-badge">Jauna</span>
                  <strong>Piesprausts raksts bez attēla.</strong>
                  <p>Iestādes jaunums ir publicēts.</p>
                </div>
              </div>

              <div className="mobile-preview__notice">
                <span className="mobile-preview__notice-icon"><Bell size={16} /></span>
                <strong>1 personāla izmaiņas gaida apstiprinājumu</strong>
              </div>

              <div className="mobile-preview__calendar">
                <div><CalendarDays size={15} /><strong>Kalendārs</strong></div>
                <span>Šodien nav ieplānotu notikumu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

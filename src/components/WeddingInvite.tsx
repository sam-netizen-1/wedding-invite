import { useEffect, useState } from "react";
import bridePortrait from "../assets/generated/bride-illustrated.webp";
import coupleHero from "../assets/generated/couple-illustrated.webp";
import groomPortrait from "../assets/generated/groom-illustrated.webp";
import {
  blessings,
  ceremonies,
  couple,
  familySignoff,
  siteMetadata,
  specialInvitees,
  weddingDetails,
} from "../data/invite";

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const countdownLabels: Array<keyof Countdown> = [
  "days",
  "hours",
  "minutes",
  "seconds",
];

const introductionMoments = [
  {
    title: couple[0].name,
    subtitle: "The groom",
    image: groomPortrait,
    alt: `${couple[0].name} in traditional ivory sherwani`,
    className: "introduction-card-groom",
    person: couple[0],
  },
  {
    title: couple[1].name,
    subtitle: "The bride",
    image: bridePortrait,
    alt: `${couple[1].name} in bridal attire`,
    className: "introduction-card-bride",
    person: couple[1],
  },
] as const;

const celebrationStickers = [
  {
    image: groomPortrait,
    alt: "Illustrated groom motif",
    className: "schedule-sticker-groom",
  },
  {
    image: bridePortrait,
    alt: "Illustrated bride motif",
    className: "schedule-sticker-bride",
  },
] as const;

function calculateCountdown(targetDate: string): Countdown {
  const difference = Math.max(new Date(targetDate).getTime() - Date.now(), 0);

  return {
    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0",
    ),
    hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
      2,
      "0",
    ),
    minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
      2,
      "0",
    ),
    seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
  };
}

export function WeddingInvite() {
  const [countdown, setCountdown] = useState<Countdown>(() =>
    calculateCountdown(weddingDetails.targetDate),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(calculateCountdown(weddingDetails.targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.title = siteMetadata.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", siteMetadata.description);
    }
  }, []);

  return (
    <main className="page-shell">
      <div className="page-aura page-aura-left" aria-hidden="true" />
      <div className="page-aura page-aura-right" aria-hidden="true" />

      <section className="invite">
        <header className="invite-header">
          <div className="invite-symbol">॥ ॐ ॥</div>
          <p className="header-note header-note-invocation">
            {blessings.invocation1}
          </p>
          <p className="header-note header-note-invocation">
            {blessings.invocation2}
          </p>
          <p className="eyebrow">{blessings.overline}</p>

          <div className="motif-row" aria-hidden="true">
            <span className="motif-line" />
            <span className="motif-icon">✦</span>
            <div className="mini-motif-pair">
              <img
                className="mini-motif mini-motif-left"
                src={groomPortrait}
                alt=""
              />
              <img
                className="mini-motif mini-motif-right"
                src={bridePortrait}
                alt=""
              />
            </div>
            <span className="motif-icon">✦</span>
            <span className="motif-line" />
          </div>
        </header>

        <section className="hero-card">
          <div className="hero-glow hero-glow-left" aria-hidden="true" />
          <div className="hero-glow hero-glow-right" aria-hidden="true" />
          <span className="corner-flower corner-top-left">✦</span>
          <span className="corner-flower corner-top-right">✦</span>
          <span className="corner-flower corner-bottom-left">✦</span>
          <span className="corner-flower corner-bottom-right">✦</span>

          <div className="blessing-block">
            <div className="blessing-icon">✧</div>
            <p className="section-kicker">Together with their families</p>
            <p className="blessing-text">{blessings.familyNote}</p>
          </div>

          <div className="invite-introduction-grid">
            {introductionMoments.map((moment) => (
              <article
                className={`introduction-card introduction-card-hero ${moment.className}`}
                key={moment.title}
              >
                <div className="introduction-image-frame">
                  <img
                    className="introduction-image"
                    src={moment.image}
                    alt={moment.alt}
                  />
                </div>
                <div className="introduction-copy">
                  <p className="moment-subtitle">{moment.subtitle}</p>
                  <h3>{moment.title}</h3>
                  <p className="introduction-credential">
                    {moment.person.credential}
                  </p>
                  <p className="introduction-line">
                    {moment.person.primaryLine}
                  </p>
                  <p className="introduction-line introduction-line-soft">
                    {moment.person.secondaryLine}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="motif-row motif-row-compact" aria-hidden="true">
            <span className="motif-line motif-line-short" />
            <div className="mini-motif-badge">
              <img className="mini-motif" src={bridePortrait} alt="" />
              <span className="mini-motif-monogram">#RajYog</span>
              <img className="mini-motif" src={groomPortrait} alt="" />
            </div>
            <span className="motif-line motif-line-short" />
          </div>

          <div className="hero-grid">
            <div className="date-banner">
              <p className="date-label">{weddingDetails.preface}</p>
              <p className="date-main">{weddingDetails.date}</p>
              <p className="date-meta">{weddingDetails.dayDetail}</p>
              <p className="date-submeta">{weddingDetails.muhurta}</p>
            </div>

            <div className="venue-block">
              <p className="section-kicker">Venue</p>
              <h2>{weddingDetails.venueTitle}</h2>
              <p className="venue-city">{weddingDetails.venueCity}</p>
              <p className="venue-address">{weddingDetails.venueAddress}</p>
              <a
                className="venue-map-link"
                href={weddingDetails.venueMapUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </section>

        <section className="countdown-panel">
          <p className="countdown-title">
            Counting down to the sacred ceremony
          </p>
          <div className="countdown-grid">
            {countdownLabels.map((label) => (
              <div className={`countdown-card countdown-${label}`} key={label}>
                <span className="countdown-value">{countdown[label]}</span>
                <span className="countdown-label">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="ceremony-section">
          <div className="section-heading">
            <h2>Celebration Schedule</h2>
            <p>{weddingDetails.closing}</p>
            <div className="section-heading-line" aria-hidden="true">
              <span />
              <div className="section-heading-motif">
                <img className="mini-motif" src={groomPortrait} alt="" />
                <span className="section-heading-flower">✦</span>
                <img className="mini-motif" src={bridePortrait} alt="" />
              </div>
              <span />
            </div>
          </div>

          <div className="celebration-stage">
            {celebrationStickers.map((sticker) => (
              <div
                className={`schedule-sticker ${sticker.className}`}
                key={sticker.className}
                aria-hidden="true"
              >
                <img src={sticker.image} alt={sticker.alt} />
              </div>
            ))}

            <div className="celebration-hero-card">
              <div className="celebration-hero-image-wrap">
                <img
                  className="celebration-hero-image"
                  src={coupleHero}
                  alt={`${couple[0].name} and ${couple[1].name} in coordinated traditional wedding attire`}
                />
              </div>
              <div className="celebration-hero-copy">
                <p className="section-kicker">Tuesday • 5 May 2026</p>
                <h3>The Wedding Day at Rajwada Palace</h3>
                <p>
                  The heart of the invitation is the wedding day itself, from
                  the joyful nikasi in the morning to varmala, blessings and
                  the sacred paanigrahan ceremony.
                </p>
              </div>
            </div>

            <div className="ceremony-grid">
              {ceremonies.map((ceremony) => (
                <article
                  className={`ceremony-card ceremony-${ceremony.tone} ${
                    ceremony.date === weddingDetails.date
                      ? "ceremony-featured"
                      : "ceremony-muted"
                  }`}
                  key={ceremony.title}
                >
                  <div className="ceremony-stamp">{ceremony.icon}</div>
                  <div>
                    <p className="ceremony-subtitle">{ceremony.subtitle}</p>
                    <h3>{ceremony.title}</h3>
                    <p className="ceremony-time">
                      {ceremony.date} • {ceremony.time}
                    </p>
                    <p className="ceremony-location">{ceremony.location}</p>
                    <p className="ceremony-description">
                      {ceremony.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hosts-section">
          <div className="hosts-card">
            <div className="hosts-layout">
              <div className="hosts-copy">
                <p className="section-kicker">Special Invitation By</p>
                <h2>Families Extending Their Warm Welcome</h2>
                <div className="hosts-callout">
                  <span className="hosts-callout-label">Maternal Side</span>
                  <p>{familySignoff.note}</p>
                </div>
              </div>

              <div className="hosts-summary">
                <p className="hosts-summary-label">Warm Welcome</p>
                <p className="footer-quote">{weddingDetails.closing}</p>
                <p className="footer-translation">{familySignoff.title}</p>
                <p className="hosts-subtitle">{familySignoff.subtitle}</p>
                <div className="hosts-summary-divider" aria-hidden="true">
                  <span />
                  <b>✦</b>
                  <span />
                </div>
              </div>
            </div>

            <div className="hosts-grid">
              {specialInvitees.map((invitee) => (
                <article className="host-chip" key={invitee.name}>
                  <strong>{invitee.name}</strong>
                  <span>{invitee.city}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="invite-footer">
          <div className="footer-divider" aria-hidden="true">
            <span />
            <b>✦ ॐ ✦</b>
            <span />
          </div>
        </footer>
      </section>
    </main>
  );
}

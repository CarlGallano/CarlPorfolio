import { useEffect } from "react";
import { Icon, ArrowButton } from "./icons.jsx";
import {
  profile, hero, skillCards, developmentProjects, designProjects,
  certifications, experience, tools,
} from "./data.js";
import { Icons } from "./components/Icons.jsx";
import Lanyard from "./components/Lanyard.jsx";

const stackIcons = [
  { name: "react", label: "React" },
  { name: "tailwind", label: "Tailwind CSS" },
  { name: "gitHub", label: "GitHub" },
  { name: "radix", label: "Radix UI" },
  { name: "aria", label: "WAI-ARIA" },
  { name: "npm", label: "npm" },
  { name: "yarn", label: "Yarn" },
  { name: "pnpm", label: "pnpm" },
];

function Section({ id, title, className = "", children }) {
  const lines = title.split("\n");
  return (
    <section className={`section fx ${className}`} id={id}>
      <h2>
        {lines[0]}
        {lines.length > 1 && <span className="dim">{`\n${lines.slice(1).join("\n")}`}</span>}
      </h2>
      {children}
    </section>
  );
}

export default function App() {
  // Fade-in on mount / when scrolled into view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".fx, .fx-item").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your form backend (Formspree, EmailJS, your API...)
  };

  return (
    <div className="page">
      <div className="wrapper" id="home">
        <div className="container">
          <aside className="left fx">
            <div className="profile">
              {profile.pic && (
                <div className="profile-lanyard" aria-label={profile.name}>
                  <Lanyard
                    frontImage={profile.pic}
                    backImage={profile.pic}
                    imageFit="cover"
                    cardColor="#ffffff"
                    orientation="portrait"
                    finish="glossy"
                    cornerRadius={0.3}
                    size={0.7}
                    anchor="center"
                    strapLength={0.35}
                    strapColor="#f46c38"
                    strapWidth={0.65}
                    metal="silver"
                    gravity={1}
                    damping={0.5}
                    elasticity={0.35}
                    breeze={0.4}
                    interactive
                    intro
                  />
                </div>
              )}
              <strong>{profile.name}</strong>
              {profile.bio && <p>{profile.bio}</p>}
              {profile.socials && (
                <div className="socials">
                  {profile.socials.map((s) => (
                    <a key={s.icon} href={s.href} aria-label={s.icon} title={s.icon}>
                      <Icon name={s.icon} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </aside>

          <main className="right">
            <section className="hero fx delay">
              <div>
                <h1>{hero.title}</h1>
                <p className="lead">{hero.lead}</p>
              </div>

              <div className="cards">
                {skillCards.map((c, i) => (
                  <a className={`card ${c.color} fx-item`} style={{"--d": `${i * 90}ms`}} href={c.href} key={c.label}>
                    <Icon name="feather" className="icon" />
                    <div className="row">
                      <span className="label">{c.label}</span>
                      <ArrowButton />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <Section id="projects" title={"DEV\nPROJECTS"}>
              <div className="list">
                {developmentProjects.map((x, i) => (
                  <a className="item project fx-item" style={{"--d": `${i * 80}ms`}} href={x.url} target="_blank" rel="noopener noreferrer" key={i}>
                    <img className="item-pic" src={x.image} alt="" loading="lazy" />
                    <div className="item-text">
                      <h3>{x.title}</h3>
                      <p>{x.subtitle}</p>
                    </div>
                    <span className="item-arrow"><Icon name="arrowUp" /></span>
                  </a>
                ))}
              </div>
            </Section>

            <Section id="uiux" title={"UI UX\nPROJECTS"}>
              <div className="list">
                {designProjects.map((x, i) => (
                  <a className="item project fx-item" style={{"--d": `${i * 80}ms`}} href={x.url} target="_blank" rel="noopener noreferrer" key={i}>
                    <img className="item-pic" src={x.image} alt="" loading="lazy" />
                    <div className="item-text">
                      <h3>{x.title}</h3>
                      <p>{x.subtitle}</p>
                    </div>
                    <span className="item-arrow"><Icon name="arrowUp" /></span>
                  </a>
                ))}
              </div>
            </Section>

            <Section id="certifications" title={"MY\nCERTIFICATES"}>
              <div className="certs">
                {certifications.map((c, i) => (
                  c.bg ? (
                    <a className="cert is-preview fx-item" style={{"--d": `${i * 70}ms`}} href={c.url} target="_blank" rel="noopener noreferrer" title={c.name} aria-label={`View ${c.name} certificate`} key={i}>
                      <img className="cert-bg" src={c.bg} alt={`${c.name} certificate`} loading="lazy" />
                    </a>
                  ) : (
                    <a className="cert fx-item" style={{"--d": `${i * 70}ms`}} href={c.url} target="_blank" rel="noopener noreferrer" key={i}>
                      <span className="badge"><Icon name="award" /></span>
                      <div>
                        <h3>{c.name}</h3>
                        <p>{c.issuer}</p>
                      </div>
                      <div className="meta">
                        <span>Issued {c.year}</span>
                        <span>View credential</span>
                      </div>
                    </a>
                  )
                ))}
              </div>
            </Section>

            <Section id="stack" title={"MY TECH\nSTACK"}>
              <div className="grid stack-grid">
                {stackIcons.map(({ name, label }, i) => {
                  const Cmp = Icons[name];
                  return (
                    <div className="stack-item fx-item" style={{"--d": `${i * 50}ms`}} key={name}>
                      <span className="stack-badge">
                        {Cmp && <Cmp className="stack-logo" />}
                      </span>
                      <span className="tool-text">
                        <b>{label}</b>
                      </span>
                    </div>
                  );
                })}
              </div>
            </Section>

            <Section id="experience" title={"MY LEARNING\nJOURNEY"}>
              <div className="list">
                {experience.map((x, i) => (
                  <div className="item fx-item" style={{"--d": `${i * 80}ms`}} key={i}>
                    <div>
                      <h3>{x.title}</h3>
                      <p>{x.place}</p>
                    </div>
                    <span className="status">{x.status}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="tools" title={"TOOLS\nTHAT I USE"}>
              <div className="grid">
                {tools.map((t, i) => (
                  <div className="tool fx-item" style={{"--d": `${i * 50}ms`}} key={t.name}>
                    {t.logo && (
                      <span className="tool-badge">
                        <img className="tool-logo" src={t.logo} alt="" />
                      </span>
                    )}
                    <span className="tool-text">
                      <b>{t.name}</b>
                      {t.subtitle && <small>{t.subtitle}</small>}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="contact" title={"LET'S WORK\nTOGETHER"} className="contact">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" aria-label="Name" />
                <input type="email" placeholder="Email" aria-label="Email" />
                <textarea placeholder="Message" aria-label="Message" />
                <button className="send" type="submit">Send message</button>
              </form>
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
} 
import Image from "next/image";
import type { ReactNode } from "react";

const PROFILE = {
  name: "Priya Khatik",
  role: "Data Analytics Engineer",
  location: "Tampa, FL",
  email: "priakhatik@gmail.com",
  github: "https://github.com/priakhatik",
  linkedin: "https://linkedin.com/in/priyakhatik",
  instagram: "https://www.instagram.com/priaapriv/",
  photo: "/priya.jpg",
};

const WORK = [
  {
    title: "Streaming Analytics Data Platform",
    subtitle: "Netflix-style batch analytics pipeline",
    desc: "Ingest → transform → dimensional model → analytics-ready marts. Built for scalability, quality checks, and BI consumption.",
    tech: ["AWS S3", "Databricks (PySpark)", "Snowflake", "dbt", "Airflow", "SQL"],
    link: "",
  },
  {
    title: "Fleet Maintenance Intelligence Dashboard",
    subtitle: "Government fleet KPI + utilization insights",
    desc: "Analytics + dashboards for maintenance KPIs, utilization, and operational reporting to support decision-making.",
    tech: ["SQL", "Power BI", "Excel", "Data Modeling"],
    link: "",
  },
  {
    title: "Vehicle Battery Performance Analytics",
    subtitle: "Telemetry + maintenance patterns",
    desc: "Modeled telemetry + service records to surface failure patterns and maintenance optimization opportunities.",
    tech: ["SQL", "Python", "Star Schema", "OLAP Queries"],
    link: "",
  },
];

const EXPERIENCE = [
  {
    role: "Data Analyst Intern",
    company: "Sarasota County Government",
    dates: "May 2025 – Present",
    bullets: [
      "Analyze fleet operations for 1,000+ vehicles and support multi-year replacement planning with budget + utilization insights.",
      "Improve reporting accuracy via data cleaning/modeling and automated validation workflows (Python + SQL).",
      "Build Power BI dashboards for utilization and maintenance KPIs to increase visibility and speed up decision-making.",
    ],
  },
  {
    role: "Data Analytics Engineer",
    company: "Accenture (Vodafone UK)",
    dates: "Nov 2019 – Jul 2024",
    bullets: [
      "Built and maintained analytics datasets and pipelines using Python + SQL across cloud data platforms.",
      "Designed dimensional models (Star/Snowflake) to standardize reporting layers and improve query performance.",
      "Implemented data quality checks and validation frameworks to improve consistency and reduce downstream issues.",
    ],
  },
];

const SKILL_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Programming & Scripting",
    items: ["Python", "SQL", "PySpark", "Bash"],
  },
  {
    title: "Data Engineering & Analytics",
    items: [
      "Data Ingestion",
      "Data Cleaning",
      "ETL / ELT",
      "Data Validation",
      "Data Quality",
      "Data Modeling (Star/Snowflake)",
      "OLTP",
      "OLAP",
      "Data Warehousing",
      "Data Governance",
      "Data Visualization",
    ],
  },
  {
    title: "Cloud & Big Data",
    items: ["AWS", "Azure", "GCP", "Databricks", "Snowflake", "Apache Spark", "Apache Flink", "Kafka"],
  },
  {
    title: "Databases & Storage",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DuckDB", "BigQuery", "Redshift"],
  },
  {
    title: "Orchestration & Analytics Engineering",
    items: ["Airflow", "Prefect", "dbt"],
  },
  {
    title: "Tools & BI",
    items: ["Power BI", "Tableau", "Docker", "Kubernetes", "Terraform", "Jenkins", "Postman", "Git", "VS Code"],
  },
];

function Icon({ name }: { name: "home" | "work" | "exp" | "skills" | "mail" }) {
  const cls = "h-5 w-5";
  if (name === "home")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (name === "work")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      </svg>
    );
  if (name === "exp")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path d="M7 4h10v4H7V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 8h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      </svg>
    );
  if (name === "skills")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.3 3.9 4.5 1-3.1 3.4.5 4.6L12 13.5 7.8 15l.5-4.6L5.2 6.9l4.5-1L12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M6 22h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      </svg>
    );
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 7.5 12 13l8-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

function Card({ title, subtitle, children }: { title?: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="card card-pad">
      {(title || subtitle) && (
        <div className="mb-5">
          {title && <div className="text-sm font-semibold text-white">{title}</div>}
          {subtitle && <div className="mt-1 text-xs text-white/60">{subtitle}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>;
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a className="social-ico" href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen text-white">
      <div className="bg-dots" />
      <div className="bg-vignette" />

      {/* Left dock */}
      <aside className="dock">
        <a className="dock-btn" href="#top" title="Home" aria-label="Home">
          <Icon name="home" />
        </a>
        <a className="dock-btn" href="#work" title="Projects" aria-label="Projects">
          <Icon name="work" />
        </a>
        <a className="dock-btn" href="#experience" title="Experience" aria-label="Experience">
          <Icon name="exp" />
        </a>
        <a className="dock-btn" href="#skills" title="Skills" aria-label="Skills">
          <Icon name="skills" />
        </a>
        <a className="dock-btn" href="#contact" title="Contact" aria-label="Contact">
          <Icon name="mail" />
        </a>
      </aside>

      {/* Email pill */}
      <div className="fixed right-5 top-5 z-20 hidden md:block">
        <a className="pill" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
      </div>

      <main id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-14 md:pt-20">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="px-2 md:px-4 py-6 md:py-10">
            <div className="text-sm text-white/60">{PROFILE.location}</div>

            <h1 className="mt-6 text-6xl font-semibold tracking-tight md:text-7xl">
              Hello,
              <br />
              I’m <span className="text-white/80">Priya</span>
              <span className="text-white/40">.</span>
            </h1>

            <p className="mt-6 text-lg text-white/70">
              {PROFILE.role} building <span className="text-white">analytics-ready data products</span> across pipelines,
              models, and dashboards.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
                <Icon name="mail" />
                Email
              </a>
              <a className="btn btn-ghost" href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn-ghost" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Python", "SQL", "Databricks", "Snowflake", "dbt", "Airflow"].map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="card overflow-hidden">
            <div className="relative h-[520px] w-full md:h-[560px]">
              <Image src={PROFILE.photo} alt={PROFILE.name} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <div className="absolute left-6 bottom-6 right-6">
                <div className="open-pill">
                  <span className="open-dot" />
                  Open to opportunities
                </div>
                <div className="mt-4">
                  <div className="text-xl font-semibold">{PROFILE.name}</div>
                  <div className="muted">{PROFILE.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECOND ROW */}
        <section className="mt-8 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-8">
            <Card title="Philosophy">
              <p className="text-sm text-white/70 leading-7">
                I try to stay helpful, curious, and practical. I prefer simple, maintainable solutions over unnecessary complexity,
                and I believe good work comes from clear communication, empathy, and consistency.
              </p>
            </Card>

            {/* Connect */}
            <div className="card card-pad">
              <div className="flex items-start justify-between">
                <div className="globe-box" aria-hidden="true">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6" opacity=".7" />
                    <path d="M12 2c3 3 3 17 0 20" stroke="currentColor" strokeWidth="1.6" opacity=".7" />
                    <path d="M12 2c-3 3-3 17 0 20" stroke="currentColor" strokeWidth="1.6" opacity=".7" />
                  </svg>
                </div>
                <a href="#contact" className="arrow-box" aria-label="Go to contact" title="Contact">
                  ↗
                </a>
              </div>

              <div className="mt-6 text-2xl font-semibold">Connect</div>

              <div className="mt-5 flex items-center gap-6">
                <SocialIcon href={PROFILE.github} label="GitHub">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5A11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 .1 2.7 1.9 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-6A4.7 4.7 0 0 1 7 7.3a4.3 4.3 0 0 1 .1-3.1s1-.3 3.2 1.2a11 11 0 0 1 5.9 0C18.4 3.9 19.4 4.2 19.4 4.2a4.3 4.3 0 0 1 .1 3.1 4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
                  </svg>
                </SocialIcon>

                <SocialIcon href={PROFILE.linkedin} label="LinkedIn">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.7V21h-4v-5.4c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21h-4V9Z" />
                  </svg>
                </SocialIcon>

                <SocialIcon href={PROFILE.instagram} label="Instagram">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path d="M12 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </SocialIcon>
              </div>

              <div className="mt-5 text-sm text-white/60">{PROFILE.email}</div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <Card title="Experience">
                <div className="text-4xl font-semibold">4+</div>
                <div className="muted mt-1 text-sm">years</div>
              </Card>
              <Card title="Projects">
                <div className="text-4xl font-semibold">10+</div>
                <div className="muted mt-1 text-sm">portfolio projects</div>
              </Card>
            </div>
          </div>

          <Card title="About">
            <p className="text-sm text-white/70 leading-7">
              I build end-to-end analytics systems from ingestion and transformation to dimensional modeling and BI-ready
              reporting—focused on accuracy, performance, and clear decision-making. I like work where the output is
              actually used: pipelines that run reliably, models that stay consistent, and dashboards that answer the real
              questions stakeholders ask every week. I care a lot about the details that make analytics easier to maintain—naming conventions, documentation, sensible tests, and repeatable
              workflows—because that's what keeps a data platform usable when it grows.
              <br />
              <br />
              I also enjoy collaborating with product and business teams to translate ambiguous asks into clear metrics,
              measurable outputs, and practical deliverables. If something is slow or confusing, I’m usually the person
              who wants to simplify it, make it observable, and ensure the next person can understand it without reading
              minds (or 47 Slack threads).
              <br />
              <br />
              Outside of work, I enjoy chess, traveling, bowling, and the occasional Netflix binge. I also like keeping up
              with GenAI trends and testing what’s genuinely useful.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>ETL / ELT</Chip>
              <Chip>Dimensional Modeling</Chip>
              <Chip>Data Quality</Chip>
              <Chip>Governance</Chip>
              <Chip>BI</Chip>
            </div>
          </Card>
        </section>

        {/* WORK */}
        <div id="work" className="section-title">
          Selected work
        </div>
        <section className="grid gap-8 md:grid-cols-2">
          {WORK.map((p) => (
            <div key={p.title} className="card card-pad">
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="muted mt-1">{p.subtitle}</div>
              <p className="mt-4 text-sm text-white/70 leading-7">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* EXPERIENCE */}
        <div id="experience" className="section-title">
          Experience
        </div>
        <section className="grid gap-8">
          {EXPERIENCE.map((e) => (
            <div key={e.company + e.role} className="card card-pad">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-lg font-semibold">{e.role}</div>
                  <div className="muted">{e.company}</div>
                </div>
                <div className="muted">{e.dates}</div>
              </div>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-white/70">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* SKILLS (Grouped like the reference) */}
        <div id="skills" className="section-title">
          Skills
        </div>
        <section className="card card-pad">
          <div className="grid gap-6">
            {SKILL_GROUPS.map((g) => (
              <div key={g.title}>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">{g.title}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <div id="contact" className="section-title">
          Contact
        </div>
        <section className="card card-pad">
          <p className="text-sm text-white/70 leading-7">
            If you’re hiring for data engineering / analytics engineering roles, I’d love to connect.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a className="btn btn-primary w-full justify-center" href={`mailto:${PROFILE.email}`}>
              <Icon name="mail" />
              Email
            </a>
            <a className="btn btn-ghost w-full justify-center" href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn-ghost w-full justify-center" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="mt-4 text-sm text-white/60">{PROFILE.email}</div>
        </section>

        <footer className="mt-14 text-xs text-white/45">© {new Date().getFullYear()} {PROFILE.name}</footer>
      </main>
    </div>
  );
}
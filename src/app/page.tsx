"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import {
  Button,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Counter,
  PortfolioCard,
} from "@/components/ui";

// Company Data
const companies = [
  {
    id: "wertvoll",
    name: "Wertvoll Dienstleistungen GmbH",
    description: "Professionelle Entrümpelungen und Haushaltsauflösungen sowie umfassender Gartenservice für Privat- und Gewerbekunden.",
    brands: ["rümpel-schmiede.de", "wertvoll-gartenservice.de"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    href: "/unternehmen/wertvoll",
  },
  {
    id: "qanna",
    name: "Qanna GmbH",
    description: "Strategische Unternehmensberatung mit Fokus auf KI-gestützte Lösungen, Restrukturierung und Finanzierungsberatung.",
    brands: ["qanna-consulting.com", "effiprozess.de"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: "/unternehmen/qanna-gmbh",
  },
  {
    id: "eckstein",
    name: "Eckstein GmbH",
    description: "Spezialisiert auf Schadstoffsanierung, Asbestentsorgung, KMF-Entsorgung und professionellen Rückbau.",
    brands: ["rueckbaupro.de"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    href: "/unternehmen/eckstein",
  },
  {
    id: "ai-effizienz",
    name: "AI Effizienz GmbH",
    description: "KI-gestützte Prozessoptimierung und digitale Transformation für mittelständische Unternehmen. Gründung 2026.",
    brands: ["effiprozess.de"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: "/unternehmen/ai-effizienz",
    upcoming: true,
  },
];

// Team Data
const team = [
  {
    name: "Sergej Schulz",
    company: "Qanna GmbH",
    image: "/images/team/sergej-schulz.jpg",
  },
  {
    name: "Markus Knaub",
    company: "Eckstein GmbH",
    image: "/images/team/markus-knaub.jpg",
  },
  {
    name: "Andreas Sudermann",
    company: "Qanna Holding GmbH",
    image: "/images/team/andreas-sudermann.jpg",
  },
  {
    name: "Michael Michalowski",
    company: "Wertvoll GmbH",
    image: "/images/team/michael-michalowski.jpg",
  },
];

// Stats
const stats = [
  { value: 4, suffix: "", label: "Gesellschaften" },
  { value: 5, suffix: "", label: "Geschäftsfelder" },
  { value: 4, suffix: "", label: "Marken" },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-navy-gradient overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container-qanna relative z-10 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn delay={0.1}>
                <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-6">
                  HOLDING
                </span>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Qanna Holding GmbH
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                  Unternehmerische Vielfalt unter einem Dach
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <blockquote className="text-lg md:text-xl text-qanna-gold italic mb-10 max-w-2xl mx-auto">
                  &ldquo;Wo keine Beratung ist, da scheitern Pläne, wo aber viele Ratgeber sind, da kommen sie zustande.&rdquo;
                  <footer className="text-white/60 text-base mt-2 not-italic">
                    — Sprüche 15:22
                  </footer>
                </blockquote>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gold" size="lg">
                    <Link href="/unternehmen">Unsere Unternehmen</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-qanna-navy"
                  >
                    <Link href="/kontakt">Kontakt</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="section-padding bg-qanna-gray-50">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
                  Unser Portfolio
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Vier Unternehmen, ein gemeinsames Ziel: Exzellenz in jedem Bereich.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companies.map((company) => (
                <StaggerItem key={company.id}>
                  <PortfolioCard
                    id={company.id}
                    name={company.name}
                    description={company.description}
                    brands={company.brands}
                    href={company.href}
                    upcoming={company.upcoming}
                    logo={company.icon}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-qanna-navy">
          <div className="container-qanna">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-qanna-gold mb-2">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-white/80 text-sm md:text-base">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="section-padding bg-qanna-gray-50">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
                  Die Gesellschafter
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Erfahrene Unternehmer mit gemeinsamer Vision.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <StaggerItem key={member.name}>
                  <Card variant="elevated" padding="lg" className="text-center h-full">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-qanna-navy/10 flex items-center justify-center">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-qanna-navy">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-qanna-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-qanna-gold font-medium text-sm mb-1">
                      Geschäftsführer
                    </p>
                    <p className="text-qanna-gray-500 text-sm">
                      {member.company}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="text-center mt-10">
                <Button variant="outline" size="lg">
                  <Link href="/team">Mehr über das Team</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-gradient">
          <div className="container-qanna">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Gemeinsam wachsen
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Sie haben Fragen zu unseren Unternehmen oder möchten mehr über
                  Kooperationsmöglichkeiten erfahren? Wir freuen uns auf Ihre Nachricht.
                </p>
                <Button variant="gold" size="lg">
                  <Link href="/kontakt">Kontakt aufnehmen</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

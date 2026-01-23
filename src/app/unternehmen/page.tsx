"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Card, Button, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui";

// Company Data
const companies = [
  {
    id: "wertvoll",
    name: "Wertvoll Dienstleistungen GmbH",
    tagline: "Professionelle Entrümpelung & Gartenservice",
    description: "Die Wertvoll Dienstleistungen GmbH bietet professionelle Entrümpelungen, Haushaltsauflösungen und umfassenden Gartenservice für Privat- und Gewerbekunden in der Region Ostwestfalen-Lippe.",
    brands: [
      { name: "Rümpel Schmiede", url: "https://rümpel-schmiede.de" },
      { name: "Wertvoll Gartenservice", url: "https://wertvoll-gartenservice.de" },
    ],
    stats: [
      { label: "Umsatz 2025", value: "720k+" },
      { label: "Mitarbeiter", value: "11+" },
    ],
    gf: "Michael Michalowski",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    href: "/unternehmen/wertvoll",
    color: "green",
  },
  {
    id: "qanna-gmbh",
    name: "Qanna GmbH",
    tagline: "Unternehmensberatung & KI-Lösungen",
    description: "Strategische Unternehmensberatung mit Fokus auf KI-gestützte Lösungen, Unternehmensnachfolge, Restrukturierung und Finanzierungsberatung für den Mittelstand.",
    brands: [
      { name: "QANNA Consulting", url: "https://qanna-consulting.com" },
    ],
    stats: [
      { label: "Branchen", value: "10+" },
      { label: "Projekte", value: "50+" },
    ],
    gf: "Sergej Schulz, Markus Knaub",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: "/unternehmen/qanna-gmbh",
    color: "navy",
  },
  {
    id: "eckstein",
    name: "Eckstein GmbH",
    tagline: "Schadstoffsanierung & Rückbau",
    description: "Spezialisiert auf professionelle Schadstoffsanierung, Asbestentsorgung, KMF-Entsorgung, Schimmelsanierung und fachgerechten Rückbau. Nr. 1 bei Google in Bielefeld.",
    brands: [
      { name: "RückbauPro", url: "https://rueckbaupro.de" },
    ],
    stats: [
      { label: "Google Ranking", value: "#1" },
      { label: "Region", value: "OWL" },
    ],
    gf: "Andreas Sudermann, Markus Knaub",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    href: "/unternehmen/eckstein",
    color: "burgundy",
  },
  {
    id: "ai-effizienz",
    name: "AI Effizienz GmbH",
    tagline: "KI-Prozessoptimierung (Gründung 2026)",
    description: "KI-gestützte Prozessoptimierung und digitale Transformation für mittelständische Unternehmen. Fokus auf Marketing-Automatisierung, Website-Entwicklung und operative Effizienzsteigerung.",
    brands: [
      { name: "Effiprozess", url: "https://effiprozess.de" },
    ],
    stats: [
      { label: "Gründung", value: "2026" },
      { label: "Status", value: "Planung" },
    ],
    gf: "Sergej Schulz, S. Scherlies",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: "/unternehmen/ai-effizienz",
    color: "gold",
    upcoming: true,
  },
];

export default function UnternehmenPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-navy-gradient overflow-hidden">
          <div className="container-qanna relative z-10">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-6">
                  PORTFOLIO
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Unsere Unternehmen
                </h1>
                <p className="text-xl text-white/80">
                  Vier Gesellschaften mit unterschiedlichen Schwerpunkten, vereint
                  durch den Anspruch an Qualität und nachhaltiges Wachstum.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <StaggerContainer className="space-y-12">
              {companies.map((company, index) => (
                <StaggerItem key={company.id}>
                  <Card
                    variant="default"
                    padding="none"
                    className={`overflow-hidden ${company.upcoming ? "border-dashed border-2" : ""}`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      {/* Left Column - Info */}
                      <div className="p-8 lg:p-10 lg:col-span-2">
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`p-4 rounded-xl ${company.upcoming ? "bg-qanna-gray-100 text-qanna-gray-400" : "bg-qanna-navy/10 text-qanna-navy"}`}>
                            {company.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h2 className="text-2xl font-bold text-qanna-navy">
                                {company.name}
                              </h2>
                              {company.upcoming && (
                                <span className="text-xs bg-qanna-gold/20 text-qanna-gold px-2 py-1 rounded-full">
                                  2026
                                </span>
                              )}
                            </div>
                            <p className="text-qanna-gold font-medium">
                              {company.tagline}
                            </p>
                          </div>
                        </div>

                        <p className="text-qanna-gray-500 mb-6 leading-relaxed">
                          {company.description}
                        </p>

                        {/* Brands */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-qanna-gray-400 uppercase mb-3">
                            Marken & Websites
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {company.brands.map((brand) => (
                              <a
                                key={brand.name}
                                href={brand.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-qanna-gray-100 hover:bg-qanna-gray-200 rounded-lg transition-colors"
                              >
                                <span className="text-sm font-medium text-qanna-navy">
                                  {brand.name}
                                </span>
                                <svg className="w-4 h-4 text-qanna-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Geschäftsführung */}
                        <p className="text-sm text-qanna-gray-500">
                          <span className="font-semibold">Geschäftsführung:</span> {company.gf}
                        </p>

                        <div className="mt-8">
                          <Button variant="outline" size="md">
                            <Link href={company.href}>Mehr erfahren</Link>
                          </Button>
                        </div>
                      </div>

                      {/* Right Column - Stats */}
                      <div className="bg-qanna-gray-50 p-8 lg:p-10 flex flex-col justify-center">
                        <h4 className="text-sm font-semibold text-qanna-gray-400 uppercase mb-6">
                          Kennzahlen
                        </h4>
                        <div className="space-y-6">
                          {company.stats.map((stat) => (
                            <div key={stat.label}>
                              <div className="text-3xl font-bold text-qanna-navy mb-1">
                                {stat.value}
                              </div>
                              <div className="text-sm text-qanna-gray-500">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-qanna-gray-50">
          <div className="container-qanna">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-6">
                  Interesse an einer Zusammenarbeit?
                </h2>
                <p className="text-lg text-qanna-gray-500 mb-8">
                  Erfahren Sie mehr über unsere Unternehmen oder kontaktieren Sie
                  uns direkt für eine unverbindliche Anfrage.
                </p>
                <Button variant="primary" size="lg">
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

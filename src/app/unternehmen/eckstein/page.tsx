"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Card, Button, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui";

const services = [
  {
    title: "Asbestsanierung",
    description: "Fachgerechte Entfernung und Entsorgung von Asbest nach TRGS 519.",
  },
  {
    title: "KMF-Entsorgung",
    description: "Sichere Demontage und Entsorgung von Künstlichen Mineralfasern.",
  },
  {
    title: "Schimmelsanierung",
    description: "Professionelle Schimmelbeseitigung und Ursachenbekämpfung.",
  },
  {
    title: "Entkernung",
    description: "Komplette Entkernung von Gebäuden vor Sanierung oder Abriss.",
  },
  {
    title: "PAK-Sanierung",
    description: "Entfernung von polyzyklischen aromatischen Kohlenwasserstoffen.",
  },
  {
    title: "Rückbau",
    description: "Fachgerechter Rückbau von Gebäuden und Gebäudeteilen.",
  },
];

const certifications = [
  "TRGS 519 (Asbest)",
  "TRGS 521 (KMF)",
  "BGR 128",
  "Entsorgungsfachbetrieb",
];

export default function EcksteinPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-navy-gradient overflow-hidden">
          <div className="container-qanna relative z-10">
            <FadeIn>
              <div className="max-w-3xl">
                <Link
                  href="/unternehmen"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Zurück zur Übersicht
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Eckstein GmbH
                </h1>
                <p className="text-xl text-qanna-gold mb-6">
                  Schadstoffsanierung & Rückbau
                </p>
                <p className="text-lg text-white/80">
                  Spezialisiert auf professionelle Schadstoffsanierung,
                  Asbestentsorgung, KMF-Entsorgung, Schimmelsanierung und
                  fachgerechten Rückbau in der Region Ostwestfalen-Lippe.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="py-12 bg-qanna-burgundy text-white">
          <div className="container-qanna">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <svg className="w-12 h-12 text-qanna-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    Nr. 1 bei Google in Bielefeld
                  </p>
                  <p className="text-white/80">
                    für Schadstoffsanierung und Asbestentsorgung
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Brand Section */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
                  RückbauPro
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto mb-8">
                  Unsere Marke für professionelle Schadstoffsanierung und Rückbau
                  in der Region OWL.
                </p>
                <a
                  href="https://rueckbaupro.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-qanna-navy text-white font-medium rounded-md hover:bg-qanna-navy-light transition-colors"
                >
                  rueckbaupro.de besuchen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-qanna-gray-50">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
                  Unsere Leistungen
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Professionelle Schadstoffsanierung nach höchsten Standards.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <Card variant="elevated" padding="lg" className="h-full">
                    <h3 className="text-lg font-bold text-qanna-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-qanna-gray-500 text-sm">
                      {service.description}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
                  Zertifizierungen
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Alle Arbeiten werden nach geltenden Vorschriften durchgeführt.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-6 py-3 bg-qanna-burgundy/10 text-qanna-burgundy rounded-lg font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Management Section */}
        <section className="section-padding bg-qanna-gray-50">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-qanna-navy mb-6">
                  Geschäftsführung
                </h2>
              </div>
            </FadeIn>

            <FadeIn>
              <Card variant="elevated" padding="lg" className="text-center max-w-sm mx-auto">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-qanna-navy/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-qanna-navy">MK</span>
                </div>
                <h3 className="text-xl font-bold text-qanna-navy mb-1">
                  Markus Knaub
                </h3>
                <p className="text-qanna-gold font-medium mb-4">
                  Geschäftsführer
                </p>
                <p className="text-qanna-gray-500 text-sm">
                  Strategie & Finanzen
                </p>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-gradient">
          <div className="container-qanna">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Kostenloses Angebot anfordern
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Kontaktieren Sie uns für eine unverbindliche Beratung und
                  Besichtigung vor Ort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://rueckbaupro.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-qanna-gold text-white font-semibold rounded-md hover:bg-qanna-gold-dark transition-colors"
                  >
                    Zu RückbauPro
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-qanna-navy"
                  >
                    <Link href="/kontakt">Kontakt zur Holding</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

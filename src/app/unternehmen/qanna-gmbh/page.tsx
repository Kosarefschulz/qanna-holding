"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Card, Button, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui";

const services = [
  {
    title: "Unternehmensnachfolge",
    description: "Erfolgreiche Übergabe mit Expertise in M&A und Due Diligence.",
  },
  {
    title: "Restrukturierung",
    description: "Neuausrichtung für nachhaltigen Erfolg und Krisenbewältigung.",
  },
  {
    title: "Finanzierungsberatung",
    description: "Optimale Finanzierungslösungen und Kapitalstrukturierung.",
  },
  {
    title: "Effizienzoptimierung",
    description: "Prozesse verbessern, Kosten senken, Produktivität steigern.",
  },
  {
    title: "KI-Beratung",
    description: "Künstliche Intelligenz strategisch nutzen und implementieren.",
  },
  {
    title: "Interim Management",
    description: "Erfahrene Manager für Übergangsphasen und Projekte.",
  },
];

const clients = [
  "Approno",
  "Hagedorn Unternehmensgruppe",
  "Schüttflix",
  "Innoplex",
];

const industries = [
  "Industrie",
  "Handel",
  "Technologie",
  "Gesundheitswesen",
  "Immobilien",
  "Energie",
  "Finanzdienstleistungen",
  "Logistik",
  "Konsumgüter",
  "Infrastruktur",
];

export default function QannaGmbHPage() {
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
                  Qanna GmbH
                </h1>
                <p className="text-xl text-qanna-gold mb-6">
                  Unternehmensberatung & KI-Lösungen
                </p>
                <p className="text-lg text-white/80">
                  Strategische Unternehmensberatung mit Fokus auf KI-gestützte
                  Lösungen, Unternehmensnachfolge, Restrukturierung und
                  Finanzierungsberatung für den Mittelstand.
                </p>
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
                  QANNA Consulting
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto mb-8">
                  Unsere Beratungsmarke für strategische Unternehmensberatung und
                  KI-gestützte Lösungen.
                </p>
                <a
                  href="https://qanna-consulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-qanna-navy text-white font-medium rounded-md hover:bg-qanna-navy-light transition-colors"
                >
                  qanna-consulting.com besuchen
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
                  Umfassende Beratungsleistungen für den Mittelstand.
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

        {/* Industries Section */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
                  Branchen
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Wir beraten Unternehmen aus verschiedenen Branchen.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-4 py-2 bg-qanna-navy/10 text-qanna-navy rounded-full text-sm font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Clients Section */}
        <section className="section-padding bg-qanna-gray-50">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
                  Ausgewählte Kunden
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Wir arbeiten mit führenden Unternehmen zusammen.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.map((client) => (
                <StaggerItem key={client}>
                  <Card variant="default" padding="lg" className="text-center">
                    <p className="font-bold text-qanna-navy">{client}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Management Section */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-qanna-navy mb-6">
                  Geschäftsführung
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <StaggerItem>
                <Card variant="elevated" padding="lg" className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-qanna-navy/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-qanna-navy">SS</span>
                  </div>
                  <h3 className="text-xl font-bold text-qanna-navy mb-1">
                    Sergej Schulz
                  </h3>
                  <p className="text-qanna-gold font-medium mb-4">
                    Geschäftsführer
                  </p>
                  <p className="text-qanna-gray-500 text-sm">
                    Marketing, IT & Digitalisierung
                  </p>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card variant="elevated" padding="lg" className="text-center">
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
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-gradient">
          <div className="container-qanna">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Beratungsgespräch vereinbaren
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://qanna-consulting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-qanna-gold text-white font-semibold rounded-md hover:bg-qanna-gold-dark transition-colors"
                  >
                    Zu QANNA Consulting
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

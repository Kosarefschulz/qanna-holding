"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Card, Button, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui";

const plannedServices = [
  {
    title: "KI-Prozessoptimierung",
    description: "Automatisierung und Optimierung von Geschäftsprozessen durch KI.",
  },
  {
    title: "Marketing-Automatisierung",
    description: "KI-gestützte Marketing-Strategien und Content-Erstellung.",
  },
  {
    title: "Website-Entwicklung",
    description: "Moderne Websites mit KI-Integration und Automatisierung.",
  },
  {
    title: "Datenanalyse",
    description: "KI-basierte Auswertung und Visualisierung von Unternehmensdaten.",
  },
  {
    title: "Chatbot-Entwicklung",
    description: "Intelligente Chatbots für Kundenservice und Vertrieb.",
  },
  {
    title: "Digitale Transformation",
    description: "Ganzheitliche Begleitung bei der Digitalisierung.",
  },
];

export default function AIEffizienzPage() {
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
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    AI Effizienz GmbH
                  </h1>
                  <span className="px-3 py-1 bg-qanna-gold text-white text-sm font-semibold rounded-full">
                    2026
                  </span>
                </div>
                <p className="text-xl text-qanna-gold mb-6">
                  KI-gestützte Prozessoptimierung
                </p>
                <p className="text-lg text-white/80">
                  KI-gestützte Prozessoptimierung und digitale Transformation für
                  mittelständische Unternehmen. Fokus auf Marketing-Automatisierung,
                  Website-Entwicklung und operative Effizienzsteigerung.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Status Section */}
        <section className="py-12 bg-qanna-gold text-white">
          <div className="container-qanna">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    Geplante Gründung: 2026
                  </p>
                  <p className="text-white/80">
                    Aktuell in der Planungs- und Konzeptphase
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
                  Effiprozess
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto mb-8">
                  Unsere geplante Marke für KI-gestützte Prozessoptimierung im
                  Mittelstand.
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-qanna-gray-100 text-qanna-gray-500 rounded-md">
                  effiprozess.de
                  <span className="text-xs bg-qanna-gold/20 text-qanna-gold px-2 py-1 rounded">
                    Coming Soon
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Planned Services Section */}
        <section className="section-padding bg-qanna-gray-50">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
                  Geplante Leistungen
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Diese Services sind für den Launch 2026 geplant.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plannedServices.map((service) => (
                <StaggerItem key={service.title}>
                  <Card variant="default" padding="lg" className="h-full border-dashed border-2">
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

        {/* Vision Section */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-6">
                  Unsere Vision
                </h2>
                <p className="text-lg text-qanna-gray-500 mb-8 leading-relaxed">
                  AI Effizienz wird mittelständischen Unternehmen helfen, die
                  Potenziale künstlicher Intelligenz voll auszuschöpfen. Durch
                  praxisnahe Lösungen und individuelle Beratung machen wir KI
                  für jeden zugänglich.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-qanna-gold/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-qanna-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-qanna-navy mb-2">Effizienz</h3>
                    <p className="text-sm text-qanna-gray-500">
                      Prozesse automatisieren und Zeit sparen
                    </p>
                  </div>
                  <div>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-qanna-gold/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-qanna-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-qanna-navy mb-2">Innovation</h3>
                    <p className="text-sm text-qanna-gray-500">
                      Modernste KI-Technologien nutzen
                    </p>
                  </div>
                  <div>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-qanna-gold/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-qanna-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-qanna-navy mb-2">Partnerschaft</h3>
                    <p className="text-sm text-qanna-gray-500">
                      Gemeinsam zum Erfolg
                    </p>
                  </div>
                </div>
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
                  Geplante Geschäftsführung
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
                    Geschäftsführer (geplant)
                  </p>
                  <p className="text-qanna-gray-500 text-sm">
                    KI-Strategie & Digitalisierung
                  </p>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card variant="elevated" padding="lg" className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-qanna-navy/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-qanna-navy">SS</span>
                  </div>
                  <h3 className="text-xl font-bold text-qanna-navy mb-1">
                    S. Scherlies
                  </h3>
                  <p className="text-qanna-gold font-medium mb-4">
                    Geschäftsführer (geplant)
                  </p>
                  <p className="text-qanna-gray-500 text-sm">
                    Technologie & Entwicklung
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
                  Interesse an einer Zusammenarbeit?
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Auch wenn die Gründung erst 2026 erfolgt, freuen wir uns über
                  Ihr Interesse. Kontaktieren Sie uns für weitere Informationen.
                </p>
                <Button
                  variant="gold"
                  size="lg"
                >
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

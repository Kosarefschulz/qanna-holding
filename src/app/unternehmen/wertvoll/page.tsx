"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Card, Button, FadeIn, StaggerContainer, StaggerItem, Counter, TeamGallery } from "@/components/ui";

const services = [
  {
    title: "Entrümpelung",
    description: "Professionelle Entrümpelung von Wohnungen, Häusern, Kellern und Dachböden.",
  },
  {
    title: "Haushaltsauflösung",
    description: "Komplette Haushaltsauflösungen mit Wertermittlung und fachgerechter Entsorgung.",
  },
  {
    title: "Gartenservice",
    description: "Gartenpflege, Heckenschnitt, Rasenpflege und saisonale Gartenarbeiten.",
  },
  {
    title: "Winterdienst",
    description: "Zuverlässiger Winterdienst für Privat- und Gewerbekunden.",
  },
  {
    title: "Transportservice",
    description: "Umzüge und Transporte aller Art.",
  },
  {
    title: "Sperrmüllentsorgung",
    description: "Fachgerechte Entsorgung von Sperrmüll und Altmöbeln.",
  },
];

const stats = [
  { value: 7, suffix: "+", label: "Jahre Erfahrung" },
  { value: 2, suffix: "", label: "Starke Marken" },
  { value: 1000, suffix: "+", label: "Zufriedene Kunden" },
  { value: 1, suffix: "", label: "Region: OWL" },
];

// Team Gallery Images
const teamImages = [
  {
    src: "/images/team/wertvoll-team-group.jpg",
    alt: "Das gesamte Wertvoll Team",
    caption: "Unser starkes Team - gemeinsam für Sie im Einsatz",
  },
  {
    src: "/images/team/wertvoll-team-walking.jpg",
    alt: "Wertvoll Team bei der Arbeit",
    caption: "Professionell und zuverlässig - jeden Tag",
  },
  {
    src: "/images/team/michael-michalowski-wertvoll.jpg",
    alt: "Michael Michalowski - Geschäftsführer",
    caption: "Michael Michalowski - Geschäftsführer",
  },
  {
    src: "/images/team/markus-knaub-wertvoll.jpg",
    alt: "Markus Knaub - Geschäftsführer",
    caption: "Markus Knaub - Geschäftsführer",
  },
  {
    src: "/images/companies/wertvoll-team.jpg",
    alt: "Wertvoll Dienstleistungen Team",
    caption: "Erfahrung trifft auf Engagement",
  },
];

export default function WertvollPage() {
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
                  Wertvoll Dienstleistungen GmbH
                </h1>
                <p className="text-xl text-qanna-gold mb-6">
                  Professionelle Entrümpelung & Gartenservice
                </p>
                <p className="text-lg text-white/80">
                  Die Wertvoll Dienstleistungen GmbH bietet professionelle
                  Entrümpelungen, Haushaltsauflösungen und umfassenden Gartenservice
                  für Privat- und Gewerbekunden in der Region Ostwestfalen-Lippe.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-qanna-green text-white">
          <div className="container-qanna">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
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

        {/* Brands Section */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
                  Unsere Marken
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Zwei starke Marken für unterschiedliche Dienstleistungsbereiche.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggerItem>
                <Card variant="elevated" padding="lg" className="h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-16 flex items-center justify-center">
                      <img
                        src="/images/logos/ruempelschmiede.png"
                        alt="Rümpel Schmiede Logo"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-qanna-navy">
                        Rümpel Schmiede
                      </h3>
                      <p className="text-qanna-gray-500">
                        Entrümpelung & Haushaltsauflösung
                      </p>
                    </div>
                  </div>
                  <p className="text-qanna-gray-500 mb-6">
                    Professionelle Entrümpelungen und Haushaltsauflösungen in
                    Ostwestfalen-Lippe. Schnell, zuverlässig und fair.
                  </p>
                  <a
                    href="https://ruempel-schmiede.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-qanna-navy hover:text-qanna-gold transition-colors font-medium"
                  >
                    ruempel-schmiede.de
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card variant="elevated" padding="lg" className="h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-16 flex items-center justify-center">
                      <img
                        src="/images/logos/wertvoll-gartenservice.png"
                        alt="Wertvoll Gartenservice Logo"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-qanna-navy">
                        Wertvoll Gartenservice
                      </h3>
                      <p className="text-qanna-gray-500">
                        Gartenpflege & Winterdienst
                      </p>
                    </div>
                  </div>
                  <p className="text-qanna-gray-500 mb-6">
                    Professioneller Gartenservice und zuverlässiger Winterdienst
                    für Privat- und Gewerbekunden.
                  </p>
                  <a
                    href="https://wertvoll-gartenservice.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-qanna-navy hover:text-qanna-gold transition-colors font-medium"
                  >
                    wertvoll-gartenservice.de
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </Card>
              </StaggerItem>
            </StaggerContainer>
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
                  Umfassende Dienstleistungen für Privat- und Gewerbekunden.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <Card variant="default" padding="lg" className="h-full">
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

        {/* Team Gallery Section */}
        <TeamGallery
          images={teamImages}
          title="Unser Team"
          subtitle="Lernen Sie die Menschen kennen, die täglich für Sie im Einsatz sind. Professionell, zuverlässig und mit Leidenschaft bei der Arbeit."
          autoPlayInterval={4500}
        />

        {/* Management Section */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-qanna-navy mb-4">
                  Geschäftsführung
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Erfahrene Unternehmer mit Leidenschaft für Qualität und Kundenzufriedenheit.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <StaggerItem>
                <Card variant="elevated" padding="lg" className="h-full text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-qanna-navy/10">
                    <img
                      src="/images/team/michael-michalowski-wertvoll.jpg"
                      alt="Michael Michalowski"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-qanna-navy mb-1">
                    Michael Michalowski
                  </h3>
                  <p className="text-qanna-gold font-medium mb-4">
                    Geschäftsführer
                  </p>
                  <p className="text-qanna-gray-500 text-sm leading-relaxed">
                    Mit über 7 Jahren Erfahrung in der Entrümpelungsbranche kennt Michael
                    jeden Aspekt des Geschäfts. Seine Hands-on-Mentalität und sein Gespür
                    für Kundenbedürfnisse haben die Wertvoll GmbH zu einem der führenden
                    Dienstleister in OWL gemacht.
                  </p>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card variant="elevated" padding="lg" className="h-full text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-qanna-navy/10">
                    <img
                      src="/images/team/markus-knaub-wertvoll.jpg"
                      alt="Markus Knaub"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-qanna-navy mb-1">
                    Markus Knaub
                  </h3>
                  <p className="text-qanna-gold font-medium mb-4">
                    Geschäftsführer
                  </p>
                  <p className="text-qanna-gray-500 text-sm leading-relaxed">
                    Markus bringt strategisches Denken und finanzielle Expertise in die
                    Geschäftsführung ein. Mit seinem Blick für Effizienz und nachhaltige
                    Prozesse sorgt er dafür, dass die Wertvoll GmbH kontinuierlich
                    wächst und dabei höchste Qualitätsstandards erfüllt.
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
                  Kostenlose Besichtigung anfragen
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Kontaktieren Sie uns für eine unverbindliche Beratung und ein
                  kostenloses Angebot.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://ruempel-schmiede.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-qanna-gold text-white font-semibold rounded-md hover:bg-qanna-gold-dark transition-colors"
                  >
                    Zur Rümpel Schmiede
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

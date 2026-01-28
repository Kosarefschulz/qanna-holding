"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Card, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui";

// Team Data with detailed stories
const teamMembers = [
  {
    id: "sergej-schulz",
    name: "Sergej Schulz",
    age: 33,
    company: "Qanna GmbH",
    focus: ["Digitalisierung", "KI-Strategie", "Marketing"],
    image: "/images/team/sergej-schulz.jpg",
    story: `Sergej ist spezialisiert auf die digitale Transformation und den Einsatz von KI-gestützten Lösungen in Unternehmen. Seine Stärken liegen in der Entwicklung innovativer Marketingstrategien und der technischen Umsetzung komplexer IT-Projekte.

Heute leitet er als Geschäftsführer die Qanna GmbH und bringt seine Expertise in Digitalisierung, KI-gestützte Prozessoptimierung und strategisches Marketing in die Holding ein.`,
    linkedin: "https://linkedin.com/in/sergejschulz",
  },
  {
    id: "markus-knaub",
    name: "Markus Knaub",
    company: "Eckstein GmbH",
    focus: ["M&A", "Controlling", "Unternehmensfinanzierung"],
    image: "/images/team/markus-knaub.jpg",
    story: `Markus bringt umfangreiche Erfahrung in der strategischen Unternehmensführung und Finanzplanung mit. Seine Expertise liegt in der Strukturierung komplexer Transaktionen und der Entwicklung nachhaltiger Finanzierungsstrategien.

Als Geschäftsführer der Eckstein GmbH verantwortet er die strategische Ausrichtung und finanzielle Steuerung des Unternehmens.`,
    linkedin: "https://linkedin.com",
  },
  {
    id: "andreas-sudermann",
    name: "Andreas Sudermann",
    company: "Qanna Holding GmbH",
    focus: ["Operative Exzellenz", "Qualitätssicherung", "Projektmanagement"],
    image: "/images/team/andreas-sudermann.jpg",
    story: `Nach einer Bankausbildung und BWL-Studium startete Andreas seine Karriere bei Ernst & Young. Es folgten 7 Jahre bei Bertelsmann/arvato im Bereich Finance & Controlling, bevor er als CFO zur Hagedorn Unternehmensgruppe wechselte, wo er 5 Jahre die Finanzstrategie mitgestaltete.

Als Geschäftsführer der Qanna Holding GmbH bringt er seine umfangreiche Erfahrung in Finanzen und Controlling in die strategische Führung der Unternehmensgruppe ein.`,
    linkedin: "https://linkedin.com",
  },
  {
    id: "michael-michalowski",
    name: "Michael Michalowski",
    company: "Wertvoll GmbH",
    focus: ["Kundenbeziehungen", "Geschäftsentwicklung", "Teamführung"],
    image: "/images/team/michael-michalowski.jpg",
    story: `Michael verfügt über 7 Jahre Erfahrung als Rümpel Meister Franchisenehmer und hat sich als erfolgreicher Unternehmer im Dienstleistungssektor etabliert. Seine Stärke liegt im Aufbau langfristiger Kundenbeziehungen und der Führung operativer Teams.

Als Geschäftsführer der Wertvoll GmbH verantwortet er die Marken Rümpel Schmiede und Wertvoll Gartenservice.`,
    linkedin: "https://linkedin.com",
  },
];

export default function TeamPage() {
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
                  GESELLSCHAFTER
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Die Menschen hinter der Holding
                </h1>
                <p className="text-xl text-white/80">
                  Vier erfahrene Unternehmer mit unterschiedlichen Stärken und
                  einer gemeinsamen Vision: nachhaltiges Wachstum durch Expertise
                  und Innovation.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Team Members */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <StaggerContainer className="space-y-16">
              {teamMembers.map((member, index) => (
                <StaggerItem key={member.id}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Profile Card */}
                    <Card variant="elevated" padding="lg" className="lg:sticky lg:top-24">
                      <div className="text-center">
                        <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-qanna-navy/10 flex items-center justify-center">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-3xl font-bold text-qanna-navy">
                              {member.name.split(" ").map(n => n[0]).join("")}
                            </span>
                          )}
                        </div>
                        <h2 className="text-2xl font-bold text-qanna-navy mb-1">
                          {member.name}
                        </h2>
                        {member.age && (
                          <p className="text-qanna-gray-400 text-sm mb-2">
                            {member.age} Jahre
                          </p>
                        )}
                        <p className="text-qanna-gold font-medium mb-1">
                          Geschäftsführer
                        </p>
                        <p className="text-qanna-gray-500 text-sm mb-6">
                          {member.company}
                        </p>

                        {/* Focus Areas */}
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          {member.focus.map((area) => (
                            <span
                              key={area}
                              className="text-xs bg-qanna-navy/10 text-qanna-navy px-3 py-1 rounded-full"
                            >
                              {area}
                            </span>
                          ))}
                        </div>

                        {/* LinkedIn */}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-qanna-navy hover:text-qanna-gold transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span className="text-sm">LinkedIn</span>
                          </a>
                        )}
                      </div>
                    </Card>

                    {/* Story */}
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold text-qanna-navy mb-4">
                        Werdegang
                      </h3>
                      <div className="prose prose-lg text-qanna-gray-500">
                        {member.story.split("\n\n").map((paragraph, i) => (
                          <p key={i} className="mb-4 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-qanna-gray-50">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
                  Unsere gemeinsamen Werte
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Diese Grundsätze verbinden uns als Gesellschafter und leiten
                  unser unternehmerisches Handeln.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <Card variant="elevated" padding="lg" className="h-full text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-qanna-gold/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-qanna-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-qanna-navy mb-4">
                    Vertrauen
                  </h3>
                  <p className="text-qanna-gray-500">
                    Gegenseitiges Vertrauen ist das Fundament unserer
                    Zusammenarbeit - intern wie extern.
                  </p>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card variant="elevated" padding="lg" className="h-full text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-qanna-gold/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-qanna-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-qanna-navy mb-4">
                    Innovation
                  </h3>
                  <p className="text-qanna-gray-500">
                    Wir denken voraus und nutzen moderne Technologien, um
                    nachhaltige Wettbewerbsvorteile zu schaffen.
                  </p>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card variant="elevated" padding="lg" className="h-full text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-qanna-gold/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-qanna-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-qanna-navy mb-4">
                    Partnerschaft
                  </h3>
                  <p className="text-qanna-gray-500">
                    Langfristige Partnerschaften mit Kunden, Mitarbeitern und
                    Geschäftspartnern sind unser Ziel.
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
                  Lernen Sie uns kennen
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Haben Sie Fragen oder möchten Sie mehr über unsere Arbeit
                  erfahren? Wir freuen uns auf den Austausch.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-block px-8 py-4 bg-qanna-gold text-white font-semibold rounded-md hover:bg-qanna-gold-dark transition-colors"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

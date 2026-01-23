"use client";

import { useState } from "react";
import { Header, Footer } from "@/components/layout";
import { Card, Button, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui";

const contactPersons = [
  {
    name: "Sergej Schulz",
    role: "Marketing & IT",
    email: "sergej.schulz@qanna-holding.de",
  },
  {
    name: "Markus Knaub",
    role: "Strategie & Finanzen",
    email: "markus.knaub@qanna-holding.de",
  },
  {
    name: "Andreas Sudermann",
    role: "Projektleitung",
    email: "andreas.sudermann@qanna-holding.de",
  },
  {
    name: "Michael Michalowski",
    role: "Vertrieb",
    email: "michael.michalowski@qanna-holding.de",
  },
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                  KONTAKT
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Sprechen Sie mit uns
                </h1>
                <p className="text-xl text-white/80">
                  Haben Sie Fragen zu unseren Unternehmen oder möchten mehr über
                  Kooperationsmöglichkeiten erfahren? Wir freuen uns auf Ihre
                  Nachricht.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <FadeIn>
                <Card variant="elevated" padding="lg">
                  <h2 className="text-2xl font-bold text-qanna-navy mb-6">
                    Kontaktformular
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-qanna-green/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-qanna-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-qanna-navy mb-2">
                        Vielen Dank!
                      </h3>
                      <p className="text-qanna-gray-500">
                        Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns
                        in Kürze bei Ihnen.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-qanna-navy mb-2"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-navy focus:border-transparent transition-all"
                            placeholder="Ihr Name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-qanna-navy mb-2"
                          >
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-navy focus:border-transparent transition-all"
                            placeholder="ihre@email.de"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-qanna-navy mb-2"
                        >
                          Unternehmen
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-navy focus:border-transparent transition-all"
                          placeholder="Ihr Unternehmen (optional)"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-qanna-navy mb-2"
                        >
                          Betreff *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-navy focus:border-transparent transition-all"
                        >
                          <option value="">Bitte wählen...</option>
                          <option value="general">Allgemeine Anfrage</option>
                          <option value="wertvoll">Wertvoll Dienstleistungen</option>
                          <option value="qanna">Qanna GmbH / Beratung</option>
                          <option value="eckstein">Eckstein / Schadstoffsanierung</option>
                          <option value="cooperation">Kooperation</option>
                          <option value="press">Presse</option>
                          <option value="other">Sonstiges</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-qanna-navy mb-2"
                        >
                          Nachricht *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-navy focus:border-transparent transition-all resize-none"
                          placeholder="Ihre Nachricht..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        isLoading={isSubmitting}
                      >
                        Nachricht senden
                      </Button>
                    </form>
                  )}
                </Card>
              </FadeIn>

              {/* Contact Info */}
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  {/* Address */}
                  <div>
                    <h3 className="text-xl font-bold text-qanna-navy mb-4">
                      Adresse
                    </h3>
                    <Card variant="gray" padding="lg">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-qanna-navy/10">
                          <svg className="w-6 h-6 text-qanna-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold text-qanna-navy">
                            Qanna Holding GmbH
                          </p>
                          <p className="text-qanna-gray-500">
                            Suttnerstr. 10
                            <br />
                            33790 Halle/Westfalen
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-xl font-bold text-qanna-navy mb-4">
                      E-Mail
                    </h3>
                    <Card variant="gray" padding="lg">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-qanna-navy/10">
                          <svg className="w-6 h-6 text-qanna-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <a
                            href="mailto:info@qanna-holding.de"
                            className="font-bold text-qanna-navy hover:text-qanna-gold transition-colors"
                          >
                            info@qanna-holding.de
                          </a>
                          <p className="text-qanna-gray-500 text-sm mt-1">
                            Allgemeine Anfragen
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Contact Persons */}
                  <div>
                    <h3 className="text-xl font-bold text-qanna-navy mb-4">
                      Ansprechpartner
                    </h3>
                    <StaggerContainer className="space-y-3">
                      {contactPersons.map((person) => (
                        <StaggerItem key={person.name}>
                          <Card variant="default" padding="md">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-qanna-navy/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-sm font-bold text-qanna-navy">
                                  {person.name.split(" ").map(n => n[0]).join("")}
                                </span>
                              </div>
                              <div>
                                <p className="font-bold text-qanna-navy">
                                  {person.name}
                                </p>
                                <p className="text-sm text-qanna-gold">
                                  {person.role}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Direct Contact Section */}
        <section className="section-padding bg-qanna-gray-50">
          <div className="container-qanna">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-qanna-navy mb-4">
                  Direkt zu unseren Unternehmen
                </h2>
                <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
                  Für spezifische Anfragen können Sie auch direkt unsere
                  Tochtergesellschaften kontaktieren.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggerItem>
                <a
                  href="https://rümpel-schmiede.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card variant="elevated" padding="lg" hover className="text-center h-full">
                    <h3 className="text-lg font-bold text-qanna-navy mb-2">
                      Rümpel Schmiede
                    </h3>
                    <p className="text-sm text-qanna-gray-500 mb-4">
                      Entrümpelung & Haushaltsauflösung
                    </p>
                    <span className="text-qanna-gold font-medium">
                      rümpel-schmiede.de →
                    </span>
                  </Card>
                </a>
              </StaggerItem>

              <StaggerItem>
                <a
                  href="https://qanna-consulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card variant="elevated" padding="lg" hover className="text-center h-full">
                    <h3 className="text-lg font-bold text-qanna-navy mb-2">
                      QANNA Consulting
                    </h3>
                    <p className="text-sm text-qanna-gray-500 mb-4">
                      Unternehmensberatung & KI
                    </p>
                    <span className="text-qanna-gold font-medium">
                      qanna-consulting.com →
                    </span>
                  </Card>
                </a>
              </StaggerItem>

              <StaggerItem>
                <a
                  href="https://rueckbaupro.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card variant="elevated" padding="lg" hover className="text-center h-full">
                    <h3 className="text-lg font-bold text-qanna-navy mb-2">
                      RückbauPro
                    </h3>
                    <p className="text-sm text-qanna-gray-500 mb-4">
                      Schadstoffsanierung & Rückbau
                    </p>
                    <span className="text-qanna-gold font-medium">
                      rueckbaupro.de →
                    </span>
                  </Card>
                </a>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

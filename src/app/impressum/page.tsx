"use client";

import { Header, Footer } from "@/components/layout";
import { FadeIn } from "@/components/ui";

export default function ImpressumPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 bg-navy-gradient">
          <div className="container-qanna relative z-10">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Impressum
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-white">
          <div className="container-qanna">
            <FadeIn>
              <div className="max-w-3xl prose prose-lg">
                <h2 className="text-2xl font-bold text-qanna-navy mb-4">
                  Angaben gemäß § 5 TMG
                </h2>

                <div className="mb-8">
                  <p className="text-qanna-gray-500">
                    <strong className="text-qanna-navy">Qanna Holding GmbH</strong>
                    <br />
                    Suttnerstr. 10
                    <br />
                    33790 Halle/Westfalen
                  </p>
                </div>

                <h3 className="text-xl font-bold text-qanna-navy mb-3">
                  Vertreten durch
                </h3>
                <p className="text-qanna-gray-500 mb-8">
                  Geschäftsführer: Sergej Schulz, Andreas Sudermann
                </p>

                <h3 className="text-xl font-bold text-qanna-navy mb-3">
                  Kontakt
                </h3>
                <p className="text-qanna-gray-500 mb-8">
                  E-Mail: info@qanna-holding.de
                </p>

                <h3 className="text-xl font-bold text-qanna-navy mb-3">
                  Registereintrag
                </h3>
                <p className="text-qanna-gray-500 mb-8">
                  Eintragung im Handelsregister
                  <br />
                  Registergericht: Amtsgericht Gütersloh
                  <br />
                  Registernummer: HRB [wird ergänzt]
                </p>

                <h3 className="text-xl font-bold text-qanna-navy mb-3">
                  Umsatzsteuer-ID
                </h3>
                <p className="text-qanna-gray-500 mb-8">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  [wird ergänzt]
                </p>

                <h2 className="text-2xl font-bold text-qanna-navy mb-4 mt-12">
                  Streitschlichtung
                </h2>
                <p className="text-qanna-gray-500 mb-4">
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-qanna-navy hover:text-qanna-gold"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-qanna-gray-500 mb-8">
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                  teilzunehmen.
                </p>

                <h2 className="text-2xl font-bold text-qanna-navy mb-4 mt-12">
                  Haftung für Inhalte
                </h2>
                <p className="text-qanna-gray-500 mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                  jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die
                  auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-qanna-gray-500 mb-8">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                  Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                  Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                  diese Inhalte umgehend entfernen.
                </p>

                <h2 className="text-2xl font-bold text-qanna-navy mb-4 mt-12">
                  Haftung für Links
                </h2>
                <p className="text-qanna-gray-500 mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                  diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                  Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                  oder Betreiber der Seiten verantwortlich.
                </p>
                <p className="text-qanna-gray-500 mb-8">
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                  Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                  inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                  konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                  Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                  umgehend entfernen.
                </p>

                <h2 className="text-2xl font-bold text-qanna-navy mb-4 mt-12">
                  Urheberrecht
                </h2>
                <p className="text-qanna-gray-500 mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                  schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p className="text-qanna-gray-500">
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                  kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
                  Seite nicht vom Betreiber erstellt wurden, werden die
                  Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                  Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                  entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

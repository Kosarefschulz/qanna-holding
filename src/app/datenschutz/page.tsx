"use client";

import { Header, Footer } from "@/components/layout";
import { FadeIn } from "@/components/ui";

export default function DatenschutzPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 bg-navy-gradient">
          <div className="container-qanna relative z-10">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Datenschutzerklärung
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
                  1. Datenschutz auf einen Blick
                </h2>

                <h3 className="text-xl font-bold text-qanna-navy mb-3">
                  Allgemeine Hinweise
                </h3>
                <p className="text-qanna-gray-500 mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber,
                  was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                  Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können.
                </p>

                <h3 className="text-xl font-bold text-qanna-navy mb-3">
                  Datenerfassung auf dieser Website
                </h3>
                <p className="text-qanna-gray-500 mb-4">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser
                  Website?</strong>
                </p>
                <p className="text-qanna-gray-500 mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                  dieser Website entnehmen.
                </p>

                <p className="text-qanna-gray-500 mb-4">
                  <strong>Wie erfassen wir Ihre Daten?</strong>
                </p>
                <p className="text-qanna-gray-500 mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                  mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
                  ein Kontaktformular eingeben.
                </p>
                <p className="text-qanna-gray-500 mb-8">
                  Andere Daten werden automatisch beim Besuch der Website durch
                  unsere IT-Systeme erfasst. Das sind vor allem technische Daten
                  (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                  Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
                  sobald Sie diese Website betreten.
                </p>

                <h2 className="text-2xl font-bold text-qanna-navy mb-4 mt-12">
                  2. Verantwortliche Stelle
                </h2>
                <p className="text-qanna-gray-500 mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                  Website ist:
                </p>
                <p className="text-qanna-gray-500 mb-8">
                  <strong className="text-qanna-navy">Qanna Holding GmbH</strong>
                  <br />
                  Suttnerstr. 10
                  <br />
                  33790 Halle/Westfalen
                  <br />
                  E-Mail: info@qanna-holding.de
                </p>

                <h2 className="text-2xl font-bold text-qanna-navy mb-4 mt-12">
                  3. Ihre Rechte
                </h2>
                <p className="text-qanna-gray-500 mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
                  die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
                  eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
                  diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
                  haben Sie das Recht, unter bestimmten Umständen die Einschränkung
                  der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
                <p className="text-qanna-gray-500 mb-8">
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                  Aufsichtsbehörde zu.
                </p>

                <h2 className="text-2xl font-bold text-qanna-navy mb-4 mt-12">
                  4. Datenerfassung auf dieser Website
                </h2>

                <h3 className="text-xl font-bold text-qanna-navy mb-3">
                  Server-Log-Dateien
                </h3>
                <p className="text-qanna-gray-500 mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in so genannten Server-Log-Dateien, die Ihr Browser
                  automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-qanna-gray-500 mb-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-qanna-gray-500 mb-8">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                  nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
                  Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
                  ein berechtigtes Interesse an der technisch fehlerfreien
                  Darstellung und der Optimierung seiner Website – hierzu müssen die
                  Server-Log-Files erfasst werden.
                </p>

                <h3 className="text-xl font-bold text-qanna-navy mb-3">
                  Kontaktformular
                </h3>
                <p className="text-qanna-gray-500 mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
                  Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
                  angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
                  den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
                  geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-qanna-gray-500 mb-8">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                  Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                  Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                  Verarbeitung auf unserem berechtigten Interesse an der effektiven
                  Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
                  DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
                  sofern diese abgefragt wurde.
                </p>

                <h2 className="text-2xl font-bold text-qanna-navy mb-4 mt-12">
                  5. Hosting
                </h2>
                <p className="text-qanna-gray-500 mb-4">
                  Diese Website wird bei Vercel Inc. gehostet. Die Nutzung von
                  Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir
                  haben ein berechtigtes Interesse an einer möglichst zuverlässigen
                  Darstellung unserer Website.
                </p>
                <p className="text-qanna-gray-500 mb-8">
                  Weitere Informationen finden Sie in der Datenschutzerklärung von
                  Vercel:{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-qanna-navy hover:text-qanna-gold"
                  >
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>

                <h2 className="text-2xl font-bold text-qanna-navy mb-4 mt-12">
                  6. SSL- bzw. TLS-Verschlüsselung
                </h2>
                <p className="text-qanna-gray-500">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die
                  Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                  TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                  daran, dass die Adresszeile des Browsers von „http://" auf
                  „https://" wechselt und an dem Schloss-Symbol in Ihrer
                  Browserzeile.
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

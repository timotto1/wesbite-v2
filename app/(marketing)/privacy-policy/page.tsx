import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy — Stairpay",
  description: "How Stairpay collects, uses, and protects your personal data.",
};

const SECTIONS = [
  { id: "important-information", n: 1, label: "Important information and who we are" },
  { id: "types-of-data", n: 2, label: "Types of personal data we collect about you" },
  { id: "sub-processors", n: 3, label: "Sub-processors" },
  { id: "how-collected", n: 4, label: "How is your personal data collected?" },
  { id: "how-we-use", n: 5, label: "How we use your personal data" },
  { id: "disclosures", n: 6, label: "Disclosures of your personal data" },
  { id: "international-transfers", n: 7, label: "International transfers" },
  { id: "data-security", n: 8, label: "Data security" },
  { id: "data-retention", n: 9, label: "Data retention" },
  { id: "legal-rights", n: 10, label: "Your legal rights" },
  { id: "contact-details", n: 11, label: "Contact details" },
  { id: "complaints", n: 12, label: "Complaints" },
  { id: "changes", n: 13, label: "Changes to the privacy policy and your duty to inform us of changes" },
  { id: "third-party-links", n: 14, label: "Third-party links" },
];

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto w-full max-w-prose px-section py-24">
      <p className="text-eyebrow uppercase text-ink-muted">Legal</p>
      <h1 className="mt-4 text-display-lg text-ink">Privacy policy</h1>

      <section className="mt-12 space-y-6 text-body-md text-ink-muted">
        <h2 className="text-heading-md text-ink">Introduction</h2>
        <p>
          This privacy policy sets out how we use and protect your personal
          data. This privacy policy is provided in a layered format so you can
          click through to the specific areas set out below.
        </p>
        <ol className="ml-6 list-decimal space-y-1">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-stairpay underline-offset-4 hover:underline"
              >
                {s.label.toUpperCase()}
              </a>{" "}
              (paragraph {s.n})
            </li>
          ))}
        </ol>
      </section>

      <section
        id="important-information"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">
          1. Important information and who we are
        </h2>
        <h3 className="text-body-lg font-medium text-ink">Privacy policy</h3>
        <p>
          This privacy policy gives you information about how Stairpay collects
          and uses your personal data through your use of this website,
          including any data you may provide when you register with us. It
          details where Stairpay act as a Data Processor and where Stairpay act
          as a Data Controller. This website is not intended for children and
          we do not knowingly collect data relating to children.
        </p>
        <h3 className="text-body-lg font-medium text-ink">
          Stairpay as Controller and Processor
        </h3>
        <p>
          Stairpay acts as the Data Controller and is responsible for your
          personal data when we process personal data for our own business
          purposes, including:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>Managing and maintaining the Stairpay platform;</li>
          <li>Improving our services and user experience;</li>
          <li>
            Handling direct customer interactions where there is no third party
            involvement. An example of third party involvement is a staircasing
            transaction where the third party will be your landlord;
          </li>
          <li>
            Sharing your personal data with our partner suppliers (see section
            six below) so that you can engage with them to obtain services in
            relation to staircasing and other property-related activities.
          </li>
        </ul>
        <p>
          In all other cases Stairpay is the Data Processor. Where you are a
          resident, this means that we process your personal data exclusively
          on behalf of and under the instructions of your landlord who is the
          Data Controller and has visibility of that personal data. As a
          result, this privacy policy does not apply to that processing.
          Instead, the landlord&apos;s privacy policy applies, and we process
          your personal data in accordance with the instructions of your
          landlord.
        </p>
        <p>
          Where personal data is shared with our partner suppliers, each is an
          independent controller and it will process your personal data in
          accordance with its privacy policy.
        </p>
        <p>
          If you have any questions about this privacy policy, including any
          requests to exercise your legal rights (paragraph 10), please contact
          us using the information set out in the contact details section
          (paragraph 11).
        </p>
      </section>

      <section
        id="types-of-data"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">
          2. The types of personal data we collect about you
        </h2>
        <p>
          Personal data means any information about an individual from which
          that person can be identified.
        </p>
        <p>
          We may collect, use, store and transfer different kinds of personal
          data about you which we have grouped together as follows:
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong className="text-ink">Identity Data</strong> includes first
            name, last name, any previous names, username or similar
            identifier, marital status, title, date of birth and gender.
          </li>
          <li>
            <strong className="text-ink">Contact Data</strong> includes billing
            address, home address, email address and telephone numbers.
          </li>
          <li>
            <strong className="text-ink">Transaction Data</strong> includes
            details about your salary, savings and mortgage and payments to and
            from you and other details of property-related transactions.
          </li>
          <li>
            <strong className="text-ink">Technical Data</strong> includes
            internet protocol (IP) address, your login data, browser type and
            version, time zone setting and location, browser plug-in types and
            versions, operating system and platform, device ID and other
            technology on the devices you use to access this website.
          </li>
          <li>
            <strong className="text-ink">Profile Data</strong> includes your
            username and password, transactions entered into by you, your
            interests, preferences, feedback and survey responses.
          </li>
          <li>
            <strong className="text-ink">Usage Data</strong> includes
            information about how you interact with and use our website,
            products and services.
          </li>
          <li>
            <strong className="text-ink">
              Marketing and Communications Data
            </strong>{" "}
            includes your preferences in receiving marketing from us and our
            third parties and your communication preferences.
          </li>
        </ul>
        <p>
          We also collect, use and share aggregated data such as statistical or
          demographic data which is not personal data as it does not directly
          (or indirectly) reveal your identity. For example, we may aggregate
          individuals&apos; Usage Data to calculate the percentage of users
          accessing a specific website feature in order to analyse general
          trends in how users are interacting with our website to help improve
          the website and our service offering.
        </p>
      </section>

      <section
        id="sub-processors"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">3. Sub-processors</h2>
        <p>
          You authorise Stairpay and our affiliated entities to engage
          sub-processors to process your data as necessary to provide our
          Service. A list of current sub-processors is available below. We will
          notify you of any additions or removals of sub-processors at least 10
          days in advance, provided that you have opted to receive such
          notifications.
        </p>
        <p>Stairpay shall:</p>
        <p>
          (i) Ensure that each sub-processor enters into a written agreement
          containing the protections required by law; and
        </p>
        <p>
          (ii) Remain fully responsible for the compliance of its
          sub-processors with applicable data protection law.
        </p>
        <p>
          Due to confidentiality restrictions, Stairpay may be unable to share
          sub-processor agreements with you but will provide relevant
          information upon request where reasonably possible.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-body-sm">
            <thead>
              <tr className="border-b border-rule text-left text-ink">
                <th className="py-3 pr-4 font-medium">Entity</th>
                <th className="py-3 pr-4 font-medium">Location</th>
                <th className="py-3 font-medium">Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["AWS", "London, UK", "To facilitate cloud computing and presenting the Stairpay Solutions"],
                ["Klaviyo", "London, UK", "For email delivery from the Stairpay app"],
                ["Google Suite", "London, UK", "For hosting and storing documents, communication and collaboration"],
                ["TrueLayer", "London, UK", "Open Banking for payment collection and information collation"],
                ["OpenAI", "London, UK", "AI Home Assistant so that residents can query their lease and uploaded documents"],
              ].map(([entity, location, use]) => (
                <tr key={entity} className="border-b border-rule align-top">
                  <td className="py-3 pr-4 text-ink">{entity}</td>
                  <td className="py-3 pr-4">{location}</td>
                  <td className="py-3">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        id="how-collected"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">
          4. How is your personal data collected?
        </h2>
        <p>
          We use different methods to collect data from and about you including
          through:
        </p>
        <p>
          <strong className="text-ink">Your interactions with us.</strong> You
          may give us your personal data by filling in online forms or by
          corresponding with us by post, phone, email or otherwise. This
          includes personal data you provide when you:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>create an account on our website;</li>
          <li>subscribe to our service or publications;</li>
          <li>request marketing to be sent to you;</li>
          <li>enter a survey; or</li>
          <li>give us feedback or contact us.</li>
        </ul>
        <p>
          <strong className="text-ink">
            Automated technologies or interactions.
          </strong>{" "}
          As you interact with our website, we will automatically collect
          Technical Data about your equipment, browsing actions and patterns.
          We collect this personal data by using cookies, server logs and other
          similar technologies. We may also receive Technical Data about you if
          you visit other websites employing our cookies. Please see our cookie
          policy for further details.
        </p>
        <p>
          <strong className="text-ink">
            Third parties or publicly available sources.
          </strong>{" "}
          Technical Data is collected from the following parties:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            analytics providers such as Google based inside and outside the UK;
          </li>
          <li>
            advertising networks such as Google Ads based inside and outside
            the UK; and
          </li>
          <li>
            search information providers such as Google Search based inside and
            outside the UK.
          </li>
        </ul>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Contact and Transaction Data is collected from providers of
            technical, delivery and other services such as Stripe based inside
            and outside the UK.
          </li>
          <li>
            Identity and Contact Data is collected from data brokers or
            aggregators such as TrueLayer based inside and outside the UK.
          </li>
          <li>
            Identity and Contact Data is collected from publicly available
            sources such as the Land Registry based inside the UK.
          </li>
        </ul>
      </section>

      <section
        id="how-we-use"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">
          5. How we use your personal data
        </h2>
        <h3 className="text-body-lg font-medium text-ink">Legal basis</h3>
        <p>
          The law requires us to have a legal basis for collecting and using
          your personal data. We rely on one or more of the following legal
          bases:
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong className="text-ink">Performance of a contract with you:</strong>{" "}
            Where we need to perform the contract we are about to enter into or
            have entered into with you.
          </li>
          <li>
            <strong className="text-ink">Legitimate interests:</strong> We may
            use your personal data where it is necessary to conduct our
            business and pursue our legitimate interests, for example to
            prevent fraud and enable us to give you the best and most secure
            customer experience. We make sure we consider and balance any
            potential impact on you and your rights (both positive and
            negative) before we process your personal data for our legitimate
            interests. We do not use your personal data for activities where
            our interests are overridden by the impact on you (unless we have
            your consent or are otherwise required or permitted to by law).
          </li>
          <li>
            <strong className="text-ink">Legal obligation:</strong> We may use
            your personal data where it is necessary for compliance with a
            legal obligation that we are subject to. We will identify the
            relevant legal obligation when we rely on this legal basis.
          </li>
          <li>
            <strong className="text-ink">Consent:</strong> We rely on consent
            only where we have obtained your active agreement to use your
            personal data for a specified purpose, for example if you subscribe
            to an email newsletter.
          </li>
        </ul>
        <h3 className="text-body-lg font-medium text-ink">
          Purposes for which we will use your personal data
        </h3>
        <p>
          We have set out below, in a table format, a description of all the
          ways we plan to use the various categories of your personal data, and
          which of the legal bases we rely on to do so. We have also identified
          what our legitimate interests are where appropriate.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-body-sm">
            <thead>
              <tr className="border-b border-rule text-left text-ink">
                <th className="py-3 pr-4 font-medium">Purpose / Use</th>
                <th className="py-3 pr-4 font-medium">Type of data</th>
                <th className="py-3 font-medium">Legal basis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule align-top">
                <td className="py-3 pr-4 text-ink">
                  To register you as a new customer
                </td>
                <td className="py-3 pr-4">(a) Identity (b) Contact</td>
                <td className="py-3">Performance of a contract with you</td>
              </tr>
              <tr className="border-b border-rule align-top">
                <td className="py-3 pr-4 text-ink">
                  To facilitate transactions including: (a) manage payments,
                  fees and charges (b) collect and recover money owed to us
                </td>
                <td className="py-3 pr-4">
                  (a) Identity (b) Contact (c) Transaction (d) Marketing and
                  Communications
                </td>
                <td className="py-3">
                  (a) Performance of a contract with you (b) Necessary for our
                  legitimate interests (to recover debts due to us)
                </td>
              </tr>
              <tr className="border-b border-rule align-top">
                <td className="py-3 pr-4 text-ink">
                  To manage our relationship with you, including: (a) notifying
                  you about changes to our terms or privacy policy (b) dealing
                  with your requests, complaints and queries
                </td>
                <td className="py-3 pr-4">
                  (a) Identity (b) Contact (c) Profile (d) Marketing and
                  Communications
                </td>
                <td className="py-3">
                  (a) Performance of a contract with you (b) Necessary to
                  comply with a legal obligation (c) Necessary for our
                  legitimate interests (to keep our records updated and manage
                  our relationship with you)
                </td>
              </tr>
              <tr className="border-b border-rule align-top">
                <td className="py-3 pr-4 text-ink">
                  To enable you to complete a survey
                </td>
                <td className="py-3 pr-4">
                  (a) Identity (b) Contact (c) Profile (d) Usage (e) Marketing
                  and Communications
                </td>
                <td className="py-3">
                  (a) Performance of a contract with you (b) Necessary for our
                  legitimate interests (to study how customers use our
                  products / services, to develop them and grow our business)
                </td>
              </tr>
              <tr className="border-b border-rule align-top">
                <td className="py-3 pr-4 text-ink">
                  To administer and protect our business and this website
                  (including troubleshooting, data analysis, testing, system
                  maintenance, support, reporting and hosting of data)
                </td>
                <td className="py-3 pr-4">
                  (a) Identity (b) Contact (c) Technical
                </td>
                <td className="py-3">
                  (a) Necessary for our legitimate interests (for running our
                  business, provision of administration and IT services,
                  network security, to prevent fraud and in the context of a
                  business reorganisation or group restructuring exercise) (b)
                  Necessary to comply with a legal obligation
                </td>
              </tr>
              <tr className="border-b border-rule align-top">
                <td className="py-3 pr-4 text-ink">
                  To deliver relevant website content and online advertisements
                  to you and measure or understand the effectiveness of the
                  advertising we serve to you
                </td>
                <td className="py-3 pr-4">
                  (a) Identity (b) Contact (c) Profile (d) Usage (e) Marketing
                  and Communications (f) Technical
                </td>
                <td className="py-3">
                  Necessary for our legitimate interests (to study how
                  customers use our products / services, to develop them, to
                  grow our business and to inform our marketing strategy)
                </td>
              </tr>
              <tr className="border-b border-rule align-top">
                <td className="py-3 pr-4 text-ink">
                  To use data analytics to improve our website,
                  products / services, customer relationships and experiences
                  and to measure the effectiveness of our communications and
                  marketing
                </td>
                <td className="py-3 pr-4">(a) Technical (b) Usage</td>
                <td className="py-3">
                  Necessary for our legitimate interests (to define types of
                  customers for our products and services, to keep our website
                  updated and relevant, to develop our business and to inform
                  our marketing strategy)
                </td>
              </tr>
              <tr className="border-b border-rule align-top">
                <td className="py-3 pr-4 text-ink">
                  To send you relevant marketing communications and make
                  personalised suggestions and recommendations to you about
                  services that may be of interest to you based on your Profile
                  Data
                </td>
                <td className="py-3 pr-4">
                  (a) Identity (b) Contact (c) Technical (d) Usage (e) Profile
                  (f) Marketing and Communications
                </td>
                <td className="py-3">
                  Necessary for our legitimate interests (to carry out direct
                  marketing, develop our products / services and grow our
                  business)
                </td>
              </tr>
              <tr className="border-b border-rule align-top">
                <td className="py-3 pr-4 text-ink">
                  To carry out market research through your voluntary
                  participation in surveys
                </td>
                <td className="py-3 pr-4">(a) Contact</td>
                <td className="py-3">
                  Necessary for our legitimate interests (to study how
                  customers use our products / services and to help us improve
                  and develop our products and services)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-body-lg font-medium text-ink">Direct marketing</h3>
        <p>
          You will receive marketing communications from us if you have
          requested information from us or subscribed to our services and you
          have not opted out of receiving the marketing.
        </p>
        <p>
          We may also analyse your Identity, Contact, Technical, Usage and
          Profile Data to form a view as to which services may be of interest
          to you so that we can then send you relevant marketing
          communications.
        </p>
        <h3 className="text-body-lg font-medium text-ink">
          Third-party marketing
        </h3>
        <p>
          We will get your express consent before we share your personal data
          with any third party for their own direct marketing purposes.
        </p>
        <h3 className="text-body-lg font-medium text-ink">
          Opting out of marketing
        </h3>
        <p>
          You can ask us to stop sending you marketing communications at any
          time by following the opt-out links within any marketing
          communication sent to you or by contacting us. If you opt out of
          receiving marketing communications, you will still receive
          service-related communications that are essential for administrative
          or customer service purposes.
        </p>
        <h3 className="text-body-lg font-medium text-ink">Cookies</h3>
        <p>
          For more information about the cookies we use and how to change your
          cookie preferences, please see our cookie policy.
        </p>
      </section>

      <section
        id="disclosures"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">
          6. Disclosures of your personal data
        </h2>
        <p>
          Other than as expressly set out in this privacy policy or as
          otherwise required or permitted by law, we will not share, sell or
          distribute any of your personal information without your consent.
          When using the Stairpay platform, your personal information may be
          shared with third-party providers who deliver specific services as
          part of the staircasing process. These providers act as independent
          Data Controllers, meaning they determine how they process your
          personal data. You should review their privacy policies for more
          details on their data processing activities.
        </p>
        <p>This includes:</p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong className="text-ink">Mortgage Brokers</strong> — if you
            request mortgage advice or assistance, your information may be
            shared with brokers to assess financing options.
          </li>
          <li>
            <strong className="text-ink">RICS Valuers</strong> — if a valuation
            is required for staircasing, your details may be shared with
            RICS-accredited surveyors to arrange and conduct the valuation.
          </li>
          <li>
            <strong className="text-ink">
              Conveyancers and Legal Advisors
            </strong>{" "}
            — if you proceed with staircasing, legal professionals may receive
            your details to handle the transaction.
          </li>
          <li>
            <strong className="text-ink">
              Other Professional Services Providers
            </strong>{" "}
            — such as estate agents or other third parties where requested.
          </li>
        </ul>
        <p>
          These service providers operate independently, and we recommend
          reviewing their privacy policies to understand how they handle your
          personal data.
        </p>
        <p>
          We may also share your personal data with third parties to whom we
          may choose to sell, transfer or merge parts of our business or our
          assets. If a change happens to our business, then the new owners may
          use your personal data in the same way as set out in this privacy
          policy.
        </p>
        <p>
          We require all third parties to respect the security of your personal
          data and to treat it in accordance with the law. We do not allow our
          third-party service providers to use your personal data for their own
          purposes and only permit them to process your personal data for
          specified purposes and in accordance with our instructions.
        </p>
      </section>

      <section
        id="international-transfers"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">7. International transfers</h2>
        <p>
          Whenever we transfer your personal data out of the UK to countries
          which have laws that do not provide the same level of data protection
          as UK law, we always ensure that a similar degree of protection is
          afforded to it by using specific standard contractual terms approved
          for use in the UK which give the transferred personal data the same
          protection as it has in the UK. To obtain a copy of these contractual
          safeguards, please contact us.
        </p>
        <p>
          We may transfer your personal data to service providers that carry
          out certain functions on our behalf. This may involve transferring
          personal data outside the UK to countries which have laws that do not
          provide the same level of data protection as UK law.
        </p>
        <p>
          Whenever we transfer your personal data out of the UK to service
          providers, we ensure a similar degree of protection is afforded to it
          by ensuring that the following safeguards are in place:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            We will only transfer your personal data to countries that have
            been deemed by the UK to provide an adequate level of protection
            for personal data.
          </li>
          <li>
            We may use specific standard contractual terms approved for use in
            the UK which give the transferred personal data the same protection
            as it has in the UK.
          </li>
        </ul>
      </section>

      <section
        id="data-security"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">8. Data security</h2>
        <p>
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used or accessed in an
          unauthorised way, altered or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors and
          other third parties who have a business need to know. They will only
          process your personal data on our instructions and they are subject
          to a duty of confidentiality.
        </p>
        <p>
          We have put in place procedures to deal with any suspected personal
          data breach and will notify you and any applicable regulator of a
          breach where we are legally required to do so.
        </p>
      </section>

      <section
        id="data-retention"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">9. Data retention</h2>
        <h3 className="text-body-lg font-medium text-ink">
          How long will you use my personal data for?
        </h3>
        <p>
          We will only retain your personal data for as long as reasonably
          necessary to fulfil the purposes we collected it for, including for
          the purposes of satisfying any legal, regulatory, tax, accounting or
          reporting requirements. We may retain your personal data for a longer
          period in the event of a complaint or if we reasonably believe there
          is a prospect of litigation in respect to our relationship with you.
        </p>
        <p>
          To determine the appropriate retention period for personal data, we
          consider the amount, nature and sensitivity of the personal data, the
          potential risk of harm from unauthorised use or disclosure of your
          personal data, the purposes for which we process your personal data
          and whether we can achieve those purposes through other means, and
          the applicable legal, regulatory, tax, accounting or other
          requirements.
        </p>
        <p>
          By law we have to keep basic information about our customers
          (including Contact, Identity and Transaction Data) for six years
          after they cease being customers for tax purposes.
        </p>
        <p>
          In some circumstances you can ask us to delete your data: see
          paragraph 10 below for further information.
        </p>
        <p>
          In some circumstances we will anonymise your personal data (so that
          it can no longer be associated with you) for research or statistical
          purposes, in which case we may use this information indefinitely
          without further notice to you.
        </p>
      </section>

      <section
        id="legal-rights"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">10. Your legal rights</h2>
        <p>
          You have a number of rights under data protection laws in relation to
          your personal data.
        </p>
        <p>You have the right to:</p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong className="text-ink">
              Request access to your personal data
            </strong>{" "}
            (commonly known as a &quot;subject access request&quot;). This
            enables you to receive a copy of the personal data we hold about
            you and to check that we are lawfully processing it.
          </li>
          <li>
            <strong className="text-ink">Request correction</strong> of the
            personal data that we hold about you. This enables you to have any
            incomplete or inaccurate data we hold about you corrected, though
            we may need to verify the accuracy of the new data you provide to
            us.
          </li>
          <li>
            <strong className="text-ink">Request erasure</strong> of your
            personal data in certain circumstances. This enables you to ask us
            to delete or remove personal data where there is no good reason for
            us continuing to process it. You also have the right to ask us to
            delete or remove your personal data where you have successfully
            exercised your right to object to processing (see below), where we
            may have processed your information unlawfully or where we are
            required to erase your personal data to comply with local law.
            Note, however, that we may not always be able to comply with your
            request of erasure for specific legal reasons which will be
            notified to you, if applicable, at the time of your request.
          </li>
          <li>
            <strong className="text-ink">Object to processing</strong> of your
            personal data where we are relying on a legitimate interest (or
            those of a third party) as the legal basis for that particular use
            of your data (including carrying out profiling based on our
            legitimate interests). In some cases, we may demonstrate that we
            have compelling legitimate grounds to process your information
            which override your right to object. You also have the absolute
            right to object any time to the processing of your personal data
            for direct marketing purposes (see &quot;Opting out of
            marketing&quot; in paragraph 5).
          </li>
          <li>
            <strong className="text-ink">Request the transfer</strong> of your
            personal data to you or to a third party. We will provide to you,
            or a third party you have chosen, your personal data in a
            structured, commonly used, machine-readable format. Note that this
            right only applies to automated information which you initially
            provided consent for us to use or where we used the information to
            perform a contract with you.
          </li>
          <li>
            <strong className="text-ink">Withdraw consent</strong> at any time
            where we are relying on consent to process your personal data.
            However, this will not affect the lawfulness of any processing
            carried out before you withdraw your consent. If you withdraw your
            consent, we may not be able to provide certain products or services
            to you. We will advise you if this is the case at the time you
            withdraw your consent.
          </li>
          <li>
            <strong className="text-ink">Request restriction of processing</strong>{" "}
            of your personal data. This enables you to ask us to suspend the
            processing of your personal data in one of the following scenarios:
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li>If you want us to establish the data&apos;s accuracy.</li>
              <li>
                Where our use of the data is unlawful but you do not want us to
                erase it.
              </li>
              <li>
                Where you need us to hold the data even if we no longer require
                it as you need it to establish, exercise or defend legal
                claims.
              </li>
              <li>
                You have objected to our use of your data but we need to verify
                whether we have overriding legitimate grounds to use it.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          If you wish to exercise any of the rights set out above, please
          contact us.
        </p>
        <h3 className="text-body-lg font-medium text-ink">
          No fee usually required
        </h3>
        <p>
          You will not have to pay a fee to access your personal data (or to
          exercise any of the other rights). However, we may charge a
          reasonable fee if your request is clearly unfounded, repetitive or
          excessive. Alternatively, we could refuse to comply with your request
          in these circumstances.
        </p>
        <h3 className="text-body-lg font-medium text-ink">
          What we may need from you
        </h3>
        <p>
          We may need to request specific information from you to help us
          confirm your identity and ensure your right to access your personal
          data (or to exercise any of your other rights). This is a security
          measure to ensure that personal data is not disclosed to any person
          who has no right to receive it. We may also contact you to ask you
          for further information in relation to your request to speed up our
          response.
        </p>
        <h3 className="text-body-lg font-medium text-ink">
          Time limit to respond
        </h3>
        <p>
          We try to respond to all legitimate requests within one month.
          Occasionally it could take us longer than a month if your request is
          particularly complex or you have made a number of requests. In this
          case, we will notify you and keep you updated.
        </p>
      </section>

      <section
        id="contact-details"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">11. Contact details</h2>
        <p>
          If you have any questions about this privacy policy or about the use
          of your personal data or you want to exercise your privacy rights,
          please contact us in the following ways:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong className="text-ink">Email address:</strong>{" "}
            <a
              href="mailto:hello@stairpay.com"
              className="text-stairpay underline-offset-4 hover:underline"
            >
              hello@stairpay.com
            </a>
          </li>
          <li>
            <strong className="text-ink">Postal address:</strong> Lawford
            House, Albert Place, London, England, N3 1QA
          </li>
        </ul>
      </section>

      <section
        id="complaints"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">12. Complaints</h2>
        <p>
          You have the right to make a complaint at any time to the Information
          Commissioner&apos;s Office (ICO), the UK regulator for data
          protection issues (
          <a
            href="https://www.ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stairpay underline-offset-4 hover:underline"
          >
            www.ico.org.uk
          </a>
          ). We would, however, appreciate the chance to deal with your
          concerns before you approach the ICO so please contact us in the
          first instance.
        </p>
      </section>

      <section
        id="changes"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">
          13. Changes to the privacy policy and your duty to inform us of changes
        </h2>
        <p>
          We keep our privacy policy under regular review. Historic versions
          can be obtained by contacting us.
        </p>
        <p>
          It is important that the personal data we hold about you is accurate
          and current. Please keep us informed if your personal data changes
          during your relationship with us, for example a new address or email
          address.
        </p>
      </section>

      <section
        id="third-party-links"
        className="mt-16 space-y-6 text-body-md text-ink-muted"
      >
        <h2 className="text-heading-md text-ink">14. Third-party links</h2>
        <p>
          This website may include links to third-party websites, plug-ins and
          applications. Clicking on those links or enabling those connections
          may allow third parties to collect or share data about you. We do not
          control these third-party websites and are not responsible for their
          privacy statements. When you leave our website, we encourage you to
          read the privacy policy of every website you visit.
        </p>
      </section>
    </article>
  );
}

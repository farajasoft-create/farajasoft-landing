import LegalLayout from "@/components/layout/LegalLayout";

const GDPRStatement = () => (
  <LegalLayout
    title="GDPR Statement"
    subtitle="FarajaSoft's commitment to EU/EEA data protection rights and the Kenya Data Protection Act."
    lastUpdated="1 May 2025"
  >
    <p>
      FarajaSoft Limited is committed to compliance with the EU General Data Protection Regulation (GDPR)
      and the Kenya Data Protection Act, 2019 (KDPA). This statement explains how we meet those obligations
      and what rights you have as a data subject.
    </p>

    <h2>1. Scope of Application</h2>
    <p>
      The GDPR applies to FarajaSoft where we process personal data of individuals located in the EU or EEA,
      regardless of where FarajaSoft is established. The KDPA applies to all personal data processing
      activities carried out by FarajaSoft in Kenya or relating to Kenyan data subjects.
    </p>

    <h2>2. Roles and Responsibilities</h2>
    <h3>2.1 As a Data Processor</h3>
    <p>
      When processing employee data on behalf of our Customers (employers), FarajaSoft acts as a Data
      Processor. The Customer is the Data Controller and determines the purposes and means of processing.
      Our obligations in this role are set out in our <a href="/legal/data-processing-agreement">Data Processing Agreement</a>.
    </p>
    <h3>2.2 As a Data Controller</h3>
    <p>
      FarajaSoft acts as a Data Controller for data about our own customers (account holders) — including
      registration details, billing information, and support correspondence. Our obligations in this role
      are set out in our <a href="/legal/privacy-policy">Privacy Policy</a>.
    </p>

    <h2>3. Lawful Bases for Processing</h2>
    <p>We rely on the following lawful bases under Article 6 GDPR and Section 30 KDPA:</p>
    <ul>
      <li><strong>Performance of a contract</strong> — to deliver the subscribed Service</li>
      <li><strong>Legal obligation</strong> — KRA PAYE filing, NHIF/NSSF contributions, HELB deductions</li>
      <li><strong>Legitimate interests</strong> — security monitoring, fraud prevention, service improvement</li>
      <li><strong>Consent</strong> — marketing emails (opt-in, withdrawable at any time)</li>
    </ul>

    <h2>4. Data Subject Rights</h2>
    <p>
      Under the GDPR and KDPA, individuals have the following rights regarding their personal data:
    </p>
    <ul>
      <li><strong>Right of access (Art. 15 GDPR / Sec. 26 KDPA)</strong> — request a copy of your data</li>
      <li><strong>Right to rectification (Art. 16 GDPR / Sec. 27 KDPA)</strong> — correct inaccurate or incomplete data</li>
      <li><strong>Right to erasure (Art. 17 GDPR / Sec. 28 KDPA)</strong> — request deletion where there is no legal basis to retain it</li>
      <li><strong>Right to restriction (Art. 18 GDPR)</strong> — limit how we use your data while a dispute is resolved</li>
      <li><strong>Right to data portability (Art. 20 GDPR / Sec. 32 KDPA)</strong> — receive your data in a structured, machine-readable format</li>
      <li><strong>Right to object (Art. 21 GDPR)</strong> — object to processing based on legitimate interests</li>
      <li><strong>Rights related to automated decision-making (Art. 22 GDPR)</strong> — we do not make solely automated decisions with legal or significant effects</li>
    </ul>
    <p>
      To exercise any of these rights, contact our Data Protection Officer at{" "}
      <a href="mailto:dpo@farajasoft.com">dpo@farajasoft.com</a>. We will respond within 30 days.
    </p>

    <h2>5. International Data Transfers</h2>
    <p>
      Customer data is hosted in the AWS Africa (Cape Town) region (af-south-1). Where data must be
      transferred outside Kenya or the EEA — for example, to sub-processors — FarajaSoft uses EU Standard
      Contractual Clauses (SCCs) as the transfer mechanism, supplemented by technical and organisational
      safeguards where required by the Schrems II decision.
    </p>

    <h2>6. Data Retention</h2>
    <p>
      We retain personal data only as long as necessary for the purposes it was collected or as required
      by law. Payroll and employment records are retained for seven (7) years under Kenya's Income Tax Act.
      Account data is deleted within 90 days of subscription termination on written request.
    </p>

    <h2>7. Data Protection Officer</h2>
    <p>
      FarajaSoft has appointed a Data Protection Officer (DPO) responsible for overseeing compliance with
      the GDPR and KDPA.
    </p>
    <p>
      <strong>Contact:</strong><br />
      Email: <a href="mailto:dpo@farajasoft.com">dpo@farajasoft.com</a><br />
      FarajaSoft Limited, Nairobi, Kenya
    </p>

    <h2>8. Supervisory Authority</h2>
    <p>
      If you believe we have not handled your personal data in accordance with applicable law, you have the
      right to lodge a complaint with:
    </p>
    <ul>
      <li>
        <strong>Kenya:</strong> Office of the Data Protection Commissioner (ODPC) —{" "}
        <a href="https://www.odpc.go.ke" target="_blank" rel="noopener noreferrer">www.odpc.go.ke</a>
      </li>
      <li>
        <strong>EU/EEA:</strong> The supervisory authority in your country of residence or establishment
      </li>
    </ul>

    <h2>9. Updates</h2>
    <p>
      We review this statement annually and whenever there are significant changes to our processing
      activities or applicable law. Material updates will be communicated via email or in-app notice.
    </p>
  </LegalLayout>
);

export default GDPRStatement;

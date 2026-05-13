import LegalLayout from "@/components/layout/LegalLayout";

const PrivacyPolicy = () => (
  <LegalLayout
    title="Privacy Policy"
    subtitle="How FarajaSoft collects, uses, and protects your personal data."
    lastUpdated="1 May 2025"
  >
    <h2>1. Introduction</h2>
    <p>
      FarajaSoft Limited ("FarajaSoft", "we", "us", or "our") is committed to protecting your privacy. This
      Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you use our
      ERP and HRMS platform ("Service"). We comply with the Kenya Data Protection Act, 2019 and, where
      applicable, the EU General Data Protection Regulation (GDPR).
    </p>

    <h2>2. Data We Collect</h2>
    <h3>2.1 Data you provide directly</h3>
    <ul>
      <li>Account registration details (name, work email, company name, phone number)</li>
      <li>Employee records uploaded to the platform (personal details, employment history, payroll data)</li>
      <li>Payment and billing information processed via M-Pesa or bank transfer</li>
      <li>Support tickets and correspondence</li>
    </ul>
    <h3>2.2 Data collected automatically</h3>
    <ul>
      <li>Log data (IP address, browser type, pages visited, timestamps)</li>
      <li>Device and usage data collected via cookies and similar technologies</li>
      <li>API request metadata</li>
    </ul>

    <h2>3. How We Use Your Data</h2>
    <ul>
      <li>Provision and maintenance of the Service</li>
      <li>Processing payroll and statutory deductions (PAYE, NHIF, NSSF) on your behalf</li>
      <li>Generating KRA iTax-compliant reports and P9 forms</li>
      <li>Sending service notifications, invoices, and support responses</li>
      <li>Improving platform performance through aggregated analytics</li>
      <li>Complying with legal obligations under Kenyan law</li>
    </ul>

    <h2>4. Legal Basis for Processing</h2>
    <p>We process personal data under the following lawful bases:</p>
    <ul>
      <li><strong>Contract:</strong> Processing necessary to deliver the Service you have subscribed to</li>
      <li><strong>Legal obligation:</strong> Compliance with Kenya Revenue Authority, NHIF, NSSF, and other statutory requirements</li>
      <li><strong>Legitimate interests:</strong> Security monitoring, fraud prevention, and product improvement</li>
      <li><strong>Consent:</strong> Marketing communications (opt-in only)</li>
    </ul>

    <h2>5. Data Sharing and Disclosure</h2>
    <p>
      We do not sell your personal data. We may share data with:
    </p>
    <ul>
      <li><strong>Sub-processors</strong> (cloud hosting, email delivery, payment gateways) — governed by data processing agreements</li>
      <li><strong>Statutory bodies</strong> — KRA, NHIF, NSSF as required by law</li>
      <li><strong>Professional advisers</strong> — lawyers and auditors bound by confidentiality</li>
      <li><strong>Law enforcement</strong> — only when compelled by valid legal process</li>
    </ul>

    <h2>6. Data Retention</h2>
    <p>
      We retain employee and payroll records for a minimum of seven (7) years in line with Kenyan tax and
      employment law. Account data is deleted within 90 days of subscription termination on written request.
    </p>

    <h2>7. Your Rights</h2>
    <p>Under the Kenya Data Protection Act and GDPR you have the right to:</p>
    <ul>
      <li>Access a copy of your personal data</li>
      <li>Correct inaccurate data</li>
      <li>Request deletion (subject to legal retention obligations)</li>
      <li>Restrict or object to processing</li>
      <li>Data portability in a machine-readable format</li>
      <li>Withdraw consent at any time without affecting prior lawful processing</li>
    </ul>
    <p>
      To exercise your rights, email <a href="mailto:privacy@farajasoft.com">privacy@farajasoft.com</a>.
    </p>

    <h2>8. Security</h2>
    <p>
      We implement industry-standard security controls including AES-256 encryption at rest, TLS 1.3 in
      transit, role-based access control, and annual penetration testing. See our{" "}
      <a href="/legal/security">Security Overview</a> for details.
    </p>

    <h2>9. Cookies</h2>
    <p>
      We use cookies and similar tracking technologies. See our{" "}
      <a href="/legal/cookie-policy">Cookie Policy</a> for a full breakdown and opt-out options.
    </p>

    <h2>10. Changes to This Policy</h2>
    <p>
      We may update this Policy periodically. Material changes will be notified by email or an in-app
      banner at least 30 days before they take effect.
    </p>

    <h2>11. Contact</h2>
    <p>
      FarajaSoft Limited — Data Protection Officer<br />
      Email: <a href="mailto:privacy@farajasoft.com">privacy@farajasoft.com</a><br />
      Phone: 0752 772 590<br />
      Nairobi, Kenya
    </p>
  </LegalLayout>
);

export default PrivacyPolicy;

import LegalLayout from "@/components/layout/LegalLayout";

const DataProcessingAgreement = () => (
  <LegalLayout
    title="Data Processing Agreement"
    subtitle="The contractual framework governing how FarajaSoft processes personal data on your behalf."
    lastUpdated="1 May 2025"
  >
    <p>
      This Data Processing Agreement ("DPA") forms part of the Terms of Service between FarajaSoft Limited
      ("Processor") and the Customer ("Controller") and governs the processing of personal data by
      FarajaSoft on behalf of the Customer in connection with the Service.
    </p>

    <h2>1. Definitions</h2>
    <ul>
      <li><strong>"Personal Data"</strong> — any information relating to an identified or identifiable natural person as defined in the Kenya Data Protection Act, 2019 and the GDPR</li>
      <li><strong>"Processing"</strong> — any operation performed on personal data, including collection, storage, use, disclosure, and deletion</li>
      <li><strong>"Controller"</strong> — the Customer, who determines the purposes and means of processing</li>
      <li><strong>"Processor"</strong> — FarajaSoft Limited, who processes personal data on the Controller's instructions</li>
      <li><strong>"Sub-processor"</strong> — any third party engaged by FarajaSoft to assist in processing</li>
    </ul>

    <h2>2. Scope and Purpose of Processing</h2>
    <p>
      FarajaSoft processes personal data solely to deliver the ERP and HRMS Service as described in the
      Terms of Service. The categories of data processed include:
    </p>
    <ul>
      <li>Employee personal details (name, ID number, date of birth, contact information)</li>
      <li>Employment data (job title, department, employment dates, contract type)</li>
      <li>Payroll data (gross salary, allowances, deductions, bank account details)</li>
      <li>Leave and attendance records</li>
      <li>Performance and appraisal data</li>
      <li>Statutory identifiers (KRA PIN, NHIF number, NSSF number)</li>
    </ul>

    <h2>3. Controller Instructions</h2>
    <p>
      FarajaSoft processes personal data only on documented instructions from the Customer. The Terms of
      Service and this DPA constitute the Customer's primary instructions. If FarajaSoft believes an
      instruction violates applicable data protection law, it will promptly notify the Customer.
    </p>

    <h2>4. Confidentiality</h2>
    <p>
      FarajaSoft ensures that persons authorised to process personal data are bound by appropriate
      confidentiality obligations. All FarajaSoft staff with access to Customer data undergo data protection
      training and are subject to binding confidentiality undertakings.
    </p>

    <h2>5. Security Measures</h2>
    <p>FarajaSoft implements and maintains appropriate technical and organisational measures, including:</p>
    <ul>
      <li>AES-256 encryption of data at rest</li>
      <li>TLS 1.3 encryption for all data in transit</li>
      <li>Role-based access control (RBAC) with least-privilege principles</li>
      <li>Multi-factor authentication for administrative access</li>
      <li>Annual third-party penetration testing</li>
      <li>Automated vulnerability scanning and patch management</li>
      <li>Logical data segregation between customer tenants</li>
    </ul>
    <p>
      Full details are available in our <a href="/legal/security">Security Overview</a>.
    </p>

    <h2>6. Sub-processors</h2>
    <p>
      The Customer grants general authorisation for FarajaSoft to engage sub-processors. Current approved
      sub-processors include:
    </p>
    <ul>
      <li><strong>Amazon Web Services (AWS) — af-south-1 (Cape Town)</strong> — cloud infrastructure and storage</li>
      <li><strong>Postmark</strong> — transactional email delivery</li>
      <li><strong>Twilio</strong> — SMS notifications</li>
      <li><strong>Stripe</strong> — card payment processing</li>
      <li><strong>Sentry</strong> — error monitoring (anonymised stack traces only)</li>
    </ul>
    <p>
      FarajaSoft will notify the Customer of any intended changes to this list at least 14 days in advance.
      The Customer may object to new sub-processors within that period; if the objection cannot be resolved
      the Customer may terminate the Service without penalty.
    </p>

    <h2>7. International Transfers</h2>
    <p>
      Personal data is hosted primarily in the AWS Africa (Cape Town) region. Where data is transferred
      outside Kenya or the EEA, FarajaSoft relies on Standard Contractual Clauses (SCCs) or equivalent
      safeguards with each sub-processor.
    </p>

    <h2>8. Data Subject Rights</h2>
    <p>
      FarajaSoft will assist the Customer in responding to data subject rights requests (access,
      rectification, erasure, portability, restriction) within the Service's functionality. Where
      assistance beyond system tools is required, FarajaSoft will cooperate upon written request at no
      additional charge.
    </p>

    <h2>9. Data Breach Notification</h2>
    <p>
      FarajaSoft will notify the Customer without undue delay — and in any event within 72 hours — upon
      becoming aware of a personal data breach affecting Customer data. Notification will include the
      nature of the breach, categories and approximate number of data subjects affected, likely
      consequences, and measures taken or proposed.
    </p>

    <h2>10. Data Protection Impact Assessments</h2>
    <p>
      FarajaSoft will provide reasonable cooperation and information to support the Customer in carrying
      out data protection impact assessments (DPIAs) where required.
    </p>

    <h2>11. Audit Rights</h2>
    <p>
      Upon 30 days' written notice, FarajaSoft will provide the Customer with information reasonably
      necessary to demonstrate compliance with this DPA. Customers may conduct an audit (at their own
      cost) no more than once per year, subject to reasonable confidentiality obligations.
    </p>

    <h2>12. Return and Deletion of Data</h2>
    <p>
      Upon termination of the Service, FarajaSoft will make Customer data available for export for 30 days.
      Thereafter, all personal data will be securely deleted or anonymised, except where retention is
      required by Kenyan law (e.g., seven-year payroll record retention under the Income Tax Act).
    </p>

    <h2>13. Contact</h2>
    <p>
      Data Protection Officer — FarajaSoft Limited<br />
      Email: <a href="mailto:dpo@farajasoft.com">dpo@farajasoft.com</a><br />
      Nairobi, Kenya
    </p>
  </LegalLayout>
);

export default DataProcessingAgreement;

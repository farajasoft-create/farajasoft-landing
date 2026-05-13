import LegalLayout from "@/components/layout/LegalLayout";

const SecurityOverview = () => (
  <LegalLayout
    title="Security Overview"
    subtitle="How FarajaSoft protects your employee and payroll data at every layer of the stack."
    lastUpdated="1 May 2025"
  >
    <p>
      Security is foundational to FarajaSoft. HR and payroll data is among the most sensitive information
      an organisation holds, and we treat its protection accordingly. This page describes the technical and
      organisational controls we maintain.
    </p>

    <h2>1. Infrastructure</h2>
    <h3>1.1 Cloud provider</h3>
    <p>
      FarajaSoft is hosted exclusively on Amazon Web Services (AWS) in the Africa (Cape Town) region
      (af-south-1), keeping your data on the continent and within reach of Kenyan data sovereignty
      requirements. AWS holds ISO 27001, SOC 2 Type II, and PCI DSS certifications.
    </p>
    <h3>1.2 Redundancy and availability</h3>
    <ul>
      <li>Multi-availability-zone deployment for failover</li>
      <li>Automated daily database snapshots retained for 30 days</li>
      <li>Point-in-time recovery (PITR) with an RPO of &lt; 5 minutes</li>
      <li>Target uptime: 99.5% monthly</li>
    </ul>

    <h2>2. Encryption</h2>
    <ul>
      <li><strong>At rest:</strong> AES-256 encryption for all database storage, backups, and file uploads</li>
      <li><strong>In transit:</strong> TLS 1.3 enforced on all connections; older protocol versions rejected</li>
      <li><strong>Key management:</strong> AWS Key Management Service (KMS) with customer-managed key rotation</li>
      <li><strong>Passwords:</strong> Bcrypt hashing with per-user salts; plaintext passwords never stored</li>
    </ul>

    <h2>3. Access Control</h2>
    <h3>3.1 Inside the platform</h3>
    <ul>
      <li>Role-based access control (RBAC) — HR Admin, Payroll Officer, Line Manager, Employee, and custom roles</li>
      <li>Field-level permissions — payslip data can be restricted to payroll staff only</li>
      <li>Audit log — every data access and change is logged with user, timestamp, and IP</li>
      <li>Session management — automatic logout after 30 minutes of inactivity</li>
    </ul>
    <h3>3.2 FarajaSoft internal access</h3>
    <ul>
      <li>Least-privilege principle — engineers have no standing access to production customer data</li>
      <li>Break-glass procedure with mandatory dual approval and full audit trail for emergency access</li>
      <li>Multi-factor authentication (MFA) required for all internal systems</li>
      <li>VPN-only access to production infrastructure</li>
    </ul>

    <h2>4. Authentication</h2>
    <ul>
      <li>Email + password with enforced minimum complexity requirements</li>
      <li>Time-based one-time password (TOTP) MFA available to all users; enforceable by administrators</li>
      <li>Single Sign-On (SSO) via SAML 2.0 and OAuth 2.0 (available on Business and Enterprise plans)</li>
      <li>Brute-force protection — accounts locked after 5 failed attempts with progressive delays</li>
    </ul>

    <h2>5. Network Security</h2>
    <ul>
      <li>Web Application Firewall (WAF) with OWASP ruleset, rate limiting, and DDoS mitigation</li>
      <li>Virtual Private Cloud (VPC) with private subnets for all data-tier services</li>
      <li>Intrusion detection and network flow logging via AWS GuardDuty</li>
      <li>IP allowlisting available on Enterprise plans</li>
    </ul>

    <h2>6. Application Security</h2>
    <ul>
      <li>OWASP Top 10 addressed in our secure development lifecycle (SDLC)</li>
      <li>Static analysis (SAST) and dependency vulnerability scanning on every pull request</li>
      <li>Annual third-party penetration test by an independent CREST-certified firm</li>
      <li>Responsible disclosure programme — report vulnerabilities to <a href="mailto:security@farajasoft.com">security@farajasoft.com</a></li>
      <li>Security patches deployed within 24 hours for critical CVEs, 7 days for high severity</li>
    </ul>

    <h2>7. Data Segregation</h2>
    <p>
      Each customer's data is logically isolated at the database level using tenant-scoped schemas.
      Application-level middleware enforces tenant boundaries on every request; cross-tenant data access is
      architecturally impossible without an authenticated session.
    </p>

    <h2>8. Payroll Data Handling</h2>
    <p>
      Payroll data — including salary figures, bank account details, and statutory identifiers (KRA PIN,
      NHIF/NSSF numbers) — is classified as highly sensitive and subject to additional controls:
    </p>
    <ul>
      <li>Displayed only to users with explicit payroll role permissions</li>
      <li>Redacted in application logs and error reports</li>
      <li>Transmitted to statutory portals (KRA, NHIF, NSSF) over encrypted government API endpoints</li>
    </ul>

    <h2>9. Incident Response</h2>
    <p>
      FarajaSoft maintains a documented incident response plan reviewed annually. In the event of a
      security incident affecting Customer data:
    </p>
    <ul>
      <li>Affected Customers notified within 72 hours</li>
      <li>Root-cause analysis and remediation report provided within 14 days</li>
      <li>ODPC (Kenya) notification made within statutory timeframes</li>
    </ul>

    <h2>10. Compliance and Certifications</h2>
    <ul>
      <li>Kenya Data Protection Act, 2019 — registered with the Office of the Data Protection Commissioner</li>
      <li>GDPR — Standard Contractual Clauses in place for EU data subjects</li>
      <li>KRA — compliant payroll reporting and P9 form generation</li>
      <li>Annual SOC 2 Type II audit in progress (target: Q4 2025)</li>
    </ul>

    <h2>11. Employee Security</h2>
    <ul>
      <li>Background checks for all employees handling Customer data</li>
      <li>Mandatory data protection and security awareness training on joining and annually</li>
      <li>Signed confidentiality agreements</li>
      <li>Offboarding procedure includes immediate revocation of all system access</li>
    </ul>

    <h2>12. Contact</h2>
    <p>
      To report a security vulnerability or ask a security question:<br />
      Email: <a href="mailto:security@farajasoft.com">security@farajasoft.com</a><br />
      We aim to acknowledge all reports within 24 hours.
    </p>
  </LegalLayout>
);

export default SecurityOverview;

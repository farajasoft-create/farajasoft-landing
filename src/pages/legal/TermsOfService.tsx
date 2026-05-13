import LegalLayout from "@/components/layout/LegalLayout";

const TermsOfService = () => (
  <LegalLayout
    title="Terms of Service"
    subtitle="The agreement that governs your use of the FarajaSoft ERP & HRMS platform."
    lastUpdated="1 May 2025"
  >
    <h2>1. Acceptance of Terms</h2>
    <p>
      By accessing or using the FarajaSoft ERP and HRMS platform ("Service"), you agree to be bound by
      these Terms of Service ("Terms") and our Privacy Policy. If you are entering into these Terms on
      behalf of a company or organisation, you represent that you have authority to bind that entity.
    </p>

    <h2>2. Definitions</h2>
    <ul>
      <li><strong>"FarajaSoft"</strong> — FarajaSoft Limited, a company registered in Kenya</li>
      <li><strong>"Customer"</strong> — the organisation that subscribes to the Service</li>
      <li><strong>"Users"</strong> — individuals authorised by the Customer to access the Service</li>
      <li><strong>"Content"</strong> — data, files, and information uploaded to the Service</li>
      <li><strong>"Subscription"</strong> — the plan selected by the Customer</li>
    </ul>

    <h2>3. Service Description</h2>
    <p>
      FarajaSoft provides a cloud-based ERP and HRMS platform covering core HR management, payroll
      processing, leave and attendance, performance management, recruitment, and related modules. Features
      vary by subscription tier. We reserve the right to update, modify, or discontinue features with
      reasonable notice.
    </p>

    <h2>4. Account Registration and Security</h2>
    <ul>
      <li>You must provide accurate and complete registration information.</li>
      <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
      <li>You must notify us immediately of any unauthorised access at <a href="mailto:support@farajasoft.com">support@farajasoft.com</a>.</li>
      <li>Each User account is personal and may not be shared.</li>
    </ul>

    <h2>5. Subscription and Payment</h2>
    <h3>5.1 Fees</h3>
    <p>
      Subscription fees are billed monthly or annually as selected at sign-up. All amounts are in Kenyan
      Shillings (KES) unless otherwise stated. Prices exclude VAT where applicable.
    </p>
    <h3>5.2 Payment methods</h3>
    <p>
      We accept payment via M-Pesa, bank transfer (Equity Bank, KCB), and major debit/credit cards.
      Recurring billing is initiated on the same date each billing cycle.
    </p>
    <h3>5.3 Late payment</h3>
    <p>
      Accounts with outstanding invoices beyond 14 days may be suspended. Access is restored within 24
      hours of payment confirmation.
    </p>
    <h3>5.4 Refunds</h3>
    <p>
      Annual subscriptions are refundable on a pro-rata basis within 30 days of payment if the Service has
      not been used for payroll processing. Monthly subscriptions are non-refundable.
    </p>

    <h2>6. Acceptable Use</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Use the Service for any unlawful purpose or in violation of Kenyan law</li>
      <li>Upload false, fraudulent, or misleading employee or payroll data</li>
      <li>Attempt to reverse-engineer, decompile, or extract the source code of the platform</li>
      <li>Use automated scripts to scrape or stress-test the Service without prior written consent</li>
      <li>Resell or white-label the Service without an authorised partner agreement</li>
    </ul>

    <h2>7. Data Ownership</h2>
    <p>
      You retain full ownership of all Content you upload. FarajaSoft processes your Content solely to
      deliver the Service. On termination, you may request an export of your data within 30 days; after
      that period FarajaSoft may delete your Content subject to statutory retention requirements.
    </p>

    <h2>8. Statutory Compliance</h2>
    <p>
      FarajaSoft provides tools to assist with KRA PAYE submissions, NHIF contributions, NSSF contributions,
      and HELB deductions. Customers remain responsible for the accuracy of data entered and for timely
      filing with the relevant authorities. FarajaSoft is not liable for penalties arising from incorrect
      data provided by the Customer.
    </p>

    <h2>9. Intellectual Property</h2>
    <p>
      All software, algorithms, trademarks, and documentation constituting the Service are the exclusive
      property of FarajaSoft Limited. No licence other than the right to use the Service as described
      herein is granted.
    </p>

    <h2>10. Confidentiality</h2>
    <p>
      Each party agrees to keep the other's confidential information (including pricing, technical
      architecture, and employee data) strictly confidential and not to disclose it to third parties without
      prior written consent, except as required by law.
    </p>

    <h2>11. Uptime and Support</h2>
    <p>
      FarajaSoft targets 99.5% monthly uptime excluding scheduled maintenance windows (notified 48 hours in
      advance). Support is available Monday–Friday 08:00–18:00 EAT via email, WhatsApp, and phone.
    </p>

    <h2>12. Limitation of Liability</h2>
    <p>
      To the maximum extent permitted by applicable law, FarajaSoft's total liability for any claim arising
      out of or relating to the Service shall not exceed the fees paid by the Customer in the three (3)
      months preceding the claim. FarajaSoft is not liable for indirect, incidental, or consequential damages.
    </p>

    <h2>13. Indemnification</h2>
    <p>
      You agree to indemnify FarajaSoft against claims, damages, and costs arising from your misuse of the
      Service, violation of these Terms, or infringement of any third-party rights.
    </p>

    <h2>14. Termination</h2>
    <p>
      Either party may terminate the subscription with 30 days' written notice. FarajaSoft may terminate
      immediately for material breach, non-payment, or misuse. On termination, access ceases and data
      export rights apply as described in Section 7.
    </p>

    <h2>15. Governing Law</h2>
    <p>
      These Terms are governed by the laws of Kenya. Disputes shall be resolved by the courts of Nairobi,
      Kenya, subject first to good-faith negotiation and, if unresolved, mediation under the Nairobi Centre
      for International Arbitration (NCIA) rules.
    </p>

    <h2>16. Changes to Terms</h2>
    <p>
      We may update these Terms with 30 days' notice. Continued use after the effective date constitutes
      acceptance. If you object to material changes, you may terminate your subscription without penalty
      within that 30-day window.
    </p>

    <h2>17. Contact</h2>
    <p>
      FarajaSoft Limited<br />
      Email: <a href="mailto:legal@farajasoft.com">legal@farajasoft.com</a><br />
      Phone: 0752 772 590<br />
      Nairobi, Kenya
    </p>
  </LegalLayout>
);

export default TermsOfService;

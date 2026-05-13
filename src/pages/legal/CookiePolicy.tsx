import LegalLayout from "@/components/layout/LegalLayout";

const CookiePolicy = () => (
  <LegalLayout
    title="Cookie Policy"
    subtitle="How FarajaSoft uses cookies and similar tracking technologies on our platform."
    lastUpdated="1 May 2025"
  >
    <h2>1. What Are Cookies?</h2>
    <p>
      Cookies are small text files placed on your device when you visit a website or use a web application.
      They allow the site to remember your actions and preferences over time, so you don't have to re-enter
      them every visit.
    </p>

    <h2>2. How We Use Cookies</h2>
    <p>FarajaSoft uses cookies to:</p>
    <ul>
      <li>Keep you securely logged in to the platform</li>
      <li>Remember your language, theme, and UI preferences</li>
      <li>Protect against cross-site request forgery (CSRF)</li>
      <li>Understand how features are used so we can improve them</li>
      <li>Measure the effectiveness of our marketing on external sites</li>
    </ul>

    <h2>3. Types of Cookies We Use</h2>

    <h3>3.1 Strictly Necessary</h3>
    <p>
      These cookies are essential for the platform to function. They cannot be disabled. Examples include
      session tokens, CSRF protection tokens, and load-balancer routing cookies.
    </p>

    <h3>3.2 Functional</h3>
    <p>
      These remember your preferences (e.g., selected payroll period, saved filters, display density).
      Disabling them may reduce convenience but will not break core functionality.
    </p>

    <h3>3.3 Analytics</h3>
    <p>
      We use privacy-respecting analytics to understand aggregate usage patterns — which modules are most
      used, where users encounter errors, and how long onboarding takes. Data is anonymised and never
      sold. You can opt out in your account settings.
    </p>

    <h3>3.4 Marketing</h3>
    <p>
      Only on our public marketing website (farajasoft.com), not inside the platform. These cookies help
      us measure campaign effectiveness. They are only set with your explicit consent via our cookie
      consent banner.
    </p>

    <h2>4. Third-Party Cookies</h2>
    <p>Some features embed third-party services that may set their own cookies:</p>
    <ul>
      <li><strong>Intercom</strong> — in-app chat support</li>
      <li><strong>Google Analytics</strong> — marketing website analytics (consent-gated)</li>
      <li><strong>Stripe / M-Pesa</strong> — payment processing (strictly necessary for billing flows)</li>
    </ul>
    <p>
      These third parties operate under their own privacy policies. We have data processing agreements in
      place with each of them.
    </p>

    <h2>5. Cookie Retention Periods</h2>
    <ul>
      <li><strong>Session cookies</strong> — deleted when you close your browser</li>
      <li><strong>Authentication tokens</strong> — 30 days (extended on activity)</li>
      <li><strong>Preference cookies</strong> — 1 year</li>
      <li><strong>Analytics cookies</strong> — 13 months</li>
      <li><strong>Marketing cookies</strong> — 90 days</li>
    </ul>

    <h2>6. Managing Cookies</h2>
    <p>You can control cookies in several ways:</p>
    <ul>
      <li>
        <strong>Cookie consent banner:</strong> On your first visit to our marketing site, choose which
        non-essential cookies to accept.
      </li>
      <li>
        <strong>Browser settings:</strong> Most browsers let you block or delete cookies. Note that
        blocking strictly necessary cookies will prevent you from logging in.
      </li>
      <li>
        <strong>Platform settings:</strong> Logged-in users can manage analytics preferences under
        Account → Privacy.
      </li>
    </ul>

    <h2>7. Do Not Track</h2>
    <p>
      We respect the "Do Not Track" browser signal. When detected, we disable analytics and marketing
      cookies automatically.
    </p>

    <h2>8. Changes to This Policy</h2>
    <p>
      We may update this Cookie Policy as technology or regulations change. We will notify you of
      significant changes via email or an in-app notification.
    </p>

    <h2>9. Contact</h2>
    <p>
      For questions about our use of cookies:<br />
      Email: <a href="mailto:privacy@farajasoft.com">privacy@farajasoft.com</a><br />
      Phone: 0752 772 590
    </p>
  </LegalLayout>
);

export default CookiePolicy;

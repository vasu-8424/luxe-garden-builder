import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Privacy Policy | RR Heaven Gardenblr";
const description =
  "How RR Heaven Gardenblr collects, uses and protects the personal information you share with us.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Your information, handled with care."
      crumbLabel="Privacy Policy"
      sections={[
        {
          h: "Information we collect",
          p: "We collect only what we need to respond to you: your name, phone number, email address, the service you are interested in, and any project details you choose to share through our enquiry forms or WhatsApp.",
        },
        {
          h: "How we use it",
          p: "Your details are used to arrange site visits, prepare estimates, deliver orders and provide after-sales support. We may contact you about your enquiry by phone, WhatsApp or email.",
        },
        {
          h: "What we never do",
          p: "We do not sell, rent or trade your personal information. We do not share it with third parties except where strictly necessary to fulfil your order, such as with a delivery partner.",
        },
        {
          h: "Cookies and analytics",
          p: "This website may use basic analytics to understand which pages are useful. No personally identifying information is collected through these measurements.",
        },
        {
          h: "Data retention",
          p: "Enquiry records are retained only as long as needed for service history and statutory requirements. You may ask us to delete your details at any time.",
        },
        {
          h: "Contact",
          p: "For any privacy question, write to gowdanavi444@gmail.com or call +91 9448276985.",
        },
      ]}
    />
  );
}

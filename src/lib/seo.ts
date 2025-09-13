import type { Metadata } from "next";

export const SITE = {
  name: "Πασσαλής Ακουστικά",
  legalName: "Passalis Hearing Aids",
  url: "https://passalis-akoustika.gr",
  locale: "el_GR",
  telephone: "+30 210 612 9896",
  email: "akoustika.passalis@gmail.com",
  streetAddress: "Δολιανής 74 & Λεωφ. Κηφισίας 127",
  addressLocality: "Μαρούσι",
  postalCode: "151 24",
  countryCode: "GR",
  ogImage: "/og/default.jpg",
  logo: "/logo1.svg",
  favicon: "/favicon.ico",
};

export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  icons: {
    icon: SITE.favicon,
    shortcut: SITE.favicon,
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "Ακουστικά Βαρηκοΐας στο Μαρούσι – Πασσαλής Ακουστικά",
    template: "%s | Πασσαλής Ακουστικά",
  },
  description:
    "Δωρεάν έλεγχος ακοής, εξατομικευμένη εφαρμογή και πλήρη υποστήριξη. Ακουστικά βαρηκοΐας στο Μαρούσι με συμμετοχή ΕΟΠΥΥ 450€.",
  keywords: [
    "ακουστικά βαρηκοΐας",
    "Μαρούσι",
    "ΕΟΠΥΥ",
    "Signia",
    "CIC",
    "RIC",
    "BTE",
  ],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    images: [{ url: SITE.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true, nocache: false },
};

export function pageMeta({
  title,
  description,
  path,
  image,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : absoluteUrl(SITE.ogImage);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      url,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const orgJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  telephone: SITE.telephone,
  email: SITE.email,
  image: absoluteUrl(SITE.logo),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.streetAddress,
    addressLocality: SITE.addressLocality,
    postalCode: SITE.postalCode,
    addressCountry: SITE.countryCode,
  },
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  inLanguage: "el",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const faqJsonLd = (qa: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qa.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const contactJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: absoluteUrl("/epikoinonia"),
  inLanguage: "el",
});

export const aboutJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: absoluteUrl("/sxetika-me-mas"),
  inLanguage: "el",
});

export const TYPE_META: Record<
  string,
  { title: string; description: string; path: string }
> = {
  cic: {
    title: "Ενδοκαναλικά (CIC) Ακουστικά Βαρηκοΐας – Διακριτική λύση",
    description:
      "Σχεδόν αόρατα ακουστικά που εφαρμόζουν βαθιά στο κανάλι. Ιδανικά για διακριτική εμφάνιση με φυσικό ήχο.",
    path: "/akoustika/cic",
  },
  ric: {
    title: "Ακουστικά Ανοιχτής Εφαρμογής (RIC) – Φυσικός ήχος",
    description:
      "Άνεση και υψηλή απόδοση με φυσική μεταφορά ήχου. Διακριτικός σχεδιασμός και εξατομικευμένη ρύθμιση.",
    path: "/akoustika/ric",
  },
  bte: {
    title: "Οπισθωτιαία (BTE) Ακουστικά – Ισχύς & αξιοπιστία",
    description:
      "Ανθεκτικά και ισχυρά για κάθε επίπεδο απώλειας. Εύχρηστα, αξιόπιστα και κατάλληλα για καθημερινή χρήση.",
    path: "/akoustika/bte",
  },
  rechargeable: {
    title: "Επαναφορτιζόμενα Ακουστικά – Χωρίς μπαταρίες",
    description:
      "Τέλος στις μπαταρίες μίας χρήσης. Επαναφορτιζόμενα ακουστικά με ευκολία και οικολογική χρήση.",
    path: "/akoustika/rechargeable",
  },
};

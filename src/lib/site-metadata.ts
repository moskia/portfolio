import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const SITE_URL = "https://moskia.github.io/portfolio";
const OG_IMAGE = `${SITE_URL}/portfolio/og-image.png`;

type PageMetadataInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
};

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

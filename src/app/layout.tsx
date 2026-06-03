import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://falsafi.ae"),
  title: "Falsafi | Premium Advertising & Branding Solutions UAE",
  description: "Falsafi is a premier advertising, branding, and digital signage company in Ajman & Dubai, UAE. We provide LED displays, custom signage, vehicle graphics, events, large-format printing, and drawing classes.",
  keywords: [
    "Advertising company in ajman",
    "Sign board work in dubai",
    "Digital signage uae",
    "Branding solutions ajman",
    "LED display services ajman",
    "Falsafi Advertising",
    "Vehicle graphics dubai",
    "Exhibition custom stands UAE",
    "Art classes Ajman"
  ],
  authors: [{ name: "Falsafi" }],
  robots: "index, follow",
  openGraph: {
    title: "Falsafi | Premium Advertising & Branding Solutions UAE",
    description: "Cinematic digital displays, vehicle branding, custom stands, premium printing, and art education. Falsafi is your comprehensive creative production partner in the UAE.",
    url: "https://falsafi.ae",
    siteName: "Falsafi Advertising",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Falsafi Premium Advertising & Branding Solutions UAE"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falsafi | Premium Advertising & Branding Solutions UAE",
    description: "Cinematic digital displays, vehicle branding, custom stands, premium printing, and art education. Falsafi is your comprehensive creative production partner in the UAE.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://falsafi.ae",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
                  if (!saved) {
                    localStorage.setItem('theme', 'dark');
                  }
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}


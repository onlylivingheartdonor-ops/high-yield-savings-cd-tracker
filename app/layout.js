export const metadata = {
  title: "High-Yield Saving & CD Calculator | Select Only the Best Investments",
  description: "Calculate interest earnings on high-yield savings accounts and CDs. Compare compounding frequencies, see a full growth schedule, and find out what your money is really earning.",
  
  alternates: {
    canonical: "https://www.highyieldsavingscalculator.com",           // ← MUST CHANGE
  },

  openGraph: {
    title: "High-Yield Saving & CD Calculator | Select Only the Best Investments",
    description: "Calculate interest earnings on high-yield savings accounts and CDs. Compare compounding frequencies, see a full growth schedule, and find out what your money is really earning.",
    url: "https://www.highyieldsavingscalculator.com",                 // ← MUST CHANGE
    siteName: "Moneywise Calculators",             // ← Change
    images: [
      {
        url: "https://www.highyieldsavingscalculator.com/og-image.png", // ← MUST CHANGE
        width: 1200,
        height: 630,
        alt: "High-Yield Saving & CD Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "High-Yield Saving & CD Calculator | Select Only the Best Investments",
    description: "Calculate interest earnings on high-yield savings accounts and CDs. Compare compounding frequencies, see a full growth schedule, and find out what your money is really earning.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  authors: [{name: "David Graham" }],
  creator: "MoneyWise Calculators",
  publisher: "MoneyWise Calculators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475627763908800"
          crossOrigin="anonymous"
        ></script>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "high-yield-savings-cd-tracker",
              description: "Financial calculator tool",
              url: "https://www.high-yield-savings-cd-tracker.com",
              applicationCategory: "Finance",
              operatingSystem: "All",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
            }),
          }}
        />
    </head>
      <body>{children}</body>
    </html>
  );
}

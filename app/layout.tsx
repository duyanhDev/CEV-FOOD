import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: {
    default: "STAVI - Dịch vụ cung cấp suất ăn công nghiệp, suất ăn trường học uy tín",
    template: "%s | STAVI",
  },
  description:
    "STAVI cung cấp dịch vụ suất ăn công nghiệp, suất ăn trường học chất lượng cao. Phục vụ hơn 850+ khách hàng với 15+ năm kinh nghiệm trên toàn quốc.",
  keywords:
    "suất ăn công nghiệp, suất ăn trường học, dịch vụ ăn uống, catering, STAVI, nhà hàng công nghiệp, thực phẩm an toàn",
  authors: [{ name: "STAVI" }],
  creator: "STAVI",
  publisher: "STAVI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://stavi.com.vn",
    siteName: "STAVI",
    title: "STAVI - Dịch vụ cung cấp suất ăn công nghiệp uy tín",
    description: "Cung cấp suất ăn công nghiệp và trường học chất lượng cao với 15+ năm kinh nghiệm",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STAVI - Dịch vụ suất ăn công nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAVI - Dịch vụ cung cấp suất ăn công nghiệp uy tín",
    description: "Cung cấp suất ăn công nghiệp và trường học chất lượng cao với 15+ năm kinh nghiệm",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <link rel="canonical" href="https://stavi.com.vn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ea580c" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "STAVI",
              url: "https://stavi.com.vn",
              logo: "https://stavi.com.vn/logo.png",
              description: "Dịch vụ cung cấp suất ăn công nghiệp, suất ăn trường học uy tín",
              telephone: "0917325858",
              address: {
                "@type": "PostalAddress",
                addressCountry: "VN",
                addressLocality: "Hà Nội, TP.HCM",
              },
              sameAs: ["https://facebook.com/stavi", "https://youtube.com/stavi"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

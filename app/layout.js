export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>High-Yield Saving & CD Calculator</title>
        <meta
          name="description"
          content="Calculate interest earnings on high-yield savings accounts and CDs. Compare compounding frequencies, see a full growth schedule, and find out what your money is really earning."
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475627763908800"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}



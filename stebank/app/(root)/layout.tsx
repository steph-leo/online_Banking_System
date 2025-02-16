export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          SIDEBAR
          {children}
        </main>
      </body>
    </html>
  );
}

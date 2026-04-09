import "./globals.css";

export const metadata = {
  title: "XenAI",
  description: "Agentic Operating System for Healthcare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dynamic-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}
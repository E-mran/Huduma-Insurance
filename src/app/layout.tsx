import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    default: "Huduma Insurance",
    template: `%s - Huduma Insurance`,
  },
  description: "The official Huduma Insurance website",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="prose-light dark:prose-dark">
        <div>{children}</div>
      </body>
    </html>
  );
}

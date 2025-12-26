import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priya Khatik | Data Analytics Engineer",
  description:
    "Portfolio of Priya Khatik — Data Analytics Engineer. Pipelines, analytics engineering, data modeling, BI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
"use client";

import { Inter } from "next/font/google";
import { Navigation } from "@/components";
import { ThemeProvider } from "styled-components";
import themes from "@/styles/theme";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider theme={themes}>
          <StyledComponentsRegistry>
            <Navigation />
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}

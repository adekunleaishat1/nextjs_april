import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import ApolloProvider from "@/shared/provider/ApolloProvider";
import { Toaster } from "sonner";
import { APP_NAME, APP_DESCRIPTION, SECURE_URL } from "@/constants";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-sen",
});

export const metadata: Metadata = {
  title: {
    template: "%S | Finsweet",
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SECURE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sen.variable} antialiased`}>
        <ApolloProvider>
          {children}
          <Toaster />
        </ApolloProvider>
      </body>
    </html>
  );
}

import Nav from "../components/nav/Nav";
import "./globals.css";
import { codecproRegular } from "@/utils/font";

export const metadata = {
  title: "Team 17 | Game Store | Buy Video Games Online",
  description:
    "Team 17 Game Store - Buy the latest video games online at affordable prices. We offer a wide selection of games for all platforms including PlayStation, Xbox, Nintendo, and PC.",
  keywords:
    "Team 17, game store, video games, PlayStation, Xbox, Nintendo, PC games",
  creator: "Evan",
  openGraph: {
    title: "Team17 | Indie Games developed by Independent Developers",
    description:
      "Team17 is a games label by independent developers for independent developers. Home to 90+ premium, indie games including the original Worms",
  },
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={codecproRegular.variable}>
        <nav>
          <Nav />
        </nav>
        {children}
      </body>
    </html>
  );
}

import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

//export local font
export const codecProUltra: NextFontWithVariable = localFont({
  src: [
    {
      path: "../public/font/codec-pro-ultra/codec-pro-ultra.ttf",
      weight: "400",
    },
  ],
  variable: "--font-codec-pro-ultra",
});

export const codecproRegular: NextFontWithVariable = localFont({
  src: [
    {
      path: "../public/font/codec-pro-regular/codec-pro.regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-codec-pro",
});

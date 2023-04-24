import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ZupassProvider } from "zukit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ZupassProvider
      passportClientURL="http://localhost:3000"
      passportServerURL="http://localhost:3002"
    >
      <Component {...pageProps} />
    </ZupassProvider>
  );
}

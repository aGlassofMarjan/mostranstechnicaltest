import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"

import { Providers } from './providers';
import { ThemeProvider } from '@/context/Themecontext';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mostrans Test",
  description: "Mostrans technical test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>


        {/* apparently navbar on bootstrap 5 need this cdn to work, still find way to use npm instead */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}

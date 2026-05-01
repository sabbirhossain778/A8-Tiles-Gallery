import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: "Tiles Gallery | Premium Tile Collections",
  description: "Discover the finest collection of premium tiles for your home. From modern ceramics to luxury marble, find the perfect aesthetic for your living space at Tiles Gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
        </body>
    </html>
  );
}

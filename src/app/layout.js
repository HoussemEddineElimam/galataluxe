import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import FacebookPixel from "@/components/FacebookPixel";
import Footer from "@/components/Footer";
import { fetchData } from "./(front)/page";
const inter = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Galata Luxe",
  description: "بيع أحذية عالية الجودة  Vendre des chaussures de haute qualité",
};
export default async function RootLayout({ children }) {
  const categories = await fetchData("/categories");
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div className="min-h-screen felx flex-col px-2">
          <Header />
        {children}
        <FacebookPixel/>
        
        </div>
        <img height="1" width="1" style={{display:"none"}}
src="https://www.facebook.com/tr?id=1097978251444631&ev=PageView&noscript=1"
/>
        <Footer categories={categories}/>
        </body>
    </html>
  );
}

import { Oswald } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/Header";
import Image from "next/image";
const inter = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Galata Luxe",
  description: "بيع أحذية عالية الجودة  Vendre des chaussures de haute qualité",
};

export default function FrontLayout({ children }) {
  return (<>
   
    <main id="modal-root" className="flex-grow container mx-auto">
        {children}
    </main></>
  );
}

import MarqueeLine from "@/components/shared/MarqueeLine";
import Image from "next/image";
import Banner from '../../../public/assets/banner.png'


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-90">
      Home page
      <Image src={Banner} alt="Banner"/>
      <MarqueeLine></MarqueeLine>
    </div>
  );
}

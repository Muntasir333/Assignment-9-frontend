import Banner from "@/component/Banner";
import Facilities from "@/component/Facilities";
import Tips from "@/component/Tips";
import TopFeatures from "@/component/Topfeatures";
import Image from "next/image";

export default function Home() {
  return (
     <div className='container mx-auto p-5'>
      <Banner></Banner>
      <Facilities></Facilities>
      <TopFeatures></TopFeatures>
      <Tips></Tips>
    </div>
  );
}

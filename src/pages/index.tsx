import Image from "next/image";
import { Inter, Raleway } from "next/font/google";
import { useEffect, useState } from "react";
import { Characters } from "./interfaces";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {

  const [character , setCharacter] = useState<Characters[]>([]);
  
  const getCharacter = async() =>{
    const response = await fetch('https://amiiboapi.com/api/amiibo/');
    const data = await response.json();
    return data.amiibo.slice(0, 20);
  }

  useEffect(()=>{
    getCharacter().then((data) => setCharacter(data))
  },[])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${raleway.className}`}
    >
      <h1 style={{color: "white"}}>Hola mundo</h1>
      <div className="grid grid-cols-4 gap-4">
        {character.map((item) =>(
          <div key={item.tail} className="col-span-1">
              <p>{item.name}</p>
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
              />
          </div>
        ))}
      </div>
    </main>
  );
}

'use client';
import Head from "next/head";
import React, { MouseEventHandler } from "react";
import { RandomFox } from "./Components/RandomFox";
import { useState } from "react";

const random = () => Math.floor(Math.random() * 123) + 1;

//generate  simple unique id
const generateId = () => Math.random().toString(36).substring(2, 9);

type ImageItems = { id: string, url: string}


export default function Home () {
const [images, setImages] = useState<Array<ImageItems>>([
  /* { id: generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},
  { id: generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},
  { id: generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},
  { id: generateId(), url:`https://randomfox.ca/images/${random()}.jpg`}, */
])

const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
   const newImageItem: ImageItems = {
    id: generateId(),
    url:`https://randomfox.ca/images/${random()}.jpg`
  }

  setImages([
    ...images,
    newImageItem
  ])
}


  return (
    <div>
      <Head>
        <title>PLATZI</title>
        <meta name='description' content='Generated by Platzi'/>
        <link rel='iconic' href='/favicon.ico' />
      </Head>

      <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={addNewFox}>Add new Fox</button>
      {images.map(({ id, url }) => (
        <div key={id} className='p-4'>
          <RandomFox image={url} />
        </div>
        
      )) }
      
      </main>

      <footer>

      </footer>
    </div>
  );
}

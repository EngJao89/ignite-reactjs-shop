import Head from 'next/head'
import Image from 'next/image'

import { HomeContainer, Product } from '@/styles/pages/home'

import camiseta1 from '../assets/products/1.png'
import camiseta2 from '../assets/products/2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer>
        <Product>
          <Image src={camiseta1} width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta X</strong>
            <span> R$ 79,90</span>
          </footer>
        </Product>

        <Product>
          <Image src={camiseta2} width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta Y</strong>
            <span> R$ 79,90</span>
          </footer>
        </Product>

      </HomeContainer>
    </>
  )
}

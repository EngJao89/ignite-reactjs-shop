import Head from 'next/head'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { HomeContainer, Product } from '@/styles/pages/home'

import camiseta1 from '../assets/products/1.png'
import camiseta2 from '../assets/products/2.png'
import camiseta3 from '../assets/products/3.png'
import camiseta4 from '../assets/products/4.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        <Product>
          <Image src={camiseta1} width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta Beyound Limits</strong>
            <span> R$ 79,90</span>
          </footer>
        </Product>

        <Product>
          <Image src={camiseta2} width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta Explorer</strong>
            <span> R$ 79,90</span>
          </footer>
        </Product>

        <Product>
          <Image src={camiseta3} width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta Ignite Lab</strong>
            <span> R$ 79,90</span>
          </footer>
        </Product>

        <Product>
          <Image src={camiseta4} width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta Ignite Board</strong>
            <span> R$ 79,90</span>
          </footer>
        </Product>

      </HomeContainer>
    </>
  )
}

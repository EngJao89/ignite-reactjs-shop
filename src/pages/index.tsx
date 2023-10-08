import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from "next"

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe"

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

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}

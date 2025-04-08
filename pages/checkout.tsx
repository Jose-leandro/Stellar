import React from 'react'
import Footer from '../app/components/footer'
import Header from '../app/components/header'
import Head from 'next/head'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify';

const decreaseQuantity = () => {

}

const increaseQuantity = () => {

}

export default function Checkout() {
    const subtotalValule = "R$ 40"
    const ShippingValue = "R$ 1"
    const taxValule = "R$ 2"
    const totalValule = "R$ 100"

    const products = [
        {
          id: 1,
          name: "Tênis Esportivo",
          price: 199.99,
          quantity: 2,
          imageUrl: "/img/binoculo-produto-2.jpg"
        },
        {
          id: 2,
          name: "Camiseta Básica",
          price: 79.90,
          quantity: 1,
          imageUrl: "/img/binoculo-produto-2.jpg"
        }
      ];
      
      
    return (
        <>
        <Head>
        <title>Checkout - Stellar</title>
        <meta name="description" content="" />
      </Head>
      <Header />

      <main>
        <section className='flex flex-col items-center justify-center w-full'>
            <h1 className="font-bold text-2xl w-1/6 mb-3" >Checkout</h1>
            <div>
                <h2 className='text-xl mb-3'>
                    Your Cart
                </h2>

                {products.map((product, index) => (
                    <div key={index} className='flex justify-around mb-6 mt-2'>
                        <Image src={product.imageUrl} alt={product.name} height={100} width={100} />

                        <div className='flex-col justify-around'>
                        <h3 className='text-xl'>{product.name}</h3>
                        <span className='mt-1'>R$ {product.price.toFixed(2)}</span>

                        <div className='flex justify-around items-center mt-4'>
                            <button className='bg-slate-500 w-6 h-6 rounded-sm' onClick={() => decreaseQuantity(product.id)}>
                            -
                            </button>

                            <span>{product.quantity}</span>

                            <button className='w-6 bg-slate-700 h-6' onClick={() => increaseQuantity(product.id)}>
                            +
                            </button>
                        </div>
                        </div>

                        <button className='ml-3 text-1xl'>
                            X
                        </button>
                    </div>
                ))}

                <div>
                    <h4>
                        Order Summary
                    </h4>

                    <div>
                        <h5>Subtotal</h5>

                        <span> {subtotalValule} </span>
                    </div>

                    <div>
                        <h4>Shipping</h4>

                        <span> {ShippingValue} </span>
                    </div>

                    <div>
                        <h4>Tax</h4>

                        <span> {taxValule} </span>
                    </div>

                    <div>
                        <h4>Total</h4>

                        <span> {totalValule} </span>
                    </div>
                </div>

                <form>
                    <section>
                        <div>
                            <img></img>

                            <h5>Delivery Information</h5>
                        </div>
                        <div>
                            <input placeholder='First Name' type="text">
                            </input>

                            <input placeholder='Last Name' type="text">
                            </input>
                        </div>

                        <input placeholder='Address'></input>

                        <div>
                            <input placeholder='City' type="text">
                            </input>

                            <input placeholder='Postal Code' type="number">
                            </input>
                        </div>
                    </section>

                    <section>
                        <div>
                            <img></img>

                            <h5>Payment Information</h5>
                        </div>

                        <input placeholder='Card Number' type="number">
                        </input>


                        <div>
                            <input placeholder='MM/YY' type="text">
                            </input>

                            <input placeholder='CVC' type="number">
                            </input>
                        </div>
                    </section>

                    <button>Complete Purchase</button>
                </form>

            </div>
        </section>
        </main>
    <Footer />
    </>
    )
}
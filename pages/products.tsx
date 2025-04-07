import React from 'react'
import Header from '../app/components/header'
import { Main } from '../app/components/main/main'
import Footer from '../app/components/footer'
import Head from 'next/head'
import NavGategories from '../app/components/products/nav-categories'

export default function Products(categories): React.JSX.Element {
    return (
        <>
            <Head>
                <title> {NameOfproduct} - Stellar</title>
                <meta name="description" content="" />
            </Head>
            <Header />
            <section>
                <NavGategories categories={categories} />
            </section>
            <Footer />
        </>
    )
}
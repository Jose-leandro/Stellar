import React from "react";
import Separator from "./ui/separator";
import Link from "next/link";

// Component for Section Titles
const SectionTitle = ({ children, itIsPowerStellar, itIsPageHome }) => {
    console.log(children); // Log children before returning JSX

    return (
        <h1 className={`${itIsPowerStellar ? 'text-3xl sm:text-5xl' : 'text-4xl sm:text-6xl'}
        ${itIsPageHome ? "text-7xl" : ""}
         font-medium ml-2 mt-8 sd:mt-2`}>
            {children}
        </h1>
    );
};

// Component for Paragraphs
const SectionParagraph = ({ children, itIsPageHome }) => (
    <p className={`${itIsPageHome ? "hidden" : "flex"}  ml-3 mt-4 sm:mt-4`}>{children}</p>
);


export default function Panel({ itIsPageHome, information }: { itIsPageHome: boolean, information: string }) {
    return (
        <section className="flex justify-center mt-1 w-full">
                <div className="flex justify-around flex-col items-center p-6 rounded-3xl w-[98.5%] bg-dark-yellow 
                                md:flex-row md:items-start ">

                    <div className="w-11/12 flex flex-col
                                    sm:w-auto 
                                    lg:w-5/12">
                        <SectionTitle itIsPowerStellar={false} itIsPageHome={itIsPageHome}> {information} </SectionTitle>
                        <SectionParagraph itIsPageHome={itIsPageHome}>
                            Stellar is your gateway to a global marketplace, designed for everyone—from ambitious entrepreneurs to individuals looking to declutter and sell second-hand items.
                        </SectionParagraph>
                    </div>

                    <div className={` ${itIsPageHome ? "hidden" : "flex" } w-11/12 flex-col h-auto justify-evenly
                                    sm:w-auto lg:w-5/12 lg:mt-7`}>
                        <div className="flex flex-col justify-around">
                            <SectionTitle itIsPowerStellar={true}>Experience the Power of Stellar</SectionTitle>
                            <Separator orientation='horizontal' />

                            <div className="flex justify-between">
                                <SectionParagraph>
                                    Effortlessly list your items and reach billions of potential buyers worldwide.
                                </SectionParagraph>
                                <SectionParagraph>
                                    With our robust security features, you can sell with confidence.
                                </SectionParagraph>
                            </div>
                        </div>

                        <Link href="/signup">
                            <button className="text-2xl mt-8 bg-slate-200 text-black rounded-sm py-2
                                           lg:text-4xl">Get Start to Sell Or Buy</button>
                        </Link>
                    </div>
                </div>
            </section>
    )
}
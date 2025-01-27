import React from "react";
import Separator from "../../ui/separator";

export default function Benefits(): React.JSX.Element {

    const benefits = {
        benefits1: {
            title: "Fast and Efficient Transactions",
            pathImg: "/img/rb_2149163754.png",
            widthOfBenefits: "w-auto lg:w-[300px]"
        },
        benefits2: {
            title: "Easy to Find What You Wan",
            pathImg: "/img/rb_24619.png",
            widthOfBenefits: "w-auto lg:w-[400px]"
        },
        benefits3: {
            title: "Sell Anything You Like",
            pathImg: "/img/rb_24619.png",
            widthOfBenefits: "w-auto lg:w-[450px]"
        },
        benefits5: {
            title: "Guaranteed by Stellar",
            pathImg: "/img/rb_24619.png",
            widthOfBenefits: "w-auto lg:w-[300px]"
        },
        benefits6: {
            title: "Guaranteed by Stellar",
            pathImg: "/img/rb_24619.png",
            widthOfBenefits: "w-auto lg:w-[550px]"
        },
        benefits8: {
            title: "Safe and Secure for Everyone",
            pathImg: "/img/rb_24619.png",
            widthOfBenefits: "w-auto lg:w-[300px]"
        },
        benefits7: {
            title: "Safe and Secure for Everyone",
            pathImg: "/img/rb_24619.png",
            widthOfBenefits: "w-auto lg:w-[700px]"
        }
    }

    return (
        <>

            <div className="w-40 mb-4">
                <h2 className="text-3xl sd:text-4xl font-semibold mb-1">The Benefits </h2>
                <Separator orientation="horizontal" widthOfSeparator="w-full" />
            </div>

            <div className="mt-8 ml-4 flex flex-wrap justify-start">

            {
                Object.values(benefits).map(({ title, pathImg, widthOfBenefits }, index) => (
                    <div key={index} className={`h-auto ${widthOfBenefits} mt-1 mr-4 mb-3`}>
                        <Separator orientation="horizontal" margin="ml-4 mr-4" />

                        <div className="flex h-full">

                            <Separator orientation="vertical" />

                            <div className={`bg-dark-blue flex rounded-2xl h-auto text-lg my-1 mx-1`} >

                                {/* <img className='w-32' src={pathImg} alt={`imagem that represent ${title}`} /> */}
                                <div>
                                    <h1 className="text-3xl text-center mt-3 px-2">{title}</h1>

                                    <p className="p-10 mt-1 w-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatum excepturi sint libero non in ipsum iure laboriosam minus
                                        recusandae odit?</p>
                                </div>
                            </div>

                            <Separator orientation="vertical" />

                        </div>

                        <Separator orientation="horizontal" margin="ml-4 mr-4" />
                    </div>
                ))
            }

            </div>
        </>
    )
}
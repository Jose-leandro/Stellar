import React from 'react';
import Separator from '../ui/separator';

// Component for Section Titles
const SectionTitle = ({ children, itIsPowerStellar }) => {
    console.log(children); // Log children before returning JSX

    return (
        <h1 className={`${itIsPowerStellar ? 'text-5xl' : 'text-6xl'} font-medium ml-2 mt-2`}>
            {children}
        </h1>
    );
};


// Component for Paragraphs
const SectionParagraph = ({ children }) => (
    <p className="ml-3 mt-2">{children}</p>
);

// Benefits List Component
const BenefitsList = () => (
    <div className="mt-4 ml-4 bg-dark-green scrollbar-hide overflow-x-auto w-1/2 h-52 scroll-snap-x-mandatory">
        {[
            "Fast and Efficient Transactions",
            "Easy to Find What You Want",
            "Sell Anything You Like",
            "Guaranteed by Stellar",
            "Safe and Secure for Everyone",
        ].map((benefit, index) => (
            <>
                <div key={index} className="mb-2 py-9 ml-20 flex-none mr-[1.2em] mt-1 scroll-snap-start w-[90%] h-auto text-lg">
                    <h1 className="bg-slate-600 text-lg w-2/5 px-2">{benefit}</h1>
                    <p className="w-auto mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum excepturi sint libero non in ipsum iure laboriosam minus
                        recusandae odit?</p>
                </div>
            </>
        ))}
    </div>
);

// Main Component
export default function Main(): React.JSX.Element {

    const questions = {
        question1: {
            title: "What is Stellar?",
            answer: `Stellar is an innovative platform that connects ambitious entrepreneurs and
                    everyday individuals looking to sell second-hand items. With an easy account setup,
                    Stellar allows users to reach a global audience, making buying and selling simple and efficient.
                    Whether you're starting a business or decluttering, Stellar provides a user-friendly marketplace designed to help you succeed.`
        },
        question2: {
            title: "How can I start selling?",
            answer: `To start selling on Stellar, simply create an account by signing up with your email or social media. 
            Once registered, you can easily list your items by adding photos, a description, and setting a price. 
            Your listings will be visible to a global audience, making it effortless to connect with potential buyers. 
            Stellar’s intuitive platform ensures that the entire process, from creating your listing to finalizing a sale, is smooth and efficient.`
        },
        question3: {
            title: "Is it safe to sell on Stellar?",
            answer: `Yes, Stellar prioritizes safety for all its users. The platform was always work for implements secure payment methods and offers protection for both buyers and sellers. 
            With features like transaction monitoring, dispute resolution and more, Stellar ensures that your selling experience is not only convenient but also safe.
            Additionally, the Stellar Guarantee adds an extra layer of security, making sure that both parties feel confident in every transaction.`
        },
        question4: {
            title: "Tell me more about the Stellar Guarantee",
            answer: `The Stellar Guarantee is designed to give both buyers and sellers peace of mind. It ensures that every transaction on the platform is secure and fair.
             If any issues arise, such as an item not being as described or a payment problem, the Stellar team steps in to mediate and resolve disputes. 
            This guarantee helps protect your purchases and sales, making sure that you can confidently buy and sell, knowing that Stellar has your back throughout the entire process.`
        }
    };

    return (
        <>
            <section className="flex justify-center mt-1 w-full">
                <div className="flex justify-around p-6 rounded-3xl w-[98.5%] bg-dark-yellow">

                    <div className="w-2/5 flex flex-col">
                        <SectionTitle itIsPowerStellar={false}>Discover Stellar: Connecting You to a World of Opportunities</SectionTitle>
                        <SectionParagraph>
                            Stellar is your gateway to a global marketplace, designed for everyone—from ambitious entrepreneurs to individuals looking to declutter and sell second-hand items.
                        </SectionParagraph>
                    </div>

                    <div className="w-2/5 flex flex-col h-auto justify-evenly">
                        <div className="flex flex-col justify-around">
                            <SectionTitle itIsPowerStellar={true}>Experience the Power of Stellar</SectionTitle>
                            <Separator sizeInWidth='w-auto' />

                            <div className="flex justify-between">
                                <SectionParagraph>
                                    Effortlessly list your items and reach billions of potential buyers worldwide.
                                </SectionParagraph>
                                <SectionParagraph>
                                    With our robust security features, you can sell with confidence.
                                </SectionParagraph>
                            </div>
                        </div>

                        <button className="text-4xl bg-slate-200 text-black rounded-sm py-2">Get Start to Sell Or Buy</button>
                    </div>
                </div>
            </section>

            <section className="p-4">

                <h1 className="text-4xl font-semibold mb-4">Benefits of Stellar</h1>
                <Separator sizeInWidth='w-2/6' />


                <BenefitsList />


                {/* <img src='file:///C:/Users/leand/Downloads/juicy-boy-with-laptop-installing-security-passwords-shield-and-lock-on-his-pc-and-phone.png'/> */}
            </section>

            <section className="p-4">
                <h1 className="text-4xl font-semibold mb-4">Frequently Asked Questions</h1>
                <Separator sizeInWidth='w-2/6' />
                <div className="ml-4 mt-6">
                    {
                        Object.values(questions).map(({title, answer}, index) => (
                            <div key={index} className="flex justify-around mt-5">
                                <div className="w-3/5 flex flex-col">
                                    <h2 className="text-2xl">
                                        {title}
                                    </h2>
                                    <Separator sizeInWidth='w-auto' />
                                </div>
        
                                <div className="w-2/3 py-3 px-2 my-3">
                                    <p className="ml-6 py-3 px-2 text-lg bg-dark-gray">{answer}</p>
                                </div>
                            </div>
                            ))
                    }
                </div>
            </section>
        </>
    );
}

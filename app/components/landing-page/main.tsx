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
    <ul className="mt-4 ml-4">
        {[
            "Fast and Efficient Transactions",
            "Easy to Find What You Want",
            "Sell Anything You Like",
            "Guaranteed by Stellar",
            "Safe and Secure for Everyone",
        ].map((benefit, index) => (
            <li key={index} className="mb-2 text-lg">
                {benefit}
            </li>
        ))}
    </ul>
);

// Main Component
export default function Main(): React.JSX.Element {
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
            </section>

            <section className="p-4">
                <h1 className="text-4xl font-semibold mb-4">Frequently Asked Questions</h1>
                {/* <Separator /> */}
                <div className="ml-4">
                    {[
                        "What is Stellar?",
                        "How can I start selling?",
                        "Is it safe to sell on Stellar?",
                        "Tell me more about the Stellar Guarantee",
                    ].map((question, index) => (
                        <h2 key={index} className="mt-4 text-xl">
                            {question}
                        </h2>
                    ))}
                </div>
            </section>
        </>
    );
}

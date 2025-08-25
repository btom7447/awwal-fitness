import plansData from '../../public/data/plansData.json';

export default function PricingPlanSection() {
    return (
        <section id='pricingSection' className='p-15 lg:p-20 bg-black'>
            <h2 className="text-white font-bold text-center leading-relaxed text-3xl md:text-7xl mb-5" data-aos="fade-down">
                Choose the offer that suits you
            </h2>
            <p className="text-lg lg:text-2xl text-center text-gray-500 mb-5" data-aos="fade-down" data-aos-delay="200">
                Select from our range of flexible plans to find the perfect fit for your fitness journey and goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                {plansData.map((plan, idx) => (
                    <div 
                        key={idx}
                        className="p-10 flex flex-col items-center justify-center"
                        data-aos="fade-up"
                        data-aos-delay={idx * 150}
                        data-aos-duration="600"
                    >
                        <p className="text-xl uppercase text-gray-500 mb-2">
                            Billed Monthly
                        </p>
                        <h4 className="text-2xl lg:text-4xl font-bold text-center uppercase mb-2">{plan.name}</h4>
                        <span className="text-xl font-extrabold text-blue-300 my-5"> ₦
                            <span className='text-5xl '>
                                {plan.price.toLocaleString()}
                            </span>
                        </span>
                        <ul className="mb-6 flex-1">
                            {plan.perks.map((perk, idx) => (
                                <li key={idx} className="flex items-center mb-2 text-gray-300 text-base">
                                    <span className="mr-2 text-blue-300">✓</span>
                                    {perk}
                                </li>
                            ))}
                        </ul>
                        <button className="px-10 py-3 bg-white text-black text-xl capitalize cursor-pointer hover:bg-blue-400 hover:text-white transition">
                            Purchase plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
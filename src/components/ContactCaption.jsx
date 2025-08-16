export default function ContactCaption() {
    return (
        <div>
            <h2 className="text-black font-bold leading-relaxed text-3xl md:text-7xl mb-5" data-aos="fade-right">
                Feel Free to Ask Away
            </h2>
            <p className="text-lg lg:text-xl text-gray-500 mb-10" data-aos="fade-right" data-aos-delay="200">
                Your Fitness Journey Starts with a Conversation – Let’s Discuss Goals, Plans, and How I Can Help You Succeed!
            </p>
            <ul className="space-y-5">
                <li className="text-xl" data-aos="fade-right" data-aos-delay="300">
                    <a href="tel:+2349063807971">
                        +234 906 380 7971
                    </a>
                </li>
                <li className="text-xl" data-aos="fade-right" data-aos-delay="400">
                    <a href="mailto:contact@awwalfitness.com">contact@awwalfitness.com</a>
                </li>
            </ul>
        </div>
    )
}
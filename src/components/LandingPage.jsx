export default function LandingPage() {
    return (
        <div className="space-y-16">
            <section id="about" className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p>
                    I’m a certified fitness coach dedicated to helping you achieve your
                    health and wellness goals with personalized training plans and expert
                    guidance.
                </p>
            </section>

            <section id="services" className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Services</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Personal Training</li>
                    <li>Nutrition Coaching</li>
                    <li>Group Fitness Classes</li>
                </ul>
            </section>

            <section id="contact" className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p>Email: coach@awwalfitness.com</p>
                <p>Phone: +234 123 456 7890</p>
            </section>
        </div>
    );
}

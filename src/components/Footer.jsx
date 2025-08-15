export default function Footer() {
    return (
        <footer className="bg-gray-900 font-extralight text-md text-white text-center p-10 flex gap-5 flex-col lg:flex-row items-center justify-center lg:justify-between">
            <p>© {new Date().getFullYear()} Awwal Fitness. All rights reserved.</p>
            <p>By Kmini Technologies</p>
        </footer>
    );
}

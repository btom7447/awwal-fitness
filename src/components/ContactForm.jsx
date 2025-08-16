export default function ContactForm() {
    return (
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Full Name */}
            <div className="col-span-2 lg:col-span-1">
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your full name"
                    className="w-full text-xl text-black border border-gray-300 p-5 outline-none focus:border-black"
                />
            </div>

            {/* Phone Number */}
            <div className="col-span-2 lg:col-span-1">
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full text-xl text-black border border-gray-300 p-5 outline-none focus:border-black"
                />
            </div>

            {/* Subject */}
            <div className="col-span-2">
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full text-xl text-black border border-gray-300 p-5 outline-none focus:border-black"
                />
            </div>

            {/* Message */}
            <div className="col-span-2">
                <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message ..."
                    rows="5"
                    className="w-full text-xl text-black border border-gray-300 p-5 outline-none focus:border-black resize-none"
                ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-end">
                <button
                    type="submit"
                    className="px-10 py-5 bg-black text-xl text-white cursor-pointer hover:bg-gray-700"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
}

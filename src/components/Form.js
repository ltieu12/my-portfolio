import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    return (
        <>
            <form className="bg-yellow-300 shadow-dark-shadow-lg my-4 p-8 md:p-12 rounded-xl border-3 border-black">
                <div className="mb-6">
                    <label className="block text-left" htmlFor="firstName">First Name</label>
                    <input className="border-2 rounded-md border-black w-full px-2 py-1" type="text" value={formData.firstName} required></input>
                </div>
                <div className="mb-6">
                    <label className="block text-left" htmlFor="lastName">Last Name</label>
                    <input className="border-2 rounded-md border-black w-full px-2 py-1" type="text" value={formData.lastName} required></input>
                </div>
                <div className="mb-6">
                    <label className="block text-left" htmlFor="email">Email</label>
                    <input className="border-2 rounded-md border-black w-full px-2 py-1" type="email" value={formData.email} required></input>
                </div>
                <div className="mb-6">
                    <label className="block text-left" htmlFor="message">Message</label>
                    <textarea className="border-2 rounded-md border-black w-full px-2 py-1" type="text" rows="3" value={formData.message} required></textarea>
                </div>

                <div className="bg-blue-200 hover:bg-blue-300 shadow-dark-shadow border-2 border-black rounded-lg mt-6 w-max mx-auto">
                    <button className="px-5 py-1 font-medium" type="submit">Send</button>
                </div>
            </form>
        </>
    );
}

export default Form;
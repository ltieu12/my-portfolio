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
            <form className="bg-yellow-300 shadow-dark-shadow my-4 px-10 py-10 rounded-lg border-2 border-black">
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
                    <input className="border-2 rounded-md border-black w-full px-2 py-1" type="text" value={formData.message} required></input>
                </div>

                <div className="bg-blue-200 hover:bg-blue-300 shadow-dark-shadow border-2 border-black rounded-lg mt-6 w-max mx-auto">
                    <button className="px-3 py-1 font-medium" type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Form;
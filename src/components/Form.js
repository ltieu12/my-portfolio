import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const form = useRef();
    const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const emailPublicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY; 

    const [errors, setErrors] = useState([]);

    const [isModalOpen, setModalOpen] = useState(false);

    const saveData = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const validateForm = (data) => {
        const errors = {}
        let textRegex = /^[A-Za-z]+$/;
        let messageRegex = /^(?=.*[a-zA-Z]).*$/;
        
        if (!data.firstName.trim()) {
            errors.firstName = "First name is required.";
        }
        else if (!textRegex.test(data.firstName)) {
            errors.firstName = "First name should contain letters only."
        }

        if (!data.lastName.trim()) {
            errors.lastName = "Last name is required.";
        }
        else if (!textRegex.test(data.lastName)) {
            errors.lastName = "Last name should contain letters only."
        }

        if (!data.email.trim()) {
            errors.email = "Email is required.";
        }

        if (!data.message.trim()) {
            errors.message = "Message is required.";
        }
        else if (!messageRegex.test(data.message)) {
            errors.message = "Message must contain letters.";
        }

        return errors;
    }

    const submitForm = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            emailjs.sendForm(serviceID, templateID, form.current, {
                publicKey: emailPublicKey,
            })
            .then(
                () => {
                    console.log("Form submitted successfully!");
                    setModalOpen(true);
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: '',
                    })
                },
                (error) => {
                    console.log("Error occurs when sending email", error.text);
                }
            );
        }
        else {
            console.log("Errors in form validation!");
        }
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <form className="bg-yellow-300 shadow-dark-shadow-lg-left lg:shadow-dark-shadow-lg my-4 p-8 md:p-12 border-3 border-black" ref={form} onSubmit={submitForm}>
                <div className="mb-6">
                    <label className="block text-left" htmlFor="firstName">First Name</label>
                    <input className="border-2 rounded-md border-black w-full px-2 py-1" type="text" name="firstName" value={formData.firstName} onChange={saveData} required></input>
                    {errors.firstName && (
                        <p className="text-red-600 text-left">
                            {errors.firstName}
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label className="block text-left" htmlFor="lastName">Last Name</label>
                    <input className="border-2 rounded-md border-black w-full px-2 py-1" type="text" name="lastName" value={formData.lastName} onChange={saveData} required></input>
                    {errors.lastName && (
                        <p className="text-red-600 text-left">
                            {errors.lastName}
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label className="block text-left" htmlFor="email">Email</label>
                    <input className="border-2 rounded-md border-black w-full px-2 py-1" type="email" name="email" value={formData.email} onChange={saveData} required></input>
                    {errors.email && (
                        <p className="text-red-600 text-left">
                            {errors.email}
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label className="block text-left" htmlFor="message">Message</label>
                    <textarea className="border-2 rounded-md border-black w-full px-2 py-1" type="text" rows="3" name="message" value={formData.message} onChange={saveData} required></textarea>
                    {errors.message && (
                        <p className="text-red-600 text-left">
                            {errors.message}
                        </p>
                    )}
                </div>

                <div className="bg-blue-200 hover:bg-blue-300 shadow-dark-shadow border-2 border-black rounded-lg mt-6 w-max mx-auto">
                    <button className="px-5 py-1 font-medium" type="submit">Send</button>
                </div>
            </form>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-primary p-6 rounded-lg border-3 border-black w-96 text-center">
                        <h2 className="text-2xl font-semibold text-lime-600">
                            Success
                        </h2>
                        <p className="mt-2">
                            Your form has been submitted successfully!
                        </p>
                        <button
                            onClick={closeModal}
                            className="mt-4 bg-red-300 px-4 py-2 rounded-lg hover:bg-red-400 shadow-dark-shadow border-2 border-black"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Form;
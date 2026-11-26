'use client'

import React, { useState } from 'react'

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (submitted) setSubmitted(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({
            fullName: '',
            phone: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="bg-white rounded-[20px] md:rounded-[30px] shadow-custom-shadow p-[20px] sm:p-[28px] lg:p-[36px] 2xl:p-[42px] w-full">
            <div className="mb-[20px] md:mb-[24px]">
                <h3 className="font-sora font-semibold lg:text-[24px] text-[20px] 2xl:text-[28px] text-black leading-tight">
                    Let’s Talk
                </h3>
                <p className="2xl:text-[18px] text-[16px] text-[#555555] mt-[6px]">
                    Fill the form with details and we&apos;ll call back to you
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[6px]">
                    <label
                        htmlFor="contact-full-name"
                        className="2xl:text-[18px] text-[16px] font-medium text-black"
                    >
                        Full Name
                    </label>
                    <input
                        id="contact-full-name"
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Robert Downey"
                        className="w-full rounded-full border border-[#d9d9d9] px-[20px] py-[10px] md:py-[12px] 2xl:text-[18px] text-[16px] text-black placeholder:text-[#999999] focus:outline-none focus:border-black common-transition"
                    />
                </div>

                <div className="flex flex-col gap-[6px]">
                    <label
                        htmlFor="contact-phone"
                        className="2xl:text-[18px] text-[16px] font-medium text-black"
                    >
                        Phone Number
                    </label>
                    <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        className="w-full rounded-full border border-[#d9d9d9] px-[20px] py-[10px] md:py-[12px] 2xl:text-[18px] text-[16px] text-black placeholder:text-[#999999] focus:outline-none focus:border-black common-transition"
                    />
                </div>

                <div className="flex flex-col gap-[6px]">
                    <label
                        htmlFor="contact-email"
                        className="2xl:text-[18px] text-[16px] font-medium text-black"
                    >
                        Email
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@meltique.com"
                        className="w-full rounded-full border border-[#d9d9d9] px-[20px] py-[10px] md:py-[12px] 2xl:text-[18px] text-[16px] text-black placeholder:text-[#999999] focus:outline-none focus:border-black common-transition"
                    />
                </div>

                <div className="flex flex-col gap-[6px]">
                    <label
                        htmlFor="contact-message"
                        className="2xl:text-[18px] text-[16px] font-medium text-black"
                    >
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your custom gift requirements..."
                        className="w-full rounded-[18px] border border-[#d9d9d9] px-[20px] py-[12px] 2xl:text-[18px] text-[16px] text-black placeholder:text-[#999999] focus:outline-none focus:border-black common-transition resize-none"
                    />
                </div>

                {submitted && (
                    <p className="2xl:text-[18px] text-[16px] text-green-700 font-medium">
                        Thank you! Your inquiry has been received.
                    </p>
                )}

                <button
                    type="submit"
                    className="mt-[4px] w-full bg-black hover:bg-[#171717] text-white font-poppins font-medium 2xl:text-[18px] text-[16px] py-[12px] md:py-[14px] rounded-full common-transition cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm

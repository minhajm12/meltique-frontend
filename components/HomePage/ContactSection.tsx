import React from 'react'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

export default function ContactSection() {
    return (
        <section className="main-padding y-gap">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] lg:gap-[40px] 2xl:gap-[60px] items-center">
                <div className="lg:col-span-7">
                    <ContactDetails />
                </div>
                <div className="lg:col-span-5">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

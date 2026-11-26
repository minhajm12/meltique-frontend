import React from 'react'
import HomeBanner from '../HomePage/HomeBanner'
import AboutSection from '../HomePage/AboutSection'
import ProductSection from '../HomePage/ProductSection'
import MainCta from '../common/MainCta'
import ContactSection from '../HomePage/ContactSection'

export default function HomePage() {
    return (
        <div>
            <HomeBanner />

            <AboutSection />

            <ProductSection />

            <MainCta />

            <ContactSection />
        </div>
    )
}

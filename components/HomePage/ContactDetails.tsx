import Image from 'next/image'
import React from 'react'
import MainTitle from '../common/MainTitle'

function ContactDetails() {
    return (
        <div className="flex flex-col gap-[24px] md:gap-[32px]">
            <MainTitle
                subtitle="Contact Us"
                title="Need A Custom Made Gift."
                title2="Hastle Free To Contact Us."
            />
            <div className="rounded-[20px] md:rounded-[30px] overflow-hidden w-full">
                <Image
                    src="/assets/img/contact-img.jpg"
                    alt="Custom made gift box collection"
                    title="Custom Made Gift Box Collection"
                    width={800}
                    height={540}
                    className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] 2xl:h-[440px] object-cover"
                />
            </div>
        </div>
    )
}

export default ContactDetails

'use client'

import Image from 'next/image'
import React from 'react'
import MainTitle from '../common/MainTitle'
import { motion } from 'motion/react'

function ContactDetails() {
    return (
        <div className="flex flex-col gap-[24px] md:gap-[32px]">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0, duration: 0.5, type: "tween" }}
            >
                <MainTitle
                    subtitle="Contact Us"
                    title="Need A Custom Made Gift."
                    title2="Hastle Free To Contact Us."
                />
            </motion.div>
            <motion.div
                initial={{ y: 24, opacity: 0, scale: 0.98 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: 0.15, duration: 0.55, type: "tween" }}
                className="rounded-[20px] md:rounded-[30px] overflow-hidden w-full"
            >
                <Image
                    src="/assets/img/contact-img.jpg"
                    alt="Custom made gift box collection"
                    title="Custom Made Gift Box Collection"
                    width={800}
                    height={540}
                    className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] 2xl:h-[440px] object-cover"
                />
            </motion.div>
        </div>
    )
}

export default ContactDetails

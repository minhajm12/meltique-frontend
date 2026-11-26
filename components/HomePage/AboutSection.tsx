'use client'

import React from 'react'
import MainTitle from '../common/MainTitle'
import ContentMain from '../common/ContentMain'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function AboutSection() {
    return (
        <div className='main-padding y-gap'>
            <div className="top-section grid grid-cols-1 lg:grid-cols-2 gap-[16px] md:gap-[24px] lg:gap-[40px] items-start">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0, duration: 0.5, type: "tween" }}
                >
                    <MainTitle subtitle='Story Behind Sweetness' title={'Crafted Care.'} title2={'Shared with Love.'} description={''} contentClassName={''} />
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.15, duration: 0.5, type: "tween" }}
                >
                    <ContentMain description={'We believe every sweet moment deserves a little extra magic. Born from a love for thoughtful gifting and beautifully crafted treats, we bring together delightful flavours, quality ingredients, and elegant packaging to make every occasion memorable. '} />
                </motion.div>
            </div>
            <div className="img-section mt-[24px] md:mt-[40px]">
                <div className="grid grid-cols-2 md:flex md:flex-row gap-[12px] md:gap-[16px] group/gallery">
                    <motion.div
                        initial={{ y: 24, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ delay: 0.1, duration: 0.5, type: "tween" }}
                        className="left-item col-span-1 md:min-w-0 md:basis-[25%] md:hover:basis-[50%] transition-[flex-basis] duration-500 ease-in-out group rounded-[16px] md:rounded-[20px] overflow-hidden"
                    >
                        <Image width={400} height={420} src="/assets/img/about-img-2.jpg" alt="Assorted handcrafted chocolate gift boxes by Meltique" title="Handcrafted Chocolate Gift Boxes" className='w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px] 2xl:h-[420px] object-cover group-hover:scale-110 common-transition' />
                    </motion.div>
                    <motion.div
                        initial={{ y: 24, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
                        className="col-span-2 md:min-w-0 md:basis-[50%] md:group-has-[.left-item:hover]/gallery:basis-[25%] md:group-has-[.right-item:hover]/gallery:basis-[25%] transition-[flex-basis] duration-500 ease-in-out order-first md:order-none group rounded-[16px] md:rounded-[20px] overflow-hidden"
                    >
                        <Image width={800} height={420} src="/assets/img/about-img-1.jpg" alt="Meltique curated luxury sweet gifting collection" title="Meltique Luxury Sweet Gifting Collection" className='w-full h-[220px] sm:h-[280px] md:h-[300px] lg:h-[360px] 2xl:h-[420px] object-cover group-hover:scale-110 common-transition' />
                    </motion.div>
                    <motion.div
                        initial={{ y: 24, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ delay: 0.3, duration: 0.5, type: "tween" }}
                        className="right-item col-span-1 md:min-w-0 md:basis-[25%] md:hover:basis-[50%] transition-[flex-basis] duration-500 ease-in-out group rounded-[16px] md:rounded-[20px] overflow-hidden"
                    >
                        <Image width={400} height={420} src="/assets/img/about-img-3.jpg" alt="Artisan confectioneries in Meltique gift packaging" title="Artisan Confectioneries & Gift Packaging" className='w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px] 2xl:h-[420px] object-cover group-hover:scale-110 common-transition' />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

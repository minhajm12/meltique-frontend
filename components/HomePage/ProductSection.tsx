'use client'

import React from 'react'
import MainTitle from '../common/MainTitle'
import ContentMain from '../common/ContentMain'
import ProductSlider from './ProductSlider'
import { motion } from 'motion/react'

export default function ProductSection() {
    return (
        <div id='shop' className='main-padding y-gap'>
            <div className="top-section grid grid-cols-1 lg:grid-cols-2 gap-[16px] md:gap-[24px] lg:gap-[40px] items-start">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0, duration: 0.5, type: "tween" }}
                >
                    <MainTitle title={'A Box Full of'} title2={'Happniess.'} h2ClassName='flex-row! flex-wrap gap-x-[12px] md:gap-x-[16px]' />
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.15, duration: 0.5, type: "tween" }}
                >
                    <ContentMain description={'Discover a collection of handcrafted delights, thoughtfully curated to make every moment sweeter. '} />
                </motion.div>
            </div>
            <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2, duration: 0.55, type: "tween" }}
                className="mt-[20px] md:mt-[30px]"
            >
                <ProductSlider />
            </motion.div>
        </div>
    )
}

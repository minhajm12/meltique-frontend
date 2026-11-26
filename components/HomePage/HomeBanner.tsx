'use client'

import React from 'react'
import ContentMain from '../common/ContentMain'
import Image from 'next/image'
import MainBtn from '../common/MainBtn'
import { motion } from 'motion/react'

export default function HomeBanner() {
    return (
        <div id='home' className='full-padding'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-[30px] lg:gap-[40px] relative lg:h-[calc(100vh_-_120px)] lg:min-h-[560px] rounded-[20px] md:rounded-[30px] overflow-hidden px-[20px] sm:px-[35px] md:px-[50px] lg:px-[60px] 2xl:px-[120px] py-[40px] md:py-[60px] lg:py-0'>
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0,
                        duration: 0.7,
                        type: "tween",
                    }}
                    className="img-div absolute inset-0 2xl:top-[-40px] -z-1 w-full h-full 2xl:h-[calc(100%+40px)]"
                >
                    <Image width={1920} height={1080} src="/assets/img/banner-bg.jpg" alt="Meltique luxury sweet gifting banner background" title="Meltique Gift Collections Banner" className='w-full! h-full! object-cover' />
                </motion.div>

                <div className="col-span-1 flex flex-col gap-[16px] md:gap-[20px] justify-center items-center lg:items-start lg:pr-[30px] xl:pr-[50px] 2xl:pr-[60px] lg:mb-[80px]">
                    <div className="flex flex-col gap-2 text-center items-center lg:text-start lg:items-start">
                        <h1 className="flex flex-col gap-0 items-center lg:items-start">
                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.1,
                                    duration: 0.5,
                                    type: "tween",
                                }}
                                className="text-[24px] md:text-[28px] lg:text-[36px] xl:text-[45px] 2xl:text-[50px] font-light leading-tight tracking-normal"
                            >
                                Make <span className="text-linear-gradient">Every Moment</span>
                            </motion.span>
                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                    type: "tween",
                                }}
                                className="text-[24px] md:text-[28px] lg:text-[36px] xl:text-[45px] 2xl:text-[50px] font-bold leading-tight tracking-normal"
                            >
                                A Little Sweeter
                            </motion.span>
                        </h1>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                type: "tween",
                            }}
                        >
                            <ContentMain
                                description="Handcrafted treats, beautifully packed and ready to make someone's day. Made with love and gifted with joy"
                                variant="banner"
                                className="text-center! lg:text-start!"
                            />
                        </motion.div>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.5,
                                type: "tween",
                            }}
                        >
                            <MainBtn iconDisable BtnArrow btnType='outline' text={'Explore Collection'} url={'/#shop'} />
                        </motion.div>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                type: "tween",
                            }}
                        >
                            <MainBtn iconDisable BtnArrow btnType='fillGrade' text={'Explore Collection'} url={'/#shop'} />
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ x: 30, opacity: 0, scale: 0.95 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.25,
                        duration: 0.6,
                        type: "tween",
                    }}
                    className="col-span-1 flex items-center justify-center"
                >
                    <Image
                        width={600}
                        height={550}
                        src={'/assets/img/product-banner-img.png'}
                        alt="Meltique handcrafted gift collection"
                        title="Meltique Handcrafted Gift Collection"
                        className='w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-full max-h-[360px] lg:max-h-[70vh] h-auto object-contain'
                    />
                </motion.div>
            </div>
        </div>
    )
}

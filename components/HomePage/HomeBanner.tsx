import React from 'react'
import ContentMain from '../common/ContentMain'
import Image from 'next/image'
import MainBtn from '../common/MainBtn'

export default function HomeBanner() {
    return (
        <div className='full-padding'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-[30px] lg:gap-[40px] relative lg:h-[calc(100vh_-_120px)] lg:min-h-[560px] rounded-[20px] md:rounded-[30px] overflow-hidden px-[20px] sm:px-[35px] md:px-[50px] lg:px-[60px] 2xl:px-[120px] py-[40px] md:py-[60px] lg:py-0'>
                <div className="img-div absolute inset-0 2xl:top-[-40px] -z-1 w-full h-full 2xl:h-[calc(100%+40px)]">
                    <Image width={1920} height={1080} src="/assets/img/banner-bg.jpg" alt="Meltique luxury sweet gifting banner background" title="Meltique Gift Collections Banner" className='w-full! h-full! object-cover' />
                </div>
                <div className="col-span-1 flex flex-col gap-[16px] md:gap-[20px] justify-center lg:pr-[30px] xl:pr-[50px] 2xl:pr-[60px]">
                    <div className="flex flex-col gap-2 text-start items-start">
                        <h1 className="flex flex-col gap-0 items-start">
                            <span className="text-[24px] md:text-[28px] lg:text-[36px] xl:text-[45px] 2xl:text-[50px] font-light leading-tight tracking-normal">
                                Make Every Moment
                            </span>
                            <span className="text-[24px] md:text-[28px] lg:text-[36px] xl:text-[45px] 2xl:text-[50px] font-bold leading-tight tracking-normal">
                                A Little Sweeter
                            </span>
                        </h1>
                        <ContentMain
                            description="Handcrafted treats, beautifully packed and ready to make someone's day. Made with love and gifted with joy"
                            variant="banner"
                        />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <MainBtn BtnArrow btnType='outline' text={'Explore Collection'} url={''} />
                        <MainBtn BtnArrow btnType='fillGrade' text={'Explore Collection'} url={''} />
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <Image
                        width={600}
                        height={550}
                        src={'/assets/img/product-banner-img.png'}
                        alt="Meltique handcrafted gift collection"
                        title="Meltique Handcrafted Gift Collection"
                        className='w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-full max-h-[360px] lg:max-h-[70vh] h-auto object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

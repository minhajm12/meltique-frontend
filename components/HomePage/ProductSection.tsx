import React from 'react'
import MainTitle from '../common/MainTitle'
import ContentMain from '../common/ContentMain'
import ProductSlider from './ProductSlider'

export default function ProductSection() {
    return (
        <div className='main-padding y-gap'>
            <div className="top-section grid grid-cols-1 lg:grid-cols-2 gap-[16px] md:gap-[24px] lg:gap-[40px] items-start">
                <MainTitle title={'A Box Full of'} title2={'Happniess.'} h2ClassName='flex-row! flex-wrap gap-x-[12px] md:gap-x-[16px]' />
                <ContentMain description={'Discover a collection of handcrafted delights, thoughtfully curated to make every moment sweeter. '} />
            </div>
            <div className="mt-[20px] md:mt-[30px]">
                <ProductSlider />
            </div>
        </div>
    )
}

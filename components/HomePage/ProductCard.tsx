import Image from 'next/image'
import React from 'react'
import { Icons } from '../common/Icons'
import type { ProductItemData } from './ProductSlider'

export default function ProductCard({ data }: { data: ProductItemData }) {
    return (
        <div className='w-full flex flex-col justify-between rounded-[20px] overflow-hidden group bg-white'>
            <div>
                <div className="img-div h-[210px] md:h-[250px] rounded-[20px] overflow-hidden">
                    <Image width={360} height={280} src={data.image} alt={data.title} title={data.title} className='w-full h-full object-cover group-hover:scale-110 common-transition' />
                </div>
                <div className="p-[16px] md:p-[18px] pb-0 flex flex-col gap-[12px] md:gap-[14px]">
                    <div className="flex flex-col gap-[4px]">
                        <h3 className='font-sora 2xl:text-[22px] lg:text-[20px] text-[18px] font-semibold leading-tight'>{data.title}</h3>
                        <p className='2xl:text-[18px] text-[16px]'>{data.description}</p>
                    </div>
                    <div className="price-section flex items-end gap-[10px]">
                        <span className='font-sora font-bold 2xl:text-[26px] xl:text-[24px] lg:text-[22px] text-[20px]'>₹ {data.amount}</span>
                        <span className='relative opacity-60 mb-1 2xl:text-[18px] text-[16px]'>
                            <span className='absolute w-full h-[1px] bg-black left-0 top-[12px] -rotate-10 origin-bottom-left'></span>
                            <span>₹3299</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="btn-section p-[16px] md:p-[18px] flex items-center gap-[10px]">
                <button className='flex-1 px-[20px] py-[6px] cursor-pointer border border-black bg-black hover:bg-transparent text-white hover:text-black common-transition 2xl:text-[18px] text-[16px] font-medium rounded-[20px]'>Buy Now</button>
                <button aria-label="Add to wishlist" className='size-[38px] md:size-[40px] shrink-0 border border-black cursor-pointer rounded-full flex items-center justify-center'>
                    <Icons.wishlist_Icon className='size-[18px] md:size-[20px]' />
                </button>
                <button aria-label="Add to cart" className='size-[38px] md:size-[40px] shrink-0 border border-black cursor-pointer rounded-full flex items-center justify-center'>
                    <Icons.Cart_Icon className='size-[18px] md:size-[20px]' />
                </button>
            </div>
        </div>
    )
}

'use client'

import React, { useRef, useSyncExternalStore } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import ProductCard from './ProductCard';
import { Icons } from '../common/Icons';
import "swiper/css";


export type ProductItemData = {
    id: number
    image: string;
    title: string;
    description: string;
    amount: number;
};

export const productsData: ProductItemData[] = [
    {
        id: 1,
        image: "/assets/img/product-img-1.jpg",
        title: "Signature Chocolate Box",
        description: "12 assorted pieces",
        amount: 899,
    },
    {
        id: 2,
        image: "/assets/img/product-img-2.jpg",
        title: "Macaron Collection",
        description: "Box of 8 assorted macarons",
        amount: 649,
    },
    {
        id: 3,
        image: "/assets/img/product-img-3.jpg",
        title: "Caramel Delights",
        description: "10 handcrafted caramel truffles",
        amount: 749,
    },
    {
        id: 4,
        image: "/assets/img/product-img-4.jpg",
        title: "The Sweetest Hamper",
        description: "Premium assorted gift collection",
        amount: 1499,
    },
    {
        id: 5,
        image: "/assets/img/product-img-4.jpg",
        title: "The Sweetest Hamper",
        description: "Premium assorted gift collection",
        amount: 1499,
    },
];

const emptySubscribe = () => () => {};

export default function ProductSlider() {

    const swiperRef = useRef<SwiperType | null>(null);
    const isClient = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );

    const settings = {
        modules: [Autoplay],
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        speed: 500,
        loop: true,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1371: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        onBeforeInit: (swiper: SwiperType) => {
            swiperRef.current = swiper;
        },
        onSwiper: (swiper: SwiperType) => {
            swiperRef.current = swiper;
        },
    };

    const goToPrev = () => swiperRef.current?.slidePrev();
    const goToNext = () => swiperRef.current?.slideNext();

    if (!isClient) {
        return (
            <div className="w-full py-1 md:my-[40px] my-[20px] md:rounded-[30px] rounded-[20px]" />
        );
    }

    return (
        <div>
            <div className="w-full">
            <Swiper {...settings} className="w-full !overflow-hidden py-1 md:my-[40px] my-[20px]">
                {productsData.map((data) => (
                    <SwiperSlide key={data.id} className="!h-auto flex">
                        <ProductCard data={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>

            {/* Custom Slider Navigation Controls */}
            <div className="flex justify-center gap-2 z-3 w-full">
                <button
                    type="button"
                    onClick={goToPrev}
                    title="Previous Stylist"
                    aria-label="Previous Stylist"
                    className="custm-slider-prev bg-white hover:bg-black text-black hover:text-white rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer border border-black duration-200 transition-all group"
                >
                    <Icons.Slider_Arrow className="size-[30px] fill-black group-hover:fill-white common-transition" />
                </button>

                <button
                    type="button"
                    onClick={goToNext}
                    title="Next Stylist"
                    aria-label="Next Stylist"
                    className="custm-slider-next bg-white hover:bg-black text-black hover:text-white rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer border border-black duration-200 transition-all group"
                >
                    <Icons.Slider_Arrow className="size-[30px] fill-black group-hover:fill-white rotate-180 common-transition" />
                </button>
            </div>
        </div>
    )
}

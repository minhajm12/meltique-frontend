import ContentMain from "./ContentMain"

function MainTitle({ subtitle, title, title2, description, h2ClassName, contentClassName, alignLeft = true, contentVariant = 'normal' }: { subtitle?: string, title: string, title2: string, description?: string, h2ClassName?: string, contentClassName?: string, alignLeft?: boolean, contentVariant?: 'normal' | 'banner' }) {
    return (
        <div className={`flex flex-col gap-2  ${alignLeft ? 'text-start items-start' : 'md:text-center md:items-center'} `}>
            <div className="flex flex-col gap-1">
                {subtitle &&
                    <span className="font-sora font-medium text-[16px] lg:text-[18px]">{subtitle}</span>
                }
                <h2 className={`flex flex-col gap-0 items-start ${h2ClassName}`}>
                    <span className={`text-[24px] md:text-[28px] lg:text-[36px] xl:text-[45px] 2xl:text-[50px] font-light leading-tight tracking-normal`}>{title}</span>
                    <span className={`text-[24px] md:text-[28px] lg:text-[36px] xl:text-[45px] 2xl:text-[50px] font-bold leading-tight tracking-normal`}>{title2}</span>
                </h2>
            </div>
            {description && (
                <ContentMain className={contentClassName} description={description} variant={contentVariant} />
            )}
        </div >
    )
}

export default MainTitle
function ContentMain({
    description,
    className = "",
    variant = "normal",
}: {
    description: React.ReactNode;
    className?: string;
    variant?: "normal" | "banner";
}) {
    const sizeClasses =
        variant === "banner"
            ? "2xl:text-[20px] xl:text-[18px] text-[16px]"
            : "2xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px] leading-relaxed!"

    return (
        <p className={`font-poppins! ${sizeClasses} leading-tight font-normal text-start ${className}`}>{description}</p>
    );
}

export default ContentMain
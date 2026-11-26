import Link from "next/link";
import { Icons } from "./Icons";

function MainBtn({
    text,
    url,
    btnType = 'fill',
    BtnArrow = false,
    iconDisable = false,
    BtnOutlineWhite = false,
    className = '',
}: {
    text: string;
    url: string;
    btnType?: string;
    iconDisable?: boolean;
    BtnArrow?: boolean;
    BtnOutlineWhite?: boolean;
    className?: string;
}) {
    return (
        <>
            {btnType === 'outline' && (
                <Link
                    href={url}
                    aria-label={text}
                    title={text}
                    className={`w-fit text-nowrap font-poppins common-transition px-[30px] py-[8px] border rounded-[40px] font-medium 2xl:text-[18px] text-[16px] flex items-center gap-3 group/btn ${
                        BtnOutlineWhite
                            ? 'text-white border-white hover:bg-white hover:text-black'
                            : 'text-black border-black hover:bg-black hover:text-white'
                    } ${className}`}
                >
                    {text}
                    {BtnArrow && (
                        <Icons.BtnArrow
                            className={`${iconDisable == true ? 'hidden md:block' : ''} ${
                                BtnOutlineWhite
                                    ? 'fill-white group-hover/btn:fill-black!'
                                    : 'fill-black group-hover/btn:fill-white!'
                            } group-hover/btn:rotate-45 common-transition shrink-0`}
                        />
                    )}
                </Link>
            )}
            {btnType === 'fillGrade' && (
                <Link
                    href={url}
                    aria-label={text}
                    title={text}
                    className={`w-fit text-nowrap font-poppins bg-linear-to-r from-[#DC2D16] to-[#FF0066] text-white hover:bg-transparent common-transition px-[30px] py-[8px] rounded-[40px] font-medium 2xl:text-[18px] text-[16px] flex items-center gap-3 group/btn ${className}`}
                >
                    {text}
                    {BtnArrow && <Icons.BtnArrow className={`${iconDisable == true ? 'hidden md:block' : ''} fill-white group-hover/btn:rotate-45 common-transition shrink-0`} />}
                </Link>
            )}
            {btnType === 'fill' && (
                <Link
                    href={url}
                    aria-label={text}
                    title={text}
                    className={`w-fit text-nowrap font-poppins bg-black text-white hover:text-black hover:bg-transparent common-transition px-[30px] py-[8px] border border-black hover:border-black rounded-[40px] font-medium 2xl:text-[18px] text-[16px] flex items-center gap-3 group/btn ${className}`}
                >
                    {text}
                    {BtnArrow && <Icons.BtnArrow className={`${iconDisable == true ? 'hidden md:block' : ''} fill-white group-hover/btn:rotate-45 common-transition shrink-0`} />}
                </Link>
            )}
        </>
    );
}

export default MainBtn;

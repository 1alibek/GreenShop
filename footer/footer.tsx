import type {FC} from "react"
import FooterTop from "./footer-top/footer-top"
import FooterItem from "./footer-item"
import FooterBottom from "./footer-sotional"
import Advice from "./advice/advice"

const footer_links = [
    {
        id: 1,
        title: "My Account",
        link1: "My Account",
        link2: "Address",
        link3: "Wishlist",
    },
    {
        id: 2,
        title: "Categories",
        link1: "House Plants",
        link2: "Potter Plants",
        link3: "Seeds",
        link4: "Small Plants",
        link5: "Accessories",
    },
]

const Footer: FC = () => {
    return (
        <footer className="w-[90%] m-auto max-sm:w-[95%]">
            <div className="bg-[#FBFBFB] p-[10px]">
                <Advice />
                <FooterTop />
                <div className="grid grid-cols-3 mt-[20px] pb-[27px]  max-[655px]:grid-cols-2  max-[425px]:grid-cols-1">
                    {footer_links.map((link) => (
                        <FooterItem key={link.id} {...link} />
                    ))}
                    <FooterBottom />
                </div>
            </div>
        </footer>
    )
}

export default Footer

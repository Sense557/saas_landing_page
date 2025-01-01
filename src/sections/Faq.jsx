import {Element} from "react-scroll";
import {faq} from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
    const halfLength = Math.floor(faq.length/2);

    return (
        <section>
            <Element name="faq" className="relative">
                <div className="container relative z-2 py-28">
                    <h3 className="h3 max-md:h5 text-p4 max-w-640 mb-7 max-lg:max-w-md">Curiosity didn't kill the cat, it gave it answers.</h3>
                    <p className="body-1 max-lg:max-w-sm">You've got questions, we've got answers.</p>
                </div>
                <div className="faq-line_after top-0 -z-1 absolute h-full w-0.5 bg-s2 left-[calc(50%-1px)]">
                </div>
                <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
                    <div className="container flex gap-10 max-lg:block">
                        <div
                            className="rounded-half size-20 border-2 left-[calc(50%-40px)] justify-center items-center z-4 -top-10 flex absolute border-s2 bg-s1">
                            <img src="/images/faq-logo.svg" alt="logo" className="size-1/2 "/>
                        </div>
                        <div className="relative flex-1 pt-24">
                            {faq.slice(0, halfLength).map((item, index) => (
                                <FaqItem key={item.id} item={item} index={index}/>
                            ))}
                        </div>
                        <div className="relative flex-1 lg:pt-24">
                            {faq.slice(halfLength).map((item, index) => (
                                <FaqItem key={item.id} item={item} index={halfLength + index}/>
                            ))}
                        </div>
                    </div>
                    <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden "/>
                </div>
            </Element>
        </section>
    )
}
export default Faq

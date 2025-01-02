import { useState } from "react";
import clsx from "clsx";

const FaqItem = ({ item, index }) => {
    const [activeId, setActiveId] = useState(null);
    const active = activeId === item.id;

    return (
        <div className="relative z-2 mb-16">
            {/* Question Section */}
            <div
                className="group cursor-pointer flex items-center justify-between relative gap-10 p-7"
                onClick={() => {
                    setActiveId(activeId === item.id ? null : item.id);
                }}
            >
                <div className="flex-1">
                    <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
                        {index < 10 ? "0" : ""}
                        {index}
                    </div>
                    <div
                        className={clsx(
                            "h6 text-p4 transition-colors duration-500 max-md:min-h-20 max-md:flex max-md:items-center",
                            active && "max-lg:text-p1"
                        )}
                    >
                        {item.question}
                    </div>
                </div>
                <div
                    className={clsx(
                        "faq-icon relative flex size-12 justify-center items-center border-2 rounded-full border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
                        active && "before:bg-s1 after:rotate-0 after:bg-p1"
                    )}
                >
                    <div className="g4 rounded-full shadow-300 size-11/12" />
                </div>
            </div>

            {/* Answer Section with Sliding Animation */}
            <div
                className={clsx(
                    "overflow-hidden transition-[max-height] duration-500 ease-in-out",
                    active ? "max-h-[500px]" : "max-h-0"
                )}
            >
                <div className="body-3 px-7 py-3.5">{item.answer}</div>
            </div>

            {/* Background Transition */}
            <div
                className={clsx(
                    "g5 -z-1 rounded-3xl absolute -bottom-7 -top-7 left-0 right-0 opacity-0 transition-opacity duration-500",
                    active && "opacity-100"
                )}
            >
                <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
                <div className="absolute top-0 left-8 bg-p1 h-0.5 w-40" />
            </div>
        </div>
    );
};

export default FaqItem;

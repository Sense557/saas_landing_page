import {socials} from "../constants/index.jsx";

const Footer = () => {
    return (
        <footer>
            <div className="container py-10 ">
                <div className="flex max-md:flex-col w-full">
                    <div className="small-compact items-center justify-center flex flex-1 flex-wrap gap-5">
                        <p className="opacity-70">Copyright, JS Mastery</p>
                    </div>
                    <div className="flex items-center justify-center sm:ml-auto">
                        <p className="legal-after relative mr-9 transition-all duration-500 text-p5 hover:text-p1">
                            Privacy Policy
                        </p>
                        <p className="transition-all duration-500 text-p5 hover:text-p1">
                            Terms of Use
                        </p>
                    </div>
                    <ul className="flex flex-1 gap-3 justify-center max-md:mt-10 md:justify-end">
                        {socials.map(({id, url, icon, title}) =>
                            <li key={id}>
                                <a href={url} className="social-icon">
                                    <img src={icon} alt="icon" className="size-1/3 object-contain"/>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer

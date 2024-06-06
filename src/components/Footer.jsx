import logo from '../assets/logo.svg';


function Footer() {
    return (
        <>
            <footer className="p-4 bg-gray-50 border-gray-200 border-t-[1px]">
                <div className="m-auto max-w-screen-xl" >
                    <div className="flex justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="#" className="flex items-center">
                                <img src={logo} className="h-8" Alt="Logo"/>
                            </a>
                        </div>

                        <div class="">
                            <h6 className="mb-2 font-semibold uppercase">Nav title</h6> 
                            <ul className="no-underline">
                                <li>
                                    <a href="#" className="hover:underline">Item 1</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Item 1</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Item 1</a>
                                </li>
                            </ul>
                        </div>
                        <div class="">
                            <h6 className="mb-2 font-semibold uppercase">Nav title</h6>
                            <ul className="no-underline">
                                <li>
                                    <a href="#" className="hover:underline">Item 1</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Item 1</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Item 1</a>
                                </li>
                            </ul>
                        </div>
                        <div class="">
                            <h6 className="mb-2 font-semibold uppercase">Nav title</h6>
                            <ul className="no-underline">
                                <li>
                                    <a href="#" className="hover:underline">Item 1</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Item 1</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Item 1</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200"/>

                    <div className="flex justify-between text-xs text-gray-500">
                        <span>© 2024 Varjonen Dotcom. All rights deserved.</span>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;
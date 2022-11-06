import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <div className="shadow-sm bg-[#000] sticky top-0 z-50 shadow-md">
            <div className="flex justify-between   ">
                {/* Stanga */}
                <div className="relative hidden lg:inline-grid t-5 h-20 w-20 cursor-pointer ml-5">
                    <Link href="/" className="cursor-pointer">
                        <Image
                            src="/../public/logo.png"
                            layout="fill"
                            className="p-3"
                        />
                    </Link>
                </div>

                {/* Dreapta */}
                <div className="max-w-xs ml-auto mr-6 my-auto">
                    <div class="relative flex items-center w-full h-[2.5rem] rounded-full focus-within:shadow-lg bg-white overflow-hidden font-sans shadow-lg">
                        <div class="grid place-items-center h-full w-12 text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        <input
                            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-white font-josefin"
                            type="text"
                            id="search"
                            placeholder="Caută.."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;

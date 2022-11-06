import {
    WrenchIcon,
    WrenchScrewdriverIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

function Cards() {
    return (
        <div className="p-10 h-screen flex flex-col w-screen" id="Cards">
            <div className="block overflow-hidden">
                <h1 className="flex text-4xl font-black justify-center drop-shadow-md">
                    Alege o optiune
                </h1>
            </div>
            <div className="h-full grid justify-items-center">
                <div className="w-full cards grid grid-cols-2 place-items-center justify-items-center ml-20">
                    {/* Card  1*/}
                    <Link href="/home" className="cursor-pointer">
                        <div className="m-2 card cursor-pointer shadow-card shadow-2xl w-[24rem] h-[24rem]  py-6 grid grid-rows-3 justify-center items-center card-transition">
                            <div className="skill row-span-2 p-10 grid grid-rows-2 place-items-center">
                                <UserCircleIcon />
                                <span className="text-center flex justify-center items-center font-extrabold">
                                    UTIILIZATOR
                                </span>
                            </div>
                            <div className="row-span-1 text-center flex justify-center items-center">
                                <span className="font-mono font-extrabold text-sm">
                                    Vizualizează mai mult
                                </span>
                                <span className="flex justify-center items-center px-2">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4"
                                    >
                                        <path
                                            d="M12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375ZM6.5625 14.0625H12V17.3859C12 17.8875 12.6094 18.1406 12.9609 17.7844L18.3187 12.3984C18.5391 12.1781 18.5391 11.8266 18.3187 11.6063L12.9609 6.21563C12.6047 5.85938 12 6.1125 12 6.61406V9.9375H6.5625C6.25313 9.9375 6 10.1906 6 10.5V13.5C6 13.8094 6.25313 14.0625 6.5625 14.0625Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Card  2*/}
                    <Link href="/inregistrare" className="cursor-pointer">
                        <div className="m-2 card cursor-pointer shadow-card shadow-2xl w-[24rem] h-[24rem] py-6 grid grid-rows-3 justify-center items-center card-transition">
                            <div className="skill row-span-2 p-10 grid grid-rows-2 place-items-center">
                                <WrenchScrewdriverIcon />
                                <span className="text-center flex justify-center items-center font-extrabold">
                                    MECANIC
                                </span>
                            </div>
                            <div className="row-span-1 text-center flex justify-center items-center">
                                <span className="font-mono font-extrabold text-sm">
                                    Vizualizează mai mult
                                </span>
                                <span className="flex justify-center items-center px-2">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4"
                                    >
                                        <path
                                            d="M12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375ZM6.5625 14.0625H12V17.3859C12 17.8875 12.6094 18.1406 12.9609 17.7844L18.3187 12.3984C18.5391 12.1781 18.5391 11.8266 18.3187 11.6063L12.9609 6.21563C12.6047 5.85938 12 6.1125 12 6.61406V9.9375H6.5625C6.25313 9.9375 6 10.1906 6 10.5V13.5C6 13.8094 6.25313 14.0625 6.5625 14.0625Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cards;

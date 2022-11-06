import Headerr from '../../components/Headerr.js';
import Lista from '../../components/Lista';
import Image from 'next/image';

export default function HomePage() {
    return (
        <>
            <div className="grid grid-cols-5 grid-rows-2 ">
                <div className="col-span-2 row-span-2 flex-start">
                    <div className="flex flex-col justify-center items-start ">
                        <div className="relative hidden lg:inline-grid mt-0 h-16 w-16 grid-auto-flow:row cursor-pointer ml-20  items-center justify-center">
                        <Image
                            src="/../public/Doodles.png"
                            layout="fill"
                            className="p-3"
                        />
                        </div>
                        <h1 className="flex field p-5 font-josefin font-bold border-2 border-black w-[16rem]">
                            <span className="flex flex-center">
                                Kiran Acharya
                            </span>
                        </h1>
                        <div className="field p-5 font-josefin font-bold border-2 border-black w-[16rem]">
                            Cont
                        </div>
                        <div className="field p-5 font-josefin font-bold border-2 border-black w-[16rem]">
                            Parola
                        </div>
                        <div className="field p-5 font-josefin font-bold border-2 border-black w-[16rem]">
                            Securitate
                        </div>
                        <div className="field p-5 font-josefin font-bold border-2 border-black w-[16rem]">
                            Aplicatie
                        </div>
                        <div className="field p-5 font-josefin font-bold border-2 border-black w-[16rem]">
                            Notificări
                        </div>
                    </div>
                </div>

                <div className="col-span-3 grid grid-rows-3  place-items-center">
                    <div>
                        <h1 className="font-bold font-xl">Setări Cont</h1>
                    </div>

                </div>
            </div>
        </>
    );
}

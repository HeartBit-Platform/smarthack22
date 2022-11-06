import Headerr from '../../components/Headerr.js';
import Lista from '../../components/Lista';
import image from '../../images/mihai.jpeg';
export default function HomePage() {
    return (
        <>
            <div className="grid grid-cols-5 grid-rows-2 ">
                <div className="col-span-2 row-span-2 flex-start">
                    <div className="flex flex-col justify-center items-start">
                        <div className="flex p-2 font-josefin font-bold border-2 border-black w-[16rem] items-center justify-center">
                            <img
                                class="p-1 w-16 h-16 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 self-center "
                                src={image}
                                alt=""
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

import Cards from '../components/Cards';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div
                className="background h-screen w-screen items-center justify-center"
                id="home"
            >
                <div className="grid grid-cols-2 p-20 place-items-center">
                    <div>
                        <h1 className="font-mono font-extrabold  text-5xl">
                            MecaniX
                        </h1>
                        <p className="pt-[5%]">
                            Bine ai venit! MecaniX este platforma unde poți să
                            îți creezi un site de prezentare pentru service-ul
                            tău auto.
                        </p>
                    </div>

                    <div>
                        <img src="/../public/Doodless.png" className="p-3" />
                    </div>
                </div>
            </div>

            <Cards />
        </>
    );
}

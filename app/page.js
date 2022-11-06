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
                        <p className="pt-[5%] font-josefin">
                            Bine ai venit! <br /> MecaniX este platforma unde
                            poți să îți creezi un site de prezentare pentru
                            service-ul tău auto.
                        </p>
                        <br />
                        <pre>Vrei mașini la reparat? Cu MecaniX imediat!</pre>
                    </div>

                    <div className="relative hidden lg:inline-grid mt-0 h-80 w-80 grid-auto-flow:row cursor-pointer ml-20  items-center justify-center">
                        <Image
                            src="/../public/Doodles.png"
                            layout="fill"
                            className="p-3"
                        />
                        </div>
                </div>
            </div>

            <Cards />
        </>
    );
}

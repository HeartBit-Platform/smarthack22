'use client';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import ListItems from './ListItems';
function Lista() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        }));
        setSuggestions(suggestions);
    }, []);
    return (
            <div className="grid grid-cols-5">
                <div className=" col-span-2 bg-white border-[#EDECEC] rounded-sm max-h-[40rem] max-w-full overflow-y-scroll">
                    <ListItems />
                </div>

                <div className="grid grid-rows-6 col-span-3 overflow-y-scroll max-h-[40rem] max-w-full overflow-y-scroll p-10">
                    <div className="row-span-1">
                        <h1 className="underline block text-2xl font-extrabold">
                            Stunning Mecanic Wheels
                        </h1>
                        <p className="underline block mt-2 text-[#666060] font-medium">
                            Website link: https://www.stunningwheels.com/
                        </p>
                    </div>

                    <div>
                        Ai de făcut o reparație la mașina ta si cauți un service
                        auto de încredere? Ai ajuns unde trebuie! Lasă toate
                        grijile pe seama noastră! Echipa noastră de experți te
                        va ajuta să rezolvi rapid orice problemă auto. Știm că
                        îți dorești să găsești cea mai bună soluție, să te
                        bucuri de mașina ta cat mai repede, să achiți prețul
                        corect și să fii informat cu privire la fiecare pas.
                        Fiecare client ce ne pășește pragul ne dorim să plece
                        mulțumit iar tu poți fi unul dintre ei. Dedicăm
                        fiecărei lucrări atenție si implicare, asigurându-ne că
                        te vei bucura de mașina ta în siguranță cat mai rapid!
                        La NUME_SERVICE vei găsi servicii excelente, o echipă de
                        profesioniști, transparentă, consultanță permanentă si
                        prețuri avantajoase.
                    <div className="row-span-2">
                        <h1 className="underline block text-2xl font-extrabold">
                            Descriere
                        </h1>
                        <p className=" block mt-2 text-[#666060] font-medium">
                            Ai de făcut o reparație la mașina ta si cauți un
                            service auto de încredere? Ai ajuns unde trebuie!
                            Lasă toate grijile pe seama noastră! Echipa noastră
                            de experți te va ajuta să rezolvi rapid orice
                            problemă auto. Știm că îți dorești să găsești cea
                            mai bună soluție, să te bucuri de mașina ta cat mai
                            repede, să achiți prețul corect și să fii informat
                            cu privire la fiecare pas. Fiecare client ce ne
                            pășește pragul ne dorim să plece mulțumit iar tu
                            poți fi unul dintre ei. Dedicăm fiecărei lucrări
                            atenție si implicare, asigurându-ne că te vei bucura
                            de mașina ta în siguranță cat mai rapid! La
                            NUME_SERVICE vei găsi servicii excelente, o echipă
                            de profesioniști, transparentă, consultanță
                            permanentă si prețuri avantajoase.
                        </p>
                    </div>

                    <div className="row-span-3 mt-8">
                        <h1 className="underline block text-2xl font-extrabold">
                            Location
                        </h1>
                        <p className="block mt-2 text-[#666060] font-medium">
                            <script src={``} async></script>
                        </p>
                    </div>
                </div>
            </div>
    );
}
export default Lista;

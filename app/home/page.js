import Cards from '../../components/Cards';

export default function Home() {
    return (
        <>
            <div
                className="background h-screen w-screen items-center justify-center"
                id="home"
            >
                <div className="grid grid-rows-2 p-20 place-items-center">
                    <h1 className="font-mono font-extrabold  text-5xl">
                        MecaniX
                    </h1>
                    <p className="pt-[5%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Soluta, laudantium? Ullam incidunt eaque dolores
                        exercitationem, officia facilis a explicabo ut.
                        Reprehenderit sint iste, repellendus sunt dolore ratione
                        id repudiandae placeat labore accusantium distinctio
                        quod alias asperiores unde omnis dolorem nam hic magnam?
                        Ullam ratione ducimus alias. Perspiciatis dolorem
                        laboriosam dignissimos.
                    </p>
                </div>
            </div>

            <Cards />
        </>
    );
}

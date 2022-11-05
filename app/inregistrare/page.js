export default function inregistrare(){
return ( 
        <div className="columns-1 w-2/3 m-auto">
            <p className=""></p>
            <form className="bg-red-500 p-5 m-5" action="/send-data-here" method="post">

                <label className="w-full" for="nume-firma">Nume Firma:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="text" id="nume-firma" name="nume-firma" />

                <label className="w-full" for="cui">Cod Identificare Fiscala:</label>
                <input className="w-full" type="text" id="cui" name="cui" />

                <label className="w-full" for="adresa">Adresa:</label>
                <input className="w-full" type="text" id="adresa" name="adresa" />

                <label className="w-full" for="cui">Cod Identificare Fiscala:</label>
                <input className="w-full" type="text" id="cui" name="cui" />

                <label className="w-full" for="cui">Cod Identificare Fiscala:</label>
                <input className="w-full" type="text" id="cui" name="cui" />



                <button className="w-full" type="inregistrare">Inregistrare</button>
            </form>

        </div>
    )
}

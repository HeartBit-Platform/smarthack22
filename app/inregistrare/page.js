import Link from "next/link"
export default function inregistrare(){
return (
        <div className="bg-white"> 
            <div className="columns-1 w-3/4 bg-white m-auto">
                <p className="py-5 text-xl font-bold text-center m-auto p-2">Înregistrare Service Auto</p>
                <form class="w-full max-w-lg m-auto p-10">

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-persoana-contact">
                        Persoană Contact
                    </label>
                    <input class="appearance-none bg-white block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-persoana-contact" type="text" placeholder="Andrei Popescu">
                    </input>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-denumire-srl">
                        Denumire SRL
                    </label>
                    <input class="appearance-none bg-white block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-denumire-srl" type="text" placeholder="Matrix Service SRL">
                    </input>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                        Email
                    </label>
                    <input class="appearance-none bg-white block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="Jane">
                    </input>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-cui">
                        CUI
                    </label>
                    <input class="appearance-none bg-white block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-cui" type="text" placeholder="RO265689">
                    </input>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-telefon-contact">
                        Telefon Contact
                    </label>
                    <input class="appearance-none bg-white block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-telefon-contact" type="text" placeholder="0723 658 987">
                    </input>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-telefon-service">
                        Telefon Service
                    </label>
                    <input class="appearance-none bg-white block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-telefon-service" type="text" placeholder="0765 986 225">
                    </input>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-parola">
                        Parola
                    </label>
                    <input class="appearance-none bg-white block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-parola" type="password" placeholder="**********">
                    </input>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-oras">
                        Oras
                    </label>
                    <input class="appearance-none bg-white block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-oras" type="text" placeholder="Pitesti">
                    </input>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-repeta-parola">
                        Repeta Parola
                    </label>
                    <input class="appearance-none bg-white block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-repeta-parola" type="password" placeholder="**********">
                    </input>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-adresa">
                        Adresa
                    </label>
                    <input class="appearance-none bg-white block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-adresa" type="text" placeholder="Str. Șurubului, nr. 45">
                    </input>
                    </div>
                </div>


                {/* <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            </input>
                            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Vue JS</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            </input>
                            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            </input>
                            <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
                        </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            </input>
                            <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 font-black dark:text-gray-300">Laravel</label>
                        </div>
                    </li>
                </ul> */}


                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Service</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Spălătorie</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Polish</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Schimbare Piese</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Tinichigerie</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Soft Tuning</label>
                </div>


                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Bodykit</label>
                </div>

                
                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Sistem de evacuare</label>
                </div>

                
                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Dezmembrări</label>
                </div>

                
                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Service Motociclete</label>
                </div>

                
                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Colantare</label>
                </div>

                
                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Folii geamuri</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Retapițare</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Detailing</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Vopsit</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Vulcanizare</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Diagnoză</label>
                </div>

                <div class="flex items-center">
                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </input>
                    <label for="link-checkbox" class="py-5 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sunt de acord cu <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">termenii și condițiile</a>.</label>
                </div>
                <Link href="/garaj/builder" className="cursor-pointer">
                    <div class="flex items-center justify-between">
                        <button class="my-5 m-auto bg-baby-blue hover:bg-angry-baby-blue text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Mergi mai departe
                        </button>
                    </div>
                </Link>


                </form>
                
            </div>
            
        </div>
    
    )
}

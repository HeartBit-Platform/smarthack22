import {MagnifyingGlassIcon,

} from "@heroicons/react/24/outline";



function Header()  {
    return (
        <div className="shadow-sm border-b bg-cyan-800 sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
            {/* Stanga */}
              {/*left*/}
           
              <div className="relative hidden lg:inline-grid t-20 h-24 w-24 cursor-pointer">
                Mechano
            </div>
           
            {/* Dreapta */}
            <div className="max-w-xs ">
                <div className='relative mt-1 p-7 rounded-md'>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none '> 
                        <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' /> 
                    </div>
                    <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type="text" placeholder="Search"></input>
                </div>
            </div>

           
            </div>
            </div>
            
    )
}
export default Header
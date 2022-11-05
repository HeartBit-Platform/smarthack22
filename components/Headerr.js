import {MagnifyingGlassIcon,

} from "@heroicons/react/24/outline";
import Image from 'next/image'


function Header()  {
    return (
        <div className="shadow-sm border-b bg-angry-baby-blue sticky top-0 z-50">
            <div className="flex justify-between   ">
            {/* Stanga */}
            <div className="relative hidden lg:inline-grid t-5 h-20 w-20 cursor-pointer ml-5">
                <Image 
                src='/../public/logo-white.png'
                layout='fill'
                objectFit='contain'
                />
            </div>
             
           
            {/* Dreapta */}
            <div className="max-w-xs ml-auto mr-0">
                <div className='relative mt-1 p-7 rounded-md '>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none '> 
                        <MagnifyingGlassIcon className='h-5 w-5 text-blue-700' /> 
                    </div>
                    <input className='bg-gray-100 block w-full pl-10 sm:text-sm border-black focus:ring-black focus:border-black rounded-md bg-white' type="text" placeholder="Search"></input>
                </div>
            </div>

           
        </div>
    </div>        
    )
}
export default Header
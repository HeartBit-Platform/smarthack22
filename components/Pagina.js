function Pagina({avatar, username}) {
    return(
      <div className="p-3 bg-baby-blue flex flex-1 items-center border border-white h-20 w-80  object-contain cursor-pointer
      hover:scale-110 transition transform duration-200 ease-out">
        <img className="r-5 h-14 w-14 p-[1.5px]  border-2 border-angry-baby-blue" src={avatar} alt="image" ></img>
        <p className="text-xl w-14 text-center pl-10">{username}</p>
      </div>
    )
  
  }
  export default Pagina
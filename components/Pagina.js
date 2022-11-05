function Pagina({avatar, username}) {
    return(
      <div className="p-3 bg-white flex flex-1 items-center">
        <img className="r-5 h-14 w-14 p-[1.5px]  border-2 object-contain cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out" src={avatar} alt="image" ></img>
        <p className="text-xl w-14 text-center pl-10">{username}</p>
      </div>
    )
  
  }
  export default Pagina
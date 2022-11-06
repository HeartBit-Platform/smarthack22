function Pagina({ avatar, username }) {
    return (
        <div
            className="p-3 bg-[#EDECEC] flex items-center border border-[#3E3E3F] h-16 w-ful cursor-pointer
  transition duration-200 hover:bg-[#CED3DC]"
        >
            <img
                className="r-5 h-10 w-10 border-2"
                src={avatar}
                alt="image"
            ></img>
            <p className="text-xl w-14 text-center pl-10">{username}</p>
        </div>
    );
}
export default Pagina;

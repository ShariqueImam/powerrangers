import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const style = {
  wrapper:
    "my-6 flex w-[85%] md:w-[35%] mx-auto items-center justify-center border-2 rounded-2xl border-[#ffc900] ",
  input:
    "flex-1 bg-transparent px-3 py-1 md:py-3 outline-none placeholder:text-gray-400",
  iconContainer:
    "flex items-center justify-center bg-[#ffc900] px-3 py-2 md:py-3 rounded-r-xl cursor-pointer",
};
const SearchBar = (props) => {
  // searchValue holds the current value that is added to the search bar
  const [searchValue, setSearchValue] = useState("");
  const handleChangeValue = (event) => {
    setSearchValue(event.target.value);
  };
  // handling the searchbar
  const handleSearch = (event) => {
    event.preventDefault()
    props.onSearch(searchValue);
  };
  return (
    <form action="#" className={style.wrapper} onSubmit={handleSearch}>
      <input
        type="text"
        className={style.input}
        placeholder="Find a game..."
        value={searchValue}
        onChange={handleChangeValue}
      />
      <div className={style.iconContainer} onClick={handleSearch}>
        <BsSearch className="text-gray-100 text-2xl" />
      </div>
    </form>
  );
};

export default SearchBar;

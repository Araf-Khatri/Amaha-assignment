import searchIcon from "../Assets/search.svg";
import { ChangeEvent, FC } from "react";

const Searchbar: FC<{ setSearchData: (data: string) => void }> = ({
  setSearchData,
}) => {
  return (
    <div className="flex justify-between ml-auto px-6 py-4 md:max-w-sm w-full rounded-lg border bg-white border-primary-800">
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchData(e.target.value);
        }}
        type="text"
        placeholder="Search articles"
        className="outline-none p-0 w-full placeholder:text-xl placeholder:text-primary-700"
      />
      <img src={searchIcon} alt="search-icon" className="h-6 w-6" />
    </div>
  );
};

export default Searchbar;

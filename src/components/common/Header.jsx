import { Search } from "lucide-react";
import Dropdown from "../../utils/Dropdown";
import user_avatar from "../../assets/user.svg";
import { useState } from "react";

const dropdownValues = {
  Home: ["All", "Movies", "TV Shows"],
  Store: ["All", "Rent", "Channels"],
  Lang: ["En", "Hi", "Ben", "Es", "Ar"],
};

const Header = () => {
  const [selectedLang, setSelectedLang]=useState("En")
  return (
    <nav className="bg-slate-950 py-2">
      <div className="flex w-10/12 justify-center mx-auto">
        <div className="w-13 pr-10 pt-1">
          <img
            src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
            alt="Prime Video"
            width={120}
          />
        </div>
        <ul className="flex text-gray-400 text-lg font-semibold gap-8 ps-5">
          <li>
            <Dropdown name="Home" values={dropdownValues.Home} />
          </li>
          <li>
            <Dropdown name="Store" values={dropdownValues.Home} />
          </li>
          <li>LiveTV</li>
          <li>Categories</li>
        </ul>
        <ul className="flex text-gray-400 text-lg font-semibold gap-8 ps-20">
          <li>
            <Search />
          </li>
          <li>Try for free</li>
          <li>
            <Dropdown name={selectedLang} values={dropdownValues.Lang} onLanguageChange={setSelectedLang}/>
          </li>
          <li>
            <img src={user_avatar} alt="user-icn" width={35} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

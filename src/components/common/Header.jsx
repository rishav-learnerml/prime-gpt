import { Search } from "lucide-react";
import Dropdown from "../../utils/Dropdown";
import user_avatar from "../../assets/user.svg";
import loggedin_user_avatar from "../../assets/loggedin-user-avatar.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { dropdownValues } from "../../utils/constant/MockData";

const Header = () => {
  const [selectedLang, setSelectedLang] = useState("En");
  const userDetails = useSelector((store) => store.user.currentUser);
  console.log(userDetails);

  return (
    <nav className="bg-slate-950 py-2 sticky top-0 z-10">
      <div className="flex w-10/12 justify-center mx-auto">
        <div className="w-13 pr-10 pt-1">
          <Link to="/">
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
              alt="Prime Video"
              width={120}
            />
          </Link>
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
          <li>
            {userDetails ? (
              <Dropdown name="MY Stuff" values={dropdownValues.MyStuff} />
            ) : (
              "Try for free"
            )}
          </li>
          <li>
            <Dropdown
              name={selectedLang}
              values={dropdownValues.Lang}
              onLanguageChange={setSelectedLang}
            />
          </li>
          <li>
            {userDetails ? (
              <div className="flex">
                <span className="text-gray-400 text-lg font-semibold pr-4">
                  {userDetails?.displayName}
                </span>
                <img src={loggedin_user_avatar} alt="user-icn" width={35} />
                <Dropdown values={dropdownValues.userProfile} />
              </div>
            ) : (
              <img src={user_avatar} alt="user-icn" width={35} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

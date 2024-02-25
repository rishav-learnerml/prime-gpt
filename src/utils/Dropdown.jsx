import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { userSignOut } from "./constant/userauth";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ name, values, onLanguageChange = () => {} }) => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="pr-1">{name}</div>
      <DropdownMenu className="bg-slate-900 border-none">
        <DropdownMenuTrigger>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-900 text-gray-400 font-semibold ">
          {values?.map((dropdownItem) => (
            <DropdownMenuItem
              key={dropdownItem}
              onClick={() => {
                onLanguageChange(dropdownItem);
                if (dropdownItem?.toLowerCase() === "sign out") {
                  userSignOut();
                  navigate("/");
                }
              }}
              value={dropdownItem}
            >
              {dropdownItem}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;

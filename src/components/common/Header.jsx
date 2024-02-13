import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <nav className="bg-slate-950 p-4">
      <div className="flex w-10/12 justify-center">
        <div className="w-13 pr-10 pt-1">
          <img
            src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
            alt="Prime Video"
            width={120}
          />
        </div>
        <ul className="flex text-gray-400 text-lg font-semibold gap-12 ps-5">
          <li>
            Home
            <DropdownMenu className="bg-slate-900">
              <DropdownMenuTrigger className="border-none">
                🔽
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>Store</li>
          <li>LiveTV</li>
          <li>Categories</li>
        </ul>
        <ul></ul>
      </div>
    </nav>
  );
};

export default Header;

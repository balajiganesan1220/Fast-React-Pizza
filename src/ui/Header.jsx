import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="font-pizza bg-yellow-500 border-b sm:px-6 flex justify-between border-stone-200 uppercase px-4 py-3">
      <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
      <SearchOrder />
   <Username/>
    </header>
  );
}

export default Header;

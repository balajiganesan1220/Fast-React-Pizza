import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
     const totalCartQuantity=useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)
  if (!totalCartQuantity) return null;
  return (
    <div className="bg-stone-800 px-4  sm:px-6 md:text-base flex items-center justify-between text-stone-200 uppercase py-4">
      <p className="text-stone-300 sm:space-x-6 font-semibold space-x-4">
        
        <span>{totalCartQuantity} Pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>

  );
}

export default CartOverview;

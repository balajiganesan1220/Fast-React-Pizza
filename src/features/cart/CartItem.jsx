
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuntity from "./UpdateItemQuntity";


function CartItem({item}) {
    const { pizzaId, name, quantity, totalPrice } = item;
    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">{quantity}&times; {name}</p>
            <div className="sm:gap-6 flex item-center justify-between">
                <p className=" text-sm font-bold">{formatCurrency(totalPrice)}</p>
                <UpdateItemQuntity pizzaId={ pizzaId} />
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem;
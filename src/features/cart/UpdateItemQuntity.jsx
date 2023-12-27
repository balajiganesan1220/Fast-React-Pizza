import { useDispatch ,useSelector } from "react-redux";
import Button from "../../ui/Button"
import { decreaseItemQuntity, increaseItemQuantity } from "./CartSlice";
import { getCurrentQuantity } from "../cart/CartSlice";
function UpdateItemQuntity({ pizzaId }) {
    const dispatch = useDispatch();
    const currentQuantity = useSelector(getCurrentQuantity(pizzaId));
    return (
        <div className="flex item-center gap-2 md:gap-3">
            <Button type="round" onClick={()=>dispatch(decreaseItemQuntity(pizzaId))}>-</Button>
           <span>{currentQuantity}</span>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuntity;

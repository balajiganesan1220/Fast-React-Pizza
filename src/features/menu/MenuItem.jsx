import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button"
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantity } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuntity from "../cart/UpdateItemQuntity";
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity=useSelector(getCurrentQuantity(id))
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice:unitPrice,
    }

    dispatch(addItem(newItem));
 }
  return (
    
      <li className="flex gap-4 py-2">
      <img src={imageUrl} alt="name" className={`h-24 ${soldOut?"greyscale opacity-70":""}`}/>
        <div className="flex grow pt-0.5 flex-col">
          <p className="font-medium">{name}</p>
          <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
        
        <div className="mt-auto  flex items-center justify-between">
          {!soldOut ? <p className="text-sm uppercase font-medium text-stone-500">{formatCurrency(unitPrice)}</p> :( <p className="text-sm font-medium uppercase text-stone-500">Sold Out</p>)}
          {isInCart &&<div className="flex item-center gap-3 sm:gap-8"><UpdateItemQuntity pizzaId={id}/><DeleteItem pizzaId={id} /></div>}
          {!soldOut &&!isInCart&& <Button type="small" onClick={handleAddToCart}>Add to Cart</Button>}
       
        </div>
        </div>
      </li>
  );
}

export default MenuItem;

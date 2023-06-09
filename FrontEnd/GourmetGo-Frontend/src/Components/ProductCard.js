import React from "react";
import { CircleCheck } from 'tabler-icons-react';
import "../CSS/ProductCard.css"
import Swal from "sweetalert2";

function ProductCard ( {Photo, Name, Price, Restaurant, setCart, Cart} ) {

    const handleBuyProduct = (e) => {
        e.preventDefault();
        setCart(Cart => Cart.concat({
            Photo,
            Name,
            Price,
            Restaurant
        }))
        console.log(Cart)
        Swal.fire({
            title: "Producto agregado al carrito",
            icon: "success",
            button: "Aww yiss!",
         });
    }

    return(
        <div className="ProductContainer">
            <img src={Photo} className="ProductPhoto"/>
            <div className="ProductDetails">
                <h1>{Name}</h1>
                <h1 id="Price">{Price}</h1>
                <h1>{Restaurant}</h1>
                <button className="OrderButton" onClick={handleBuyProduct}>
                    <div className="CheckDiv">
                    <CircleCheck size={20} color="#3d862d" />
                    </div>
                    Ordenar
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
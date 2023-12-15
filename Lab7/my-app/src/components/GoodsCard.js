import React from "react";

import "../styles/goodsStyle.css";

function GoodsCard({imgPath, name, price}){
    return(
        <div className="good-card">
            <img src={require(`../images/${imgPath}`)} alt={name}></img>
            <p>商品名: {name}</p>
            <p>価格: {price}</p>
        </div>
    );
}

export default GoodsCard;
import React from "react";

import GoodsCard from "./GoodsCard";

class Goods extends React.Component{
    goodsExamples = [
        {imgPath: "Task2-Attack-On-Titan-1.jpg", name: "マンガ 進撃の巨人 第一巻", price: "1250円"},
        {imgPath: "Task2-Attack-On-Titan-33.jpg", name: "マンガ 進撃の巨人 第三十三巻", price: "875円"},
        {imgPath: "Task2-Chainsaw-Man-1.jpg", name: "マンガ チェンソーマン 第一巻", price: "1100円"},
        {imgPath: "Task2-Chainsaw-Man-12.jpg", name: "マンガ チェンソーマン 第十二巻", price: "445円"},
        {imgPath: "Task2-OnePunch-Man-1.jpg", name: "マンガ ワンパンマン 第一巻", price: "800円"},
        {imgPath: "Task2-OnePunch-Man-25.jpg", name: "マンガ ワンパンマン 第二十五巻", price: "1500円"},
        // {imgPath: "", name: "", cost: ""},
        // {imgPath: "", name: "", cost: ""},
    ];
    
    constructor(props){
        super(props);
        
    }

    render(){
        return <div className="goods-container">
            {this.goodsExamples.map((product) => ( 
            <GoodsCard 
                imgPath={product.imgPath}
                name={product.name}
                price={product.price}
            />
        ))}
        </div>
    }
}

export default Goods;
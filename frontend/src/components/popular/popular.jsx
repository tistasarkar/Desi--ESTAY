import React from "react";
import './popular.css'
import data_product from "../Assets/Frontend_Assets/data";
import Item from '../Item/Item'

const popular = () => {
    return (
        <div className='popular'>
          <h1>POPULAR IN ACCESSORIES</h1>
          <hr />
          <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}
          </div>

        </div>
    )
}

export default popular
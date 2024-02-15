import React from 'react'

interface propsType {

    img : string ;
    title : string ;
    desc : string ;
    rating : number ;
    price : string ;
}

 const ProductCard: React.FC<propsType> = ({
    
    img,
    title,
    desc,
    rating, 
    price

}) => {
  return (
    <div className='px-4 border border-gray-200 rounded-xl max-w-[400px] '>
        <div>
            <img className="w-full h-auto"  
             src   = {img}
             width = {200}
             height= {300} 
             alt   = {title} />
        </div>
    </div>
  )
}
export default ProductCard;
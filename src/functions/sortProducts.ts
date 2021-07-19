/**
   * sortProducts() - Sort an array of products based on a specified key
   * @param sortProperty - a key, belonging to a product object, that you wish to sort by 
   * @param order - 
   * @param productArr - an array of product object
   */

type BasicProduct = {
   name?:string,
   title?:string,
   price:number | string,
   [key: string]: any
}

export default function(sortProperty:string, order:string, productArr:Array<BasicProduct>){

}
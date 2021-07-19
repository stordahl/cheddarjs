/** 
   * convertCents() - Converts a number of cents to the dollar value in any currency
   * @module convertCents
   * @param {string} currency The currency code of the value
   * @param {string} lang The language of the locale
   * @param {number} value The value to be converted
   * @returns {string}
 */
export default function(currency:string, lang:string, value:number ) {
  const supportedCurrency:string[] = ['CAD', 'GBP', 'JYP', 'USD']
  let factor

  try {
    if(supportedCurrency.indexOf(currency) > -1){
      factor = 100
      const output:string = (value/factor).toLocaleString(lang, {style:"currency", currency:currency})
      return output
    } else { 
      throw new Error('currency not supported')
    }
  } catch (e){ 
    throw new Error(e) 
  }
} 
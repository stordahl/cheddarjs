/**
   * convertCents() - Converts a number of cents to the dollar value in any currency
   * @module convertCents
   * @param {string} currency The currency code of the value
   * @param {string} lang The language of the locale
   * @param {number} value The value to be converted
   * @returns {string}
 */
export default function (currency, lang, value) {
    var supportedCurrency = ['CAD', 'GBP', 'JYP', 'USD'];
    var factor;
    try {
        if (supportedCurrency.indexOf(currency) > -1) {
            factor = 100;
            var output = (value / factor).toLocaleString(lang, { style: "currency", currency: currency });
            return output;
        }
        else {
            throw new Error('currency not supported');
        }
    }
    catch (e) {
        throw new Error(e);
    }
}
//# sourceMappingURL=convertCents.js.map
import React, {useId} from "react";


function InputBox({
    label,
    amount,
    onAmountchangee,
    oncurrencychange,
    currencyoptions = [],
    selectcurrency = "usd",
    amountdisable = false,
    currencydisable = false,
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-gray-600 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 border-b-2 border-black opacity-100 text-black "
                    type="number"
                    // placeholder="Amount"
                    disabled={amountdisable}
                    value={amount || !amountdisable}
                    placeholder={amount}
                    onChange={(e) => onAmountchangee && onAmountchangee(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-gray-600 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-300 cursor-pointer outline-none text-gray-800"
                    value={selectcurrency}
                    onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
                    disabled={currencydisable}
                >
                    
                        {currencyoptions.map((Currency) => (
                            <option key={Currency}
                            value={Currency}>
                            {Currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

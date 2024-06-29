import { useEffect, useState } from 'react'
import usecurrencyinfo from './hooks/usecurrencyinfo'
import './App.css'
import InputBox from './components/InputBox'

function App() {

  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedamount, setconvertedamount] = useState(0)

  var currencyinfo = usecurrencyinfo(from);
  const options = Object.keys(currencyinfo)

  // useEffect(async() => {
  //   console.log("here");
  //   currencyinfo = await usecurrencyinfo(from);
  //   console.log(currencyinfo);
  //   convert()
  // }, [])

  const swap = () => {
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)
  }

  const convert = () => {
    console.log(currencyinfo);
    console.log(currencyinfo[to]);
    setconvertedamount(amount * currencyinfo[to])

  }

  return (
    <>
      <h1 className='w-full py-3 bg-gray-800 rounded-md font-bold text-center text-2xl'>Currency Convertor</h1>

      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          // backgroundImage: `https://images.pexels.com/photos/20849019/pexels-photo-20849019/free-photo-of-black-and-white-photo-of-a-swan-swimming-in-a-lake-under-dark-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyoptions={options}
                  oncurrencychange={(currency) => setamount(amount)}
                  selectcurrency={from}
                  className='text-gray-800 text-xl mb-8'
                  onAmountchangee={(amount) => setamount(amount)}

                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute w-20 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 font-bold"
                  onClick={swap}>
                  SWAP
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedamount}
                  currencyoptions={options}
                  oncurrencychange={(currency) => setto(currency)}
                  selectcurrency={to}
                  amountdisable
                  className='text-gray-800 text-xl mt-8'
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

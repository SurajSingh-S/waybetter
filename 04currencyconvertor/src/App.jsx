import { useState } from 'react'
import { InputBox } from './components'
import './App.css'
import usecurrencyinfo from './hooks/usecurrencyinfo'



function App() {
  const [amount,setamount]=useState(0);
  const [from,setfrom]=useState("usd");
  const [to,setto]=useState("inr");
  const[convertedamount, setconvertedamount]=useState(0)

  const currencyinfo = usecurrencyinfo(from)
  const option = Object.keys(currencyinfo)

const swap=()=>{
  setfrom(to);
  setto(from)
  setconvertedamount(amount);
  setamount(convertedamount)
}


  const convert=()=>{setconvertedamount(amount*currencyinfo[to])}
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://png.pngtree.com/background/20211215/original/pngtree-cartoon-satellite-ruler-calculator-linear-education-background-picture-image_1458755.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currentyoptoins={option}
                            oncurrencychange={(currency)=> setamount(amount)}
                            selectcurrency={from}
                            onamountchange={(amount)=>setamount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                           onClick={swap} 
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="to"
                            amount={convertedamount}
                            currentyoptoins={option}
                            oncurrencychange={(currency)=> setto(currency)}
                            selectcurrency={from}
                            amountdisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        convert {from.toUpperCase() } to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App

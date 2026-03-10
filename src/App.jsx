import MainText from './components/MainText'
import RightBox from './components/RightBox'
import './App.css'
import LeftBox from './components/LeftBox'

function App() {
  return (
    <div className="flex min-h-screen 
    bg-[rgba(237,237,214)]
    bg-[linear-gradient(rgba(245,0,252,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,170,0,0.12)_1px,transparent_1px)] 
    bg-[size:24px_24px]">
<div className="h-screen justify-center flex flex-col xl:flex-row lg:flex-row  md:flex-row sm:flex-row w-full ">

    <LeftBox />
   <MainText />
   <RightBox />
     

   </div>

    </div>
  )
}

export default App
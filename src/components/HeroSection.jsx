import logo from '../assets/logo.svg';



function HeroSection() {
    return (
        <>
        <div className="py-10" >
          <div className="max-w-screen-xl mx-auto text-center ">
        <div className="flex flex-col items-center justify-center gap-6">

          <div className="">
            <h1 className="font-black text-5xl">Unique Selling Point</h1>
            <p>Edit <code>src/App.js</code> and save to reload.</p>
          </div>

          <div className="">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

        </div>
        </div>
      </div>
      </>
    )
}

export default HeroSection;
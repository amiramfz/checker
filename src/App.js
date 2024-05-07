import "./App.css";
import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import BudyImage from "./image/budy.png";
import PolocImage from "./image/naja.36d41784d388a9df5e35.png";
import FataImage from "./image/fata.48ab373f1b73ce9e76c8.png";
import ParvareshImage from "./image/parvaresh.b4880fb01eca17b103ec.jpg";
import ErtebatatImage from "./image/1400081920183586624028024.00b9a093a667895b33df.jpg";
import "./index.css";

function App() {
  const [web, setweb] = useState("");
  const [massage, setMassage] = useState(false);

  function inputhandler(params) {
    setweb(params.target.value);
  }

  function clickHandler() {
    if (web.includes(".com") || (web.includes(".ir") && web.includes("www."))) {
      setMassage('yes');
    } else {
      setMassage('no');
    }
  }

  return (
    <div className="App">
      <div className="upBox">
        <dive className="rightUpBox">
          <h1 className="">کلیک چک</h1>
          <input
            onChange={inputhandler}
            placeholder="سایت مورد نظر را وارد کنید"
          />
          {massage=='yes' ? <dive className='massBox'><p className='massTextRight'>سایت معتبر است</p></dive> : <></>}
          {massage=='no' ? <dive className='massBox'><p className='massTextWrong'>سایت معتبر نیست</p></dive> : <></>}
          <button onClick={clickHandler}>
            <FcSearch />
            چک
          </button>
        </dive>
        <dive className="leftUpBox">
          <img className="leftUpImage" src={BudyImage} />
        </dive>
      </div>
      <div className="downBox">
        <dive className="downRight">
          <h2>درباره ما :</h2>
          <p>
            کلیک چک با هدف کنترل لینک های امن و شناسایی لینک های آسیب زننده
            بوجود آمده است در دنیای آنلاین امروز سایت ها و لینک های آسیب زننده ی
            زیادی با هدف سواستفاده ی مالی و اطلاعاتی وجود دارند و واجب است که ما
            با دقت بیشتری در این فضا فعالیت داشته باشید. کلیک چک یکی از سایت
            هایی است که به شما این امکان رو میدهد با جستجوی سایت ها از امن بودن
            آن اطمینان داشته باشید
          </p>
        </dive>
        <dive className="downLeft">
          <img className="downImages" src={PolocImage} />
          <img className="downImages" src={FataImage} />
          <img className="downImages" src={ParvareshImage} />
          <img className="downImages" src={ErtebatatImage} />
        </dive>
      </div>
    </div>
  );
}

export default App;

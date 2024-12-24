import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css'

const App = () => {
  return (
    <div>
      <Header />

      {/* <div className="">
        <div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
            reiciendis.
          </p>
          <div>
            <button>Apartment</button>
            <button>House</button>
          </div>
        </div>

        <div>
          <div>
            <div>
              <label htmlFor="">1kv <sub>2</sub> == 700azn</label>
              <input placeholder="enter home area" type="text" />
            </div>
            <div>
              <label htmlFor=""></label>
              <input placeholder="enter Price" type="text" />
            </div>
          </div>
        </div>
      </div>  */}
      <Footer />
    </div>
  );
};

export default App;

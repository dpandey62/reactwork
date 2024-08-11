import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <div className="poster">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/4296cee2-0a99-4ddd-85f6-337c838a2f6f1720669264173-FLAT-400-Off-on-1st-Purchase-Strip.jpg" />
        </div>
        <div className="supersale d-flex">
          <img
            src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/12/58f86eac-8414-4d0b-8e11-5566790e76571720768321669-DESKTOP-HP-BANNER_01--1-.jpg"
            alt=""
            srcset=""
          />
          <img
            src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/12/61ac1796-4fd1-4d98-99cc-564cac65f5ba1720768321744-DESKTOP-HP-BANNER_02--1-.gif"
            alt=""
            srcset=""
          />
        </div>
        <div className="coupons">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/08ca509d-1c91-474a-ade5-426bb438c44d1720669410658-Monsoon-Magic-Coupons.jpg"
            alt=""
          />
        </div>
        <div className="uaseCode">
          <img
            src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/edee5ac4-72ba-434e-83c9-3c18c593cdfc1720668885290-MYNTRA100.jpg"
            alt=""
          />
          <img
            src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/edee5ac4-72ba-434e-83c9-3c18c593cdfc1720668885290-MYNTRA100.jpg"
            alt=""
          />
        </div>
        <div className="omg">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/0f9337d3-cb19-4975-919c-e90c4f3944b41720669410722-OMG--Deals.jpg"
            alt=""
          />
        </div>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        ></div>
        <div className="cardas">
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/17/6d341a78-5fb4-4c66-92f5-24a929eff67d1721229517591-BIBA_W.png" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/17/c077ae95-1a0a-4ee9-a1e0-1c3324aa032f1721229517085-Libas_Varanga.png" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/17/7512c3ad-e021-402f-96e9-57fdf21c30a91721229517124-Mitera-_Kalini.png" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/17/4f6d35c1-2e02-47c1-9767-fe310586941f1721229518363-Global_Desi_-Truebrowns_.png" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2024/7/18/848f44f1-e9c0-4a6f-a89e-4f3aff564d551721305246847-image_png_1792319173.png" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/17/6d341a78-5fb4-4c66-92f5-24a929eff67d1721229517591-BIBA_W.pnghttps://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/10/00cf7cb1-5f58-401f-94dd-32fae41103d71720591796702-image_png_590743508.png" alt="" />
        </div>
        <div className="categry">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/5930ca99-0bb4-4384-a63c-44a6de0d254d1720669410830-Shop-By-Category.jpg" alt="" />
        </div>
        <div className="shopCard">
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" /><img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />

          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />

          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />
          <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/95c18feb-4778-4f98-9d00-08949bd39b651720666926024-Shop-By-Category_HP_02.jpg" alt="" />

        </div>
        <div className="downloads">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/675361d1-6648-4264-abe1-d2793c9c00821720668261260-App-Install-Banner.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

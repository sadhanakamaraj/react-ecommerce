// import Header from "./componets/Header";
// import Creative from "./componets/imgcontent/Creative";
// import Aboutcom from "./componets/aboutcompany/Aboutcom";
// import Portfolio from "./componets/portfolio/Portfolio";
// import Choose from "./componets/choose/Chooseus";
// import Client from "./componets/client/Client";
// import Footer from "./componets/footer/Footer";
// import Arrayparr from "./componets/arrayexample/arrayparr";
// import Whatwe from "./componets/whatwe/whatwe";
// import Examplemap from "./componets/examplemap/Examplemap";
// import Servercall from "./componets/whatwe/servercall/Servercall";
// import Page from "./componets/pagi/Page";
// import BasicClass from "./componets/classcomponent/BasicCalass";
// import Post from "./componets/post/Post";
// import UseEffect from "./componets/Useeffect/UseEffect";
// import Dropdown from "./componets/dropdown/Dropdown";
// import { Reduxtask } from "./componets/reduxtask/Reduxtask";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import  Register from "./Components/Register/Register";
import Loginform from "./Components/Login/loginform"
import { Dashabord } from "./Components/dashbord/Dashbord";
import Singleproduct from "./Components/Datasfile/Singleproduct";
import Slidedata from "./Components/Slidedata";
import Dummy from "./Components/Dummy";
import Searchfild from "./Components/Searchfild";
import Bnavbar from "./Components/navbar/Bnavbar";
import Profile from "./Components/Profile";
import Buynow from "./Components/Buynow";

function App() {
  return (
    <>

        {/* <Header />
        <Creative />
        <Whatwe />
        <Aboutcom />
        <Portfolio />
        <Choose />
        <Client />
        <Footer /> */}
        {/* <StateExample/> */}
        {/* <Arrayparr/> */}
        {/* <Taskdiv/> */}
        {/* /<Examplemap/> */}
        {/* <Servercall/> */}
        {/* <Page/> */}
        {/* <BasicClass/> */}
        {/* <Statee/> */}
        {/* <BrowserRouter>
Routes>
            <Route path="/Header" element={<Header/>}> </Route>
            <Route path="/Creative" element={<Creative/>}>  </Route>
            <Route path="/Whatwe"  element={<Whatwe/>}>  </Route>
        </Routes>
        <Link to="/Header">header</Link>
        <Link to="/Creative">Creative</Link>
        <Link to="/Whatwe">Whatwe</Link>
        </BrowserRouter> */}
        {/* <Post /> */}
        {/* <UseEffect /> */}
        {/* <Dropdown /> */}

        {/* <Reduxtask /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />}></Route>
            <Route path="/login" element={<Loginform />}></Route>
            <Route path="/dashbord" element={<Dashabord />}></Route>
            {/* <Route path="/datafile" element={<Datafiles />}></Route> */}
            <Route path="/prof" element={<Profile />}></Route>

            <Route
              path="/product/:product_id"
              element={<Singleproduct />}
            ></Route>
            {/* .............................TV..................... */}
            <Route
              path="/tv"
              element={
                <Slidedata
                  values={
                    "Electronics|HomeTheater,TV&Video|Televisions|SmartTelevisions"
                  }
                />
              }
            ></Route>
            {/* .............................MOBILES..................... */}
            <Route
              path="/mobiles"
              element={
                <Slidedata
                  values={
                    "Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones"
                  }
                />
              }
            ></Route>
            {/* .............................REMOTES..................... */}
            <Route
              path="/remotes"
              element={
                <Slidedata
                  values={
                    "Electronics|HomeTheater,TV&Video|Accessories|RemoteControls"
                  }
                />
              }
            ></Route>
            {/* .............................MIXIEE..................... */}
            <Route
              path="/mixergrinders"
              element={
                <Slidedata
                  values={
                    "Home&Kitchen|Kitchen&HomeAppliances|SmallKitchenAppliances|MixerGrinders"
                  }
                />
              }
            ></Route>
            {/* .............................HEADPHONES..................... */}
            <Route
              path="/headphones"
              element={
                <Slidedata
                  values={
                    "Electronics|Headphones,Earbuds&Accessories|Headphones|In-Ear"
                  }
                />
              }
            ></Route>
            {/* .............................SMARTWATCH..................... */}
            <Route
              path="/smartwatches"
              element={
                <Slidedata
                  values={"Electronics|WearableTechnology|SmartWatches"}
                />
              }
            ></Route>
            {/* .............................HOMEAPLIENCE..................... */}
            <Route
              path="/homeappliances"
              element={
                <Slidedata
                  values={
                    "Home&Kitchen|Kitchen&HomeAppliances|Vacuum,Cleaning&Ironing|Irons,Steamers&Accessories|Irons|DryIrons"
                  }
                />
              }
            ></Route>
            {/* .............................USB CABLE..................... */}
            <Route
              path="/usb"
              element={
                <Slidedata
                  values={
                    "Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables"
                  }
                />
              }
            ></Route>
            
            <Route path="/cart" element={<Dummy />}></Route>
            <Route path="/search" element={<Searchfild />}></Route>
            <Route path="/buynow" element={<Buynow />}></Route>
          </Routes>
        </BrowserRouter>
      
    </>
  );
}
export default App;

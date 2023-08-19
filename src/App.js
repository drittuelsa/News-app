

//  import './style.css';
// import './table.css';
import { Provider } from "react-redux";
// import { DefaultStore1 } from "./assignment/store1";
// import { ReduxTable } from "./ReduxTable";
import {BrowserRouter,HashRouter,Route, Routes} from "react-router-dom";
// import { Update } from "./Edit";



// import { Home } from "./Assignment1/Home";
// import { StoreData } from "./Assignment1/store";
// import { NavBar } from "./eCommerce/NavBar";
// import { Home } from "./eCommerce/Home";
// import { About } from "./eCommerce/About";
// import { Contact } from "./eCommerce/Contact";
// import { Provider } from "react-redux";
// import { StoreSet } from "./eCommerce/store";
// import { Cart } from "./eCommerce/Cart";
// import { CardDetail } from "./eCommerce/CardDetail";
// import { CartDetail } from "./eCommerce/CartDetail";
// import { NavBar} from "./Shopping/NavBar";
// import { Home } from "./Shopping/Home";
// import { Cart } from "./Shopping/Cart";
// import { StoreSet } from "./Shopping/store";
import { Bookmark } from "./News/Bookmark";
import { NavBar } from "./News/Navbar";
import { Home } from "./News/Home";
import { StoreSet } from "./News/store";
import { Login } from "./News/Login";
import { SignUp } from "./News/SignUp";
import { AuthDetails } from "./News/AuthDetails";




function App(){  
  return(
    <div>
       {/* <Provider store ={DefaultStore1}>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<ReduxTable/>}></Route>
     <Route path="/Edit/:id"  element={<Update/>}></Route>
     </Routes>
     </BrowserRouter>
      <Home/> 
  </Provider>
  <Provider store={StoreSet}>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<NavBar/>}>
    <Route index element={<Home/>}/>
   
    <Route path ="about" element={<About/>} />
    <Route path ="contact" element={<Contact/>} />
    <Route path =":id" element={<CartDetail/>}/>  
    <Route path ="cart/:id" element={<Cart/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </Provider>  */}

   <Provider store ={StoreSet}>
    <HashRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
      <Route index element={<Home/>}/>
      <Route path ="bookmark" element={<Bookmark/>}/>
      <Route path ="login" element={<Login/>}/>
      <Route path ="signUp" element={<SignUp/>}/>
      </Route>

    </Routes>
    </HashRouter>
   </Provider>
    </div>
  )
}

export default App;
    



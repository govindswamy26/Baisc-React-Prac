// // App.jsx
import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./8.React-Routing/Pages/Home";
// import About from "./8.React-Routing/Pages/About";
// import Contact from "./8.React-Routing/Pages/Contact";
// import Products from "./8.React-Routing/Pages/Products";
// import NavBar from "./8.React-Routing/Components/NavBar";
// import ProductDetails from "./8.React-Routing/Pages/ProductDetails";
// import Govind from "./8.React-Routing/Pages/Govind";

// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />}>
//           <Route path="govind" element={<Govind />} />
//         </Route>
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import "./App.css";
//UseState hooks
// import Component2 from "./1.UseState/Component2";
// import Component3 from "./1.UseState/Component3";
// import Component4 from "./1.UseState/Component4";
// import Component5 from "./1.UseState/Component5";
// import Todo from "./1.UseState/Todo";
// import Form from "./1.UseState/Form";
// import MouseTracker from "./1.UseState/MouceTracker";
// import DropDown from "./1.UseState/DropDown";
// import Tabs from "./1.UseState/Tabs";
// import StarRating from "./1.UseState/StarRating";
// import Password from "./1.UseState/Password";
// import Voting from "./1.UseState/Voting";
// import ToogleScreen from "./1.UseState/ToogleScreen";
//import Component1 from "./1.UseState/Componet1";

//useEffect Hooks
// import Demo1 from "./2.UseEffect/Demo1";
// import UseEffComp1 from "./2.UseEffect/UseEffComp1";
// import UseEffComp2 from "./2.UseEffect/UseEffComp2";
// import UseEffComp3 from "./2.UseEffect/UseEffComp3";
// import ExamScreen from "./2.UseEffect/ExamScreen";
// import WindowWidth from "./2.UseEffect/WindowWidth";
// import MousePosition from "./2.UseEffect/MousePosition";
// import Counter from "./2.UseEffect/Counter";
// import Fetch from "./2.UseEffect/Fetch";
// import Scroll from "./2.UseEffect/Scroll";
// import LocalStorage from "./2.UseEffect/LocalStorage";
// import SignUp from "./2.UseEffect/SignUp";
// import OnlineOffline from "./2.UseEffect/OnlineOffline";
// import CountDown from "./2.UseEffect/CountDown";
// import TabSystem from "./2.UseEffect/TabSystem";
// import Timer from "./2.UseEffect/Timer";
// import { useState } from "react";
// import CompUseRef2 from "./3.UseRef/CompUseRef2";
// import CompUseRef3 from "./3.UseRef/CompUseRef3";
// import CompUseRef4 from "./3.UseRef/CompUseRef4";
// import Typing from "./3.UseRef/Typing";
// import Form from "./3.UseRef/Form";
// import CounterRerender from "./3.UseRef/CounterRerender";
// import Student from "./0.Props&Children/Student";
// import UseMemoHook from "./4.Memoization/useMemo/UseMemoHook";
// import Child from "./4.Memoization/Child";
// import UseCallbackHook from "./4.Memoization/UseCallbackHook";
//import NavBar from "./8.React-Routing/Components/NavBar";
// import LeavingPage from "./2.UseEffect/LeavingPage";
// import ModalExample from "./2.UseEffect/ModelExample";
// import Prac1 from "./3.UseRef/Prac1";
// import CompUseRef from "./3.UseRef/CompUseRef";
// import CompUseRef1 from "./3.UseRef/CompUseRef1";
import A from "./5.ContextApi/withPropsDrilling/A";
function App() {
  // const [show, setShow] = useState(true);
  const name = "govind";
  return (
    <div className="App">
      {/* <Component1></Component1> */}
      {/* <Component2></Component2> */}
      {/* <Component3></Component3> */}
      {/* <Component4></Component4> */}
      {/* <Component5></Component5> */}
      {/* <Todo></Todo> */}
      {/* <Form></Form> */}
      {/* <MouseTracker></MouseTracker> */}
      {/* <DropDown></DropDown> */}
      {/* <Tabs></Tabs> */}
      {/* <StarRating></StarRating> */}
      {/* <Password></Password> */}
      {/* <Voting></Voting> */}
      {/* <ToogleScreen></ToogleScreen> */}
      {/* <Demo1></Demo1> */}
      {/* <UseEffComp1></UseEffComp1> */}
      {/* <UseEffComp2></UseEffComp2> */}
      {/* <UseEffComp3></UseEffComp3> */}
      {/* <ExamScreen></ExamScreen> */}
      {/* <WindowWidth></WindowWidth> */}
      {/* <MousePosition></MousePosition> */}
      {/* <Counter></Counter> */}
      {/* <Fetch></Fetch> */}
      {/* <Scroll></Scroll> */}
      {/* <LocalStorage></LocalStorage> */}
      {/* <SignUp></SignUp> */}
      {/* <OnlineOffline></OnlineOffline> */}
      {/* <CountDown></CountDown> */}
      {/* <TabSystem></TabSystem> */}
      {/* <button onClick={(prev) => setShow(!prev)}>Toogle</button>
      {show && <Timer></Timer>} */}
      {/* <LeavingPage></LeavingPage> */}
      {/* <ModalExample></ModalExample> */}

      {/* UseRef */}
      {/* <Prac1></Prac1> */}
      {/* <CompUseRef></CompUseRef> */}
      {/* <CompUseRef1></CompUseRef1> */}
      {/* <CompUseRef2></CompUseRef2> */}
      {/* {show && <CompUseRef3></CompUseRef3>}
      <button onClick={() => setShow((prev) => !prev)}>toogle</button> */}
      {/* <CompUseRef4></CompUseRef4> */}
      {/* <Typing></Typing> */}
      {/* <Form /> */}
      {/* <CounterRerender></CounterRerender> */}
      {/* <Student name="Govind" age={"30"} isStudent={true} />
      <Student name="Surya" age={23} isStudent={true}></Student>
      <Student name="Sudheer" age={22} isStudent={false} />
      <Student name="Saiteja" age={23} isStudent={true} />
      <Student name="LPU"></Student> */}
      {/* <UseMemoHook></UseMemoHook> */}
      {/* <NavBar></NavBar> */}
      {/* <UseCallbackHook></UseCallbackHook> */}

      {/* Props Drilling */}
      <A name={name}></A>
    </div>
  );
}

export default App;

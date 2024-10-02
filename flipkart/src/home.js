import React, { useState } from "react";
import SignIn from "./signin";
import SignUp from "./signup";
function Home() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      {isSignUp ? (<SignUp onSwitch={() => setIsSignUp(false)}/>) : (<SignIn onSwitch={() => setIsSignUp(true)} />)}
   
    
    </div>
  );
}
export default Home;

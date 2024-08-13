import React, { useRef } from 'react'


function Forgot() {

  let emailInputRef = useRef();
  let resultInputRef = useRef();
  return (
    <div>
    <form>
    <div>
    <img src = "https://sdn.signalhire.co/storage/company/0b20/d285/9291/bbb7/b863/5990/79bc/67f7.webp" alt = "logo"/>
    </div>
    <h2>Forgot Password</h2>
    <input ref = {emailInputRef} type = "text" placeholder='      email id or password'/>
    <button>send</button>
    <div>
    <label>Otp</label>
    <input type = "text"/>
    <button>Resend</button>
    </div>
    <div>
    <label>Create Password</label>
    <input type = "password"/>
    </div>
    <div>
    <label>Confirm Password</label>
    <input type = "password"/>
    </div>
    <div>
    <button type = "button"onClick={()=>{
      resultInputRef.current.innerHTML = `${emailInputRef.current.value} ur login was succeessful`
      resultInputRef.current.style.color = "green";
    }}>Log In</button>
    </div>
    <span ref = {resultInputRef}></span>
    </form>
    </div>
  )
}

export default Forgot
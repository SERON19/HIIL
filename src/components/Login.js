import React from "react";

function Login(){
  // const [posts, setPosts] =useState([])

  function handleClick(){
    
    // function handleNewPost(newFormData){
    //   const serverOptions={
    //       method:"POST",
    //       headers:{
    //       "Content-Type":"application/json",
    //       'Accept': 'application/json'
    //       },
    //       body:JSON.stringify(newFormData
    //       )
    //       }
    //       fetch('https://rnewseact-app6.herokuapp.com/', serverOptions)
    //       .then(r=>r.json())
    //       .then(addedPost=>setPosts(posts=>[...posts, addedPost]))
    //   }
  }
    return(
        <div className="loginbox">
      {/* {show ?<button onClick={handleClick} >{show ? "Close":"Create "}Post</button>: null} */}
        <form> 
        
        <label>
          Username:<br></br>
          <input type="text" name="name" />
        </label><br></br>
        <label>
          Password:<br></br>
          <input type="text" name="name" />
        </label><br></br>

        <button onClick={handleClick}>Submit</button>

         
         
      </form>
      
      </div>
    )
}
export default Login;
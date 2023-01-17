

const handleSubmit=(e)=>{

}


function Registration(){
  return <>
          
          <div className="container card p-3 mt-3 register-container">
          <h1>Registration Here</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name : </label>
                  <input type="text" name="name" className="form-control"/>
                </div>

                <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email"  name="email" className="form-control"/>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="Password">Password:</label>
                <input  type="password"  name="password" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary"
                
        onClick={()=>{handleSubmit}}   >Submit</button>
              </form>
          </div>

        </>
}

export default Registration;



function Registration(props){
  return <>
          
          <div className="container card p-3 mt-3 register-container">
          <h1 className="text-center">Registration Here</h1>
              <form>
                <div className="form-group" onClick={props.submit}>
                  <label htmlFor="name">Name : </label>
                  <input type="text" name="name" required className="form-control"/>
                </div>

                <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email"  name="email" required className="form-control"/>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="Password">Password:</label>
                <input  type="password"  name="password" required className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>

        </>
}

export default Registration;
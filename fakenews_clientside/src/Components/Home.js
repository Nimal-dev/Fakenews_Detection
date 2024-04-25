import React, { useEffect }  from "react";
import { Link } from "react-router-dom";

function Home() {

  useEffect(()=>{

    // fetch('http://13.210.84.16/testget').then((response)=>{
    //   response.json().then((data)=>{
    //     console.log(data)
    //   })
    // })

  },[])


  // const sendData=()=>{ 

  //   let param = {
  //     name:'aslam',
  //     email:'aslam@gmail.com'
  //   }

  //   fetch('http://13.210.84.16/testpost',{
  //     method:"POST",
  //     body:JSON.stringify(param),
  //   }).then((response)=>{
  //     response.json((data)=>{
  //       console.log(data)
  //     })
  //   })

  // }

  return (
    <>
      <main>
        <header className="site-header">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-12 col-12 d-flex align-items-center">
                <Link
                  to="/"
                  className="site-header-text d-flex justify-content-center align-items-center me-auto"
                >
                  <span>Fake News Detection</span>
                </Link>
                <ul className="social-icon d-flex justify-content-center align-items-center mx-auto"></ul>
                <a
                  className="bi-list offcanvas-icon"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasMenu"
                  role="button"
                  aria-controls="offcanvasMenu"
                ></a>
              </div>
            </div>
          </div>
        </header>

        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasMenu"
          aria-labelledby="offcanvasMenuLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close ms-auto"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
            <nav>
              <ul>
                <li>
                  <Link to="/login">Login Form</Link>
                </li>

                <li>
                  <Link to="/register"> Create an account</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div
          className="modal fade"
          id="subscribeModal"
          tabIndex="-1"
          aria-labelledby="subscribeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <form
                  action="#"
                  method="get"
                  className="custom-form mt-lg-4 mt-2"
                  role="form"
                >
                  <h2 className="modal-title" id="subscribeModalLabel">
                    Stay up to date
                  </h2>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="your@email.com"
                    required=""
                  />
                  <button type="submit" className="form-control">
                    Notify
                  </button>
                </form>
              </div>
              <div className="modal-footer justify-content-center">
                <p>By signing up, you agree to our Privacy Notice</p>
              </div>
            </div>
          </div>
        </div>
        <section
          className="hero-section d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mx-auto">
                <h1 className="text-primary mt-2 mb-4 pb-2" style={{ fontFamily: 'Georgia, serif', border: '1px solid black',backgroundColor:"white",opacity:"0.5"}}>
                  Detecting Fake News
                </h1>
              </div>
            </div>
           
          </div> 
        </section>
          
            
          
        
      </main>
    </>
  );
}

export default Home;

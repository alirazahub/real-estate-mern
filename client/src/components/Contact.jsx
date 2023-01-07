import React from "react"
import img from "./pricing.jpg"
import Back from "./Back"

const Contact = () => {
  return (
    <>
      <section >
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div>
          <form className='shadow'>
            <h4 className="pt-5 text-center">Fillup The Form</h4> <br />
            <div className="container">
              <div className="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Subject</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Email address</label>
                  <input type="email" class="form-control" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-6 mb-3">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Type Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </div>
              </div>

            <button>Submit Request</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact

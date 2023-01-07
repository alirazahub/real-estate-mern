import React from "react"


const Sell = () => {
  return (
    <>
      <div className="h1 text-center">Sale Your Property </div>
      <section className='pricing mb'>
        <div>
          <div className="my-5"></div>
          <div class="container">
            <div class="row">
              <div className="col-md-3 h3">Select Location</div>
              <div className="col-md-3 mb-4">
                <select class="form-select" aria-label="Default select example">
                  <option selected >Select City</option>
                  <option >One</option>
                  <option >Two</option>
                  <option >Three</option>
                  <option >Four</option>
                  <option >Five</option>
                  <option >Six</option>
                </select>
              </div>
              <div className="col-md-3 mb-4">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Town</option>
                  <option >One</option>
                  <option >Two</option>
                  <option >Three</option>
                  <option >Four</option>
                  <option >Five</option>
                  <option >Six</option>
                </select>
              </div>
              <div className="col-md-3 mb-4">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Society</option>
                  <option >One</option>
                  <option >Two</option>
                  <option >Three</option>
                  <option >Four</option>
                  <option >Five</option>
                  <option >Six</option>
                </select>
              </div>
              <aside class="col-sm-6">
                <div class="card">
                  <article class="card-group-item">
                    <div class="card-header">
                      <h6 class="title h3 text-center">Select Catagory </h6>
                    </div>
                    <div class="filter-content">
                      <div class="card-body mb-3">
                        <form className="mb-3">
                          <label class="form-check">
                            <input class="form-check-input" name="exampleRadio" type="radio" value="" />
                            <span class=" mx-3 h4 form-check-label">
                              Sell House
                            </span>
                          </label>
                          <label class="form-check">
                            <input class="form-check-input" name="exampleRadio" type="radio" value="" />
                            <span class=" mx-3 h4 form-check-label">
                              Purchase House
                            </span>
                          </label>
                          <label class="form-check">
                            <input class="form-check-input" name="exampleRadio" type="radio" value="" />
                            <span class=" mx-3 h4 form-check-label">
                              Rent House
                            </span>
                          </label>
                          <label class="form-label h4 mt-3">Enter Area </label>
                          <span> (1 marla = 272.251 square feet)</span>
                          <div class="input-group">
                            <input type="number" class="m-0 form-control" />
                            <span class="input-group-text" id="basic-addon1">square Feet</span>
                          </div>
                        </form>

                      </div>
                    </div>
                  </article>
                </div>
              </aside>
              <aside className="col-sm-6">
                <div class="card">
                  <div class="card-header">
                    <h6 class="title h3 text-center">Details </h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label h6">Total Number of rooms</label>
                      <input type="number" class="form-control" />
                    </div>
                    <form>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value="" />
                        <span class=" mx-3 h5 form-check-label">
                          Attached Washrooms
                        </span>
                      </label>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value="" />
                        <span class=" mx-3 h5 form-check-label">
                          Kitchen
                        </span>
                      </label>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value="" />
                        <span class=" mx-3 h5 form-check-label">
                          Drawing Room
                        </span>
                      </label>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value="" />
                        <span class=" mx-3 h5 form-check-label">
                          Store Room
                        </span>
                      </label>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value="" />
                        <span class=" mx-3 h5 form-check-label">
                          Living Room
                        </span>
                      </label>
                    </form>
                  </div>
                </div>
              </aside>
              <div className=" mt-5 d-flex justify-content-end">
                <button>Request</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Sell

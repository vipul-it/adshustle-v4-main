import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      
      {/* The Modal  */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Contact us</h4>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* Modal body */}

            <div className="modal-body p-3">
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Your Name
                  </label>
                  <input type="text" class="form-control focus-ring focus-ring-danger" id="name" />
                </div>
                <div class="mb-2">
                  <label for="exampleInputEmail1" class="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="contact" class="form-label">
                    Whatsapp/Contact No.
                  </label>
                  <input type="text" class="form-control" id="contact" />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    rows="3"
                    id="message"
                  ></textarea>
                </div>
                <button type="" class="my-button">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

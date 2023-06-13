import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";

const ContactUs = () => {
  // const [showModal, setShowModal] = React.useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jj04muc",
        "template_dy5d12t",
        form.current,
        "QinRLZefTaUU69ApE"
        
      )
      .then(
        (result) => {
          console.log(result.text);
          showToast();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  function showToast() {
    toast("Message send", {
      position: "top-right",
      zIndex: 999999,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }

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
              <form ref={form} onSubmit={sendEmail}>
                <div class="mb-3">
                  <label htmlFor="name" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="client_name"
                    required
                    class="form-control focus-ring focus-ring-danger"
                    id="name"
                  />
                </div>
                <div class="mb-2">
                  <label htmlFor="exampleInputEmail1" class="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="client_email"
                    required
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="contact" class="form-label">
                    Whatsapp/Contact No.
                  </label>
                  <input
                    type="text"
                    name="client_phone"
                    required
                    class="form-control"
                    id="contact"
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="message" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    name="client_message"
                    required
                    rows="3"
                    id="message"
                  ></textarea>
                </div>
                <button type="submit"
              value="Send" class="my-button">
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

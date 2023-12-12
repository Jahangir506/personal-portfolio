import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k2feorh', 'template_ybrl8rj', form.current, 'uNhXKQ4NTgua0hoMz')
      .then((result) => {
        Swal.fire("SweetAlert2 is working!");
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <>
      <div className="">
        <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-xl mx-auto">
            <form
             ref={form} onSubmit={sendEmail}
              className="card-body w-full space-y-2"
            >
              <div className="form-control w-full">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="input input-bordered bg-black/10 w-full"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="input input-bordered bg-black/10 w-full"
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  name="message"
                  className="textarea textarea-bordered h-40 bg-black/10"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Send Message" className="btn bg-[#02765d]" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

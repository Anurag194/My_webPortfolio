import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setForData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAletType] = useState("Success");
  const [alertMessage, setAletMessage] = useState("");

  const handleChange = (e) => {
    setForData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAletType(type);
    setAletMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 8000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("Form submitted", formData);
      await emailjs.send(
        "service_akloup4",
        "template_k8igtb6",
        {
          from_name: formData.name,
          to_nme: "Anurag",
          from_email: formData.email,
          to_email: "Anuraag.Films@gmail.com",
          message: formData.message,
        },
        "fu_sNPzf8072SGaI"
      );
      setIsLoading(false);
      setForData({ name: "", email: "", message: "" });
      showAlertMessage("Success", "Your message has been sent");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong");
    }
  };
  return (
    <section
      className="relative flex flex-col c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md bg-primary p-5 mx-auto border rounded-2xl border-white/10">
        <div className="flex flex-col items-start w-full mb-10 gap-5">
          <h2 className="text-heading"> Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="field-input field-input-focus"
              placeholder="Anurag kirad"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="Anurag@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              rows="4"
              name="message"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

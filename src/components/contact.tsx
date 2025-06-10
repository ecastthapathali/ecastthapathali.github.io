import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhoneVolume,
  FaSpinner,
  FaCheck,
} from "react-icons/fa";
import { FaRegEnvelope, FaLocationDot } from "react-icons/fa6";
import "./WhatisECAST.css";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmitStatus("loading");

    try {
      // Main backend API call - this determines success/failure
      const response = await fetch(
        "https://ecast.pythonanywhere.com/api/contact/form/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!response.ok) {
        throw new Error("Some technical error contact us");
      }

      // Main backend succeeded - show success to user
      setSubmitStatus("success");
      setFormSubmitted(true);

      // Google Apps Script backup submission with timeout and proper error handling
      const payload = { name, email, message };

      // Create a promise with timeout for the backup submission
      const backupSubmission = Promise.race([
        fetch(
          "https://script.google.com/macros/s/AKfycbwuirjTqR7GSiZyae1AHYuk-tNnwIsA2NaeKJzxrozvp-Vufo59h6ZTIUC5gR7jkGSh/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            mode: "no-cors", // This helps with CORS issues on GitHub Pages
          }
        ),
        // Timeout after 5 seconds
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Backup submission timeout")), 5000)
        ),
      ]);

      backupSubmission
        .then(() => {
          console.log("Google Apps Script backup submission completed");
        })
        .catch((error) => {
          console.warn(
            "Google Apps Script backup submission failed (this is okay):",
            error.message
          );
        });

      // Reset form after success animation
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setIsLoading(false);
        setSubmitStatus("idle");
        setFormSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form to main backend:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setIsLoading(false);
        setSubmitStatus("idle");
      }, 3000);
    }
  };

  const getButtonContent = () => {
    switch (submitStatus) {
      case "loading":
        return (
          <span className="flex items-center justify-center">
            <FaSpinner className="animate-spin mr-2" />
            Submitting...
          </span>
        );
      case "success":
        return (
          <span className="flex items-center justify-center">
            <FaCheck className="mr-2" />
            Submitted!
          </span>
        );
      case "error":
        return "Try Again";
      default:
        return "Submit";
    }
  };

  const getButtonClassName = () => {
    const baseClasses =
      "w-full py-3 px-4 rounded-md font-medium transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2";

    switch (submitStatus) {
      case "loading":
        return `${baseClasses} bg-indigo-400 text-white cursor-not-allowed`;
      case "success":
        return `${baseClasses} bg-green-500 text-white scale-105 shadow-lg`;
      case "error":
        return `${baseClasses} bg-red-500 text-white hover:bg-red-600 focus:ring-red-500`;
      default:
        return `${baseClasses} bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 hover:shadow-lg focus:ring-indigo-500`;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-full bg-black">
        <h2 className="text-6xl font-medium text-slate-50 bg-black p-12 sm:flex-row sm:justify-center">
          Contact Us
        </h2>
      </div>

      <div className="flex justify-center items-center bg-black w-500 col-2">
        <div className="highlight text-white flex flex-col sm:flex-row justify-center items-center w-full sm:max-w-5xl pb-12 bg-black">
          <div className="semi-container mt-6 h-auto w-1400 pb-5 text-center">
            <img
              src="https://shotcan.com/images/2025/06/10/505726045_711384551537742_8059210280180519786_n935f591780cf9933.jpg"
              alt="Our team"
              className="mx-auto mb-6 pb-6 sm:mb-0 rounded-lg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <p className="para leading-normal justify-center pb-5 flex">
              If you need our help with anything, have questions, or are
              experiencing any technical difficulties, please don't hesitate to
              reach out to us. We're here to assist you! Additionally, if you
              have any suggestions, ideas, or feedback to share, we'd love to
              hear from you. Your input helps us improve our services.
            </p>
            <div className="pb-6 justify-center">
              <div className="mobile flex justify-center items-center mt-3">
                <FaPhoneVolume className="mr-2" />
                <span>
                  <a href="tel:+9779745298983">+977 9745298983 </a>
                </span>
              </div>
              <div className="mobile flex justify-center items-center mt-3">
                <FaPhoneVolume className="mr-2" />
                <span>
                  <a href="tel:+9779867216060">+977 9867216060</a>
                </span>
              </div>
              <div className="email flex justify-center items-center mt-3">
                <FaRegEnvelope className="mr-2" />
                <span>
                  <a href="mailto:ecast@tcioe.edu.np" target="_blank">
                    ecast@tcioe.edu.np
                  </a>
                </span>
              </div>
              <div className="location flex justify-center items-center mt-3">
                <FaLocationDot className="mr-2" />
                <span>
                  <a
                    href="https://maps.app.goo.gl/CvzD96hgud5kjCVX8"
                    target="_blank"
                  >
                    Thapathali Campus, Kathmandu, Nepal
                  </a>
                </span>
              </div>
            </div>
            <div className="social text-white">
              <h2 className="f2 text-center">FOLLOW US</h2>
              <div className="social-links pt-2 flex justify-center mt-3 mb-3">
                <a
                  className="instagram text-3xl mx-5"
                  href="https://www.instagram.com/ecastthapathali/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  className="linkedin text-3xl mx-5"
                  href="https://www.linkedin.com/company/ecastthapathali/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="facebook text-3xl mx-5"
                  href="https://www.facebook.com/ecastthapathali"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  className="mail text-3xl mx-5"
                  href="mailto:ecast@tcioe.edu.np"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-black w-500">
        <div className="highlight text-white flex justify-between w-full sm:max-w-5xl pb-12 bg-black flex-col sm:flex-row sm:justify-center">
          <div className="semi-container mt-6 h-auto w-1400">
            <div className="highlight w-full max-w-5xl text-white p-13 flex justify-between mt-6">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 w-full"
                autoComplete="off"
              >
                <div className="flex justify-center items-center pb-2 bg-black">
                  <h2 className="text-3xl font-medium text-slate-50 bg-black sm:justify-center">
                    Contact Form
                  </h2>
                </div>

                {/* Success Message with Animation */}
                {formSubmitted && (
                  <div className="animate-fade-in-down bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4 transition-all duration-500">
                    <div className="flex items-center">
                      <FaCheck className="mr-2" />
                      <span>
                        Form submitted successfully! We'll get back to you soon.
                      </span>
                    </div>
                  </div>
                )}

                <div className="mb-4 sm:justify-center">
                  <label
                    htmlFor="name"
                    className="block text-md pb-2 sm:justify-center font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isLoading}
                    className="w-full py-2 px-3 border-gray-300 bg-gray-50 text-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-md pb-2 font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="w-full py-2 px-3 border-gray-300 bg-gray-50 text-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-md pb-2 font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={isLoading}
                    rows={6}
                    className="w-full py-2 px-3 border-gray-300 bg-gray-50 text-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={getButtonClassName()}
                >
                  {getButtonContent()}
                </button>
              </form>
            </div>
            <div className="bg-black pt-10">
              <iframe
                title="Map"
                width="100%"
                height="450"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7527841083115!2d85.31625117617291!3d27.694034676190054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ae08c068d9%3A0x475bed1f66d060c!2sIOE%2C%20Thapathali%20Campus!5e0!3m2!1sen!2snp!4v1720262496739!5m2!1sen!2snp"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default Contact;

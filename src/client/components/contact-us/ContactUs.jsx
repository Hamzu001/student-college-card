import React from "react"
import Button from "../common/Button"

const ContactUs = () => {
  const formHandler = (e) => {
    e.preventDefault()
    const values = e.currentTarget
    const { name, email, message } = Object.fromEntries(new FormData(values))
    console.log(name, email, message)
  }

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className=" px-10 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              // frame-Border="0"
              // title="map"
              // scrol-Ling="no"
              // margin-Height="0"
              // margin-Width="0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19648.984580666718!2d73.10287405359968!3d31.420062113438597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269dec289e8cd%3A0x33aa0371e60d11d4!2sGovt.%20Municipal%20Graduate%20College%20Jaranwala%20Road%2C%20Abdullahpur%20%2C%20Faisalabad!5e0!3m2!1sen!2s!4v1713378063112!5m2!1sen!2s"
              // style={{"filter": "grayscale(7) contrast(1.2) opacity(0.1)"}}
            ></iframe>
          </div>

          <form
            onSubmit={formHandler}
            className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-[#b5594f] text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Govt.Municipal Degree College Faisalabad Jaranwala Road,
              Faisalabad
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-[#b5594f]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-50 border outline-none focus:ring-2 focus:ring-red-200 focus:border-[#b5594f] border-[#b5594f] text-[#b5594f] sm:text-sm rounded-lg block p-2.5"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-[#b5594f]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border outline-none focus:ring-2 focus:ring-red-200 focus:border-[#b5594f] border-[#b5594f] text-[#b5594f] sm:text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-[#b5594f]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-gray-50 border outline-none focus:ring-2 focus:ring-red-200 focus:border-[#b5594f] border-[#b5594f] text-[#b5594f] sm:text-sm rounded-lg block w-full p-2.5"
                required
              ></textarea>
            </div>
            <Button btnName="Submit" />
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactUs

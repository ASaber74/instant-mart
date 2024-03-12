import { socialMedia } from '../constants';

function Contact() {
  return (
    <section className=" mb-14  mt-14 flex justify-center">
      <div className="max-container">
        <div className=" flex flex-col lg:flex-row lg:gap-14">
          <div className="flex flex-col gap-10 lg:w-4/6 mx-6 max-lg:mx-4">
            <div className=" flex flex-col gap-3 max-lg:items-center">
              <h3 className="text-xl font-semibold text-grey-8">CONTACT US</h3>
              <h4 className="text-5xl font-semibold text-brand-6">
                We can help
              </h4>
            </div>
            <div>
              <form className="grid grid-cols-2 gap-4 ">
                <input placeholder="Name" className="input" />
                <input placeholder="Email" className="input" />
                <textarea
                  placeholder="Message"
                  className=" input col-span-2 h-[467px]"
                />
                <button className=" col-span-2 flex w-full items-center justify-center gap-2 rounded-full border border-brand-6 bg-brand-6 px-7 py-4 text-lg leading-none text-brand-0.5 hover:bg-brand-7">
                  Send message
                </button>
              </form>
            </div>
          </div>
          <div className="mt-32 flex flex-col justify-between max-lg:mx-4">
            <div className="flex flex-col gap-3 max-lg:items-center">
              <h3 className="text-2xl font-semibold text-brand-6">
                Get in touch
              </h3>
              <p className="leading-7 text-grey-6">
                We’re always here to help. Contact us if you are experiencing
                issues with out product or have any questions.
              </p>
            </div>
            <div className="flex flex-col gap-3 max-lg:items-center">
              <h4 className="text-2xl font-semibold text-brand-6">
                Working Hours:
              </h4>
              <p className="leading-7 text-grey-6">
                Monday - Friday{' '}
                <span className="font-semibold text-grey-7">
                  (09:00 am to 07:00 pm)
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-3 max-lg:items-center">
              <h3 className="text-2xl font-semibold text-brand-6">Address</h3>
              <p className="leading-7 text-grey-6">
                El Yassmien 5, Madinat Al-Amal Nasr City Cairo Governorate
                Egypt.
              </p>
            </div>
            <div className="max-lg: mt-3 flex cursor-pointer gap-1 transition-all duration-300 hover:gap-2 max-lg:self-center">
              <p className="text-brand-6">customer@instantmart.com </p>
              <p className="text-brand-6">&rarr;</p>
            </div>
            <div className="mt-8 flex items-center gap-5 self-center">
              {socialMedia.map((icon) => (
                <div
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-6"
                  key={icon.alt}
                >
                  <img alt={icon.alt} src={icon.src} className="w-[24px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

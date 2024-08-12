import { footerLinks, socialMedia } from '../constants';
import Logo from './Logo';

function Footer() {
  return (
    <footer className=" border-t-1 shadow-3xl border-grey-0.5 bg-grey-0 p-16">
      <div className="max-container flex flex-wrap items-start justify-between gap-20 text-grey-6 max-lg:flex-col">
        <div className="flex flex-col  items-start">
          <Logo />
          <p className="mt-6 leading-7 text-grey-4 sm:max-w-sm">
            Explore endless worlds at your fingertips. Find your next great read
            and unlock rewards along the way.
          </p>
          <div className="mt-8 flex items-center gap-5">
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
        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 cursor-default text-2xl font-medium leading-normal">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 cursor-pointer leading-normal text-grey-6 hover:text-grey-5"
                    key={link.name}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-container mt-12 flex justify-between text-grey-6 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2">
          <img
            alt="copyright sign"
            src="..\images\copyright.svg"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;

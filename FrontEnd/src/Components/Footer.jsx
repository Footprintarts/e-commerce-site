import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            pariatur doloribus repellendus, labore error eveniet fugit nihil
            ipsam impeditdoloribus repellendus, labore error eveniet fugit nihil
            ipsam impedit.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@bonapex.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright-Text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center  text-gray-400">
          Copyright 2024@ BonApex Solutions - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

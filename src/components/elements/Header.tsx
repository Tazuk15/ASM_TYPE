import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://theme.hstatic.net/1000288298/1001020793/14/logo.png?v=257"
              alt=""
            />
          </Link>
        </div>
        <div className="flex gap-6">
          <a
            href="/profile"
            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-sky-700 "
          >
            Profile
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-sky-700">
            Products
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-sky-700">
            Contact  </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-sky-700">
            About Us
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-sky-700 ">
            Features
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-sky-700"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <div>
        <img
          src={"../banner.png"}
          alt="Banner"
          className="w-full"
        />
      </div>
    </header>
  );
};



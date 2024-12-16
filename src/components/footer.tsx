
import link from "next/link"
const Footer = () => {
  return (
    <footer className="bg-white-800 text-black py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Funiro Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
            <address className="not-italic">
              400 University Drive Suite 200<br />
              Coral Gables, FL 33134 USA
            </address>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Shop</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Payment Options</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Returns</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Enter Your Email Address</p>
            <form>
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 rounded-md w-full mb-4"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>© 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



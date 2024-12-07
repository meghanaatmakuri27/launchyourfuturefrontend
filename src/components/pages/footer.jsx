const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo Section */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">YourCompany</h2>
              <p className="text-gray-400 text-sm mt-2">
                Empowering careers with opportunities tailored just for you.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div className="flex gap-8">
              <div>
                <h3 className="font-semibold text-lg">Company</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/about" className="hover:text-blue-400 transition">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="hover:text-blue-400 transition">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-blue-400 transition">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Support</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/contact" className="hover:text-blue-400 transition">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="hover:text-blue-400 transition"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="hover:text-blue-400 transition"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Social Media Icons */}
            <div className="flex gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.569a10 10 0 01-2.825.775 4.932 4.932 0 002.165-2.723 9.725 9.725 0 01-3.127 1.195 4.916 4.916 0 00-8.385 4.482A13.934 13.934 0 011.671 3.149 4.903 4.903 0 003.17 9.86a4.902 4.902 0 01-2.229-.616v.06a4.913 4.913 0 003.946 4.827 4.936 4.936 0 01-2.224.085 4.914 4.914 0 004.604 3.419A9.867 9.867 0 010 21.539a13.896 13.896 0 007.548 2.209c9.142 0 14.307-7.72 13.986-14.646a9.936 9.936 0 002.419-2.545z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452H17.27v-5.978c0-1.426-.03-3.267-1.99-3.267-1.993 0-2.297 1.553-2.297 3.162v6.083h-3.177V9h3.052v1.561h.044c.424-.8 1.455-1.644 2.995-1.644 3.2 0 3.792 2.105 3.792 4.841v6.694zM5.337 7.433c-1.04 0-1.882-.843-1.882-1.882 0-1.04.842-1.883 1.882-1.883 1.04 0 1.883.843 1.883 1.883 0 1.039-.843 1.882-1.883 1.882zm1.598 13.019H3.74V9h3.195v11.452zM22.225 0H1.775C.794 0 0 .775 0 1.732v20.535C0 23.224.794 24 1.775 24h20.451c.98 0 1.774-.775 1.774-1.733V1.732C24 .775 23.205 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.87 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.53 1.032 1.53 1.032.892 1.528 2.341 1.087 2.91.831.091-.647.35-1.087.636-1.337-2.221-.253-4.556-1.111-4.556-4.946 0-1.091.39-1.983 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.751 1.025A9.561 9.561 0 0112 6.8c.85.004 1.705.114 2.503.335 1.909-1.293 2.747-1.025 2.747-1.025.546 1.378.203 2.397.1 2.65.641.699 1.029 1.591 1.029 2.682 0 3.842-2.339 4.688-4.566 4.935.358.309.678.921.678 1.855 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.48C19.13 20.162 22 16.414 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>Built with love by YourCompany</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
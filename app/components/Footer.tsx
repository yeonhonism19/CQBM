'use client'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="grid-layout max-w-screen-2xl mx-auto px-6">
        <div className="col-span-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-4xl font-black tracking-tight">CQBM</h3>
              <p className="text-gray-600 text-sm tracking-wider mt-2">
                CREATIVE QUALITY BUSINESS MODEL
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex gap-8">
                {['Work', 'Services', 'About', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-medium hover:text-red-500 transition-colors tracking-wide"
                  >
                    {link}
                  </a>
                ))}
              </div>
              
              <div className="flex gap-6">
                {['IG', 'LI', 'BE'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 border border-gray-300 flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 CQBM. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
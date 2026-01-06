import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto w-full border-y border-dashed">
        <div>
          <div className="bg-background max-w-[1400px] min-[1800px]:max-w-[1536px] mx-auto grid gap-6 border-x border-dashed px-4 py-8 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-16 lg:grid-cols-3 lg:px-8">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold">Pages</h3>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/services">Services</Link>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold">Socials</h3>
              <div className="flex flex-col items-center">
                <Link href="https://www.linkedin.com/in/alireza-zahiri/">
                  LinkedIn
                </Link>
                <Link href="https://github.com/alirezazahiri">GitHub</Link>
                <Link href="https://instagram.com/alirezza_zr">Instagram</Link>
                <Link href="https://t.me/alirezza_zr">Telegram</Link>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold">Contact</h3>
              <div className="flex flex-col items-center">
                <Link href="mailto:itsalireza.zr@gmail.com">Send an email</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-dashed">
          <p className="bg-background/50 w-full max-w-[1400px] min-[1800px]:max-w-[1536px] mx-auto border-x border-dashed px-4 py-2 text-center">
            Alireza Zahiri - All rights reserved &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

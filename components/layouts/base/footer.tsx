import { GitHubLogo, InstagramLogo, LinkedInLogo } from "@/components/icons";
import { HeartIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto w-full border-y border-dashed">
        <div className="flex bg-background max-w-[1400px] min-[1800px]:max-w-[1536px] mx-auto justify-center items-center gap-6 border-x border-dashed p-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row items-center justify-center w-full">
          <div className="ms-0 flex flex-col lg:flex-row items-center justify-center w-full lg:w-5/12">
            <p>Send me an email via</p>
            <Link
              href="mailto:itsalireza.zr@gmail.com"
              className="text-gmail hover:text-gmail/80 transition duration-200 cursor-pointer flex items-center gap-1 hover:bg-gmail/10 px-2 focus:scale-95 rounded-lg"
            >
              <span>itsalireza.zr@gmail.com</span>
              <MailIcon className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="bg-foreground/50 h-10 w-px rotate-90 lg:rotate-0"></div>
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background">
              OR
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-5/12">
            <p>Reach me through:</p>
            <div className="flex items-center gap-1">
              <Link
                href="https://www.linkedin.com/in/alireza-zahiri/"
                target="_blank"
                className="rounded-full hover:bg-linkedin/10 transition duration-200 p-2 focus:scale-95"
              >
                <LinkedInLogo className="size-6 text-linkedin" />
              </Link>
              <Link
                href="https://github.com/alirezazahiri"
                target="_blank"
                className="rounded-full hover:bg-github/10 transition duration-200 p-2 focus:scale-95"
              >
                <GitHubLogo className="size-6 text-github" />
              </Link>
              <Link
                href="https://instagram.com/alirezza_zr"
                target="_blank"
                className="rounded-full hover:bg-instagram/10 transition duration-200 p-2 focus:scale-95"
              >
                <InstagramLogo className="size-6 text-instagram" />
              </Link>
            </div>
          </div>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-dashed">
          <p className="bg-background/50 w-full max-w-[1400px] min-[1800px]:max-w-[1536px] mx-auto border-x border-dashed px-4 py-2 text-center flex items-center justify-center gap-2">
            Made with
            <HeartIcon className="size-4 inline-block fill-red-500 stroke-red-500" />
            by Alireza Zahiri
          </p>
        </div>
      </div>
    </footer>
  );
};

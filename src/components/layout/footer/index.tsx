import Container from "@/components/shared/container";
import { LogoWhiteIcon } from "@/components/shared/icons";
import { Button, Input } from "@/components/ui";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="mx-4 lg:mx-16 relative mb-16">
          {/* BLUE SECTION */}
          <div className="rounded-[32px] bg-blue px-4 pt-8 lg:px-20 lg:pt-16 pb-32">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              {/* TEXT + FORM */}
              <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left">
                <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                  <span className="block">Join our KicksPlus</span>
                  <span className="block">Club & get 15% off</span>
                </h3>

                <p className="text-gray text-[15px] sm:text-[16px] font-semibold max-w-md">
                  Sign up for free! Join the community.
                </p>

                {/* FORM */}
                <div className="flex w-full flex-col lg:flex-row gap-2 lg:gap-1 items-stretch lg:items-center lg:justify-start">
                  <Input
                    placeholder="Email address"
                    className="w-full lg:w-80"
                  />
                  <Button
                    size="large"
                    variant="filled"
                    className="w-full sm:w-auto"
                  >
                    Submit
                  </Button>
                </div>
              </div>

              {/* LOGO */}
              <div className="relative h-14 w-44 sm:h-16 sm:w-52 lg:h-28 lg:w-96 mx-auto lg:mx-0">
                <LogoWhiteIcon />
              </div>
            </div>
          </div>

          {/* GRAY SECTION (OVERLAP) */}
          <div className="relative -mt-16 sm:-mt-20 rounded-[32px] z-40 bg-dark-gray overflow-hidden">
            <div className="relative z-10 py-8 px-6 sm:py-10 sm:px-8 lg:py-12 lg:px-16 mb-52">
              {/* Grid Layout for Footer Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
                {/* Column 1 */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl text-yellow font-bold">
                    About us
                  </h4>
                  <p className="text-sm sm:text-base lg:text-[18px] text-gray leading-relaxed">
                    We are the biggest hyperstore in the universe. We got you
                    all cover with our exclusive collections and latest drops.
                  </p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl text-yellow font-bold">
                    Categories
                  </h4>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm sm:text-base lg:text-[18px] text-gray leading-relaxed">
                      Runners
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] text-gray leading-relaxed">
                      Sneakers
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] text-gray leading-relaxed">
                      Basketball
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] text-gray leading-relaxed">
                      Outdoor
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] text-gray leading-relaxed">
                      Golf
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] text-gray leading-relaxed">
                      Hiking
                    </p>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl text-yellow font-bold">
                    Company
                  </h4>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm sm:text-base lg:text-[18px] text-gray leading-relaxed">
                      About
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] text-gray leading-relaxed">
                      Contact
                    </p>
                    <p className="text-sm sm:text-base lg:text-[18px] text-gray leading-relaxed">
                      Blogs
                    </p>
                  </div>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl text-yellow font-bold">
                    Follow Us
                  </h4>
                  <div className="flex gap-6">
                    <Instagram color="white" />
                    <Twitter color="white" />
                    <Facebook color="white" />
                    <Youtube color="white" />
                  </div>
                  {/* TODO: add social icons */}
                </div>
              </div>
            </div>

            {/* Background Logo */}
            <div className="absolute -bottom-8 sm:-bottom-16 md:-bottom-28 left-0 right-0 flex justify-center pointer-events-none -z-10">
              <LogoWhiteIcon className="w-full h-full" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

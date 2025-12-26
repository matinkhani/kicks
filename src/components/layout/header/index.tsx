import Image from "next/image";
import { SideMenu } from "./components/side-menu";
import { SearchComponent } from "./components/search";
import { Profile } from "./components/profile";
import { Notifications } from "./components/notifications";
import Container from "@/components/shared/container";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 pt-8 pb-6">
      <Container>
        <div className="max-w-full bg-fa-white rounded-2xl p-4 lg:p-8 flex items-center">
          {/* Left Side */}
          <div className="flex-1 flex justify-start">
            <SideMenu />
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <Image
              src={"/Logo.png"}
              alt="logo"
              width={80}
              height={20}
              priority
            />
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-end items-center gap-2 lg:gap-4">
            <SearchComponent />
            <Profile />
            <Notifications />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

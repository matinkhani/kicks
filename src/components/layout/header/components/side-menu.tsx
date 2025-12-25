import { Menu } from "lucide-react";
import { SideMenuItems } from "../data/side-menu.data";
import Link from "next/link";

export const SideMenu = () => {
  return (
    <>
      <Menu className="lg:hidden" />
      <div className="lg:flex justify-between items-center hidden gap-10">
        {SideMenuItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="text-[16px] text-dark-gray font-bold"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
};

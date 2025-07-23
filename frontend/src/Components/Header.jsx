import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/ALJANNAH JET OFFICIAL LOGO.png"; // renomme ton fichier pour éviter les espaces
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navigation = [
  { key: "home", href: "/" },
  { key: "booking", href: "/booking" },
  { key: "catalog", href: "/jets" },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-[#5D7D88FF] to-[#0D2E36FF] fixed top-0 w-full z-50 shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <a href="/">
                  <img
                    src={logo}
                    alt="Aljannah Jet"
                    className="h-10 sm:h-35 w-auto object-contain animate__animated animate__fadeInDown"
                  />
                </a>
              </div>

              {/* Desktop nav */}
              <div className="hidden sm:flex sm:items-center sm:justify-center sm:space-x-6 w-full">
                {navigation.map((item) => {
                  const isActive =
                    location.pathname === item.href ||
                    location.hash === item.href;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={
                        isActive
                          ? "text-yellow-400 underline underline-offset-4"
                          : "text-white hover:text-yellow-400"
                      }
                    >
                      {t(`header.${item.key}`)}

                    </a>
                  );
                })}
              </div>

              {/* Contact button */}
              <div className="hidden sm:block">
                <a
                  href="/contact"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-200 ripple-click"
                >
                {t('header.contact')}

                </a>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => i18n.changeLanguage("en")}
                  className="text-white hover:text-yellow-400"
                >
                  EN
                </button>
                <button
                  onClick={() => i18n.changeLanguage("fr")}
                  className="text-white hover:text-yellow-400"
                >
                  FR
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="size-6" />
                  ) : (
                    <Bars3Icon className="size-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="sm:hidden bg-[#02171FFF] px-2 pt-2 pb-3 text-center space-y-1">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "text-yellow-400 underline underline-offset-4"
                    : "text-white hover:text-yellow-400",
                  "block px-3 py-2 text-base font-medium transition duration-200"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}

            <a
              href="/contact"
              className="block bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-200 ripple-click mt-3 mx-auto w-fit"
            >
              Contact Us
            </a>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

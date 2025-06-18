"use client";
import { Fragment, useState, useRef } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Ακουστικά", href: "/akoustika" },
  {
    name: "Συνεργάτες",
    href: "/synergates",
    dropdown: [
      { name: "ΕΟΠΥΥ", href: "/synergates/eopyy" },
      { name: "Πάροχοι Βοηθημάτων Ακοής", href: "/synergates/paroxoi" },
    ],
  },
  { name: "Σχετικά με μας", href: "/sxetika-me-mas" },
  { name: "Συχνές Ερωτήσεις", href: "/syxnes-erotiseis" },
  { name: "Επικοινωνία", href: "/epikoinonia" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  // Hover logic for συνεργάτες
  const [isSynergatesOpen, setSynergatesOpen] = useState(false);
  const synergatesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openSynergates = () => {
    if (synergatesTimeout.current) clearTimeout(synergatesTimeout.current);
    setSynergatesOpen(true);
  };

  const closeSynergates = () => {
    synergatesTimeout.current = setTimeout(() => setSynergatesOpen(false), 100);
  };

  return (
    <Disclosure as="nav" className="bg-white border-b sticky top-0 z-50">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-[1980px] px-4  flex h-20 items-center  gap-2">
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
            {/* Logo */}
            <Link href="/" className="flex  items-center  ">
              <Image
                src="/logo1.svg"
                alt="Passalis Akoustika Logo"
                width={65}
                height={65}
                className="h-19 w-auto "
                priority
              />
            </Link>
            {/* Desktop nav */}
            <div className="hidden  lg:flex flex-1 items-center justify-center space-x-8">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={openSynergates}
                    onMouseLeave={closeSynergates}
                  >
                    <Menu as="div">
                      <MenuButton
                        className={classNames(
                          "inline-flex items-center font-medium text-gray-700 hover:text-primary transition",
                          pathname?.startsWith(item.href) ? "text-primary" : ""
                        )}
                        aria-expanded={isSynergatesOpen}
                      >
                        {item.name}
                      </MenuButton>
                      <Transition
                        show={isSynergatesOpen}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems
                          static
                          className="absolute  left-0 mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
                        >
                          <div className="py-1">
                            {item.dropdown.map((drop) => (
                              <MenuItem
                                as={Link}
                                href={drop.href}
                                key={drop.href}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "bg-gray-100 text-primary"
                                      : "text-gray-700 hover:text-primary ",
                                    "block px-4 py-2 text-sm"
                                  )
                                }
                                onClick={() => setSynergatesOpen(false)}
                              >
                                {drop.name}
                              </MenuItem>
                            ))}
                          </div>
                        </MenuItems>
                      </Transition>
                    </Menu>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={classNames(
                      "font-medium text-gray-700 transition relative px-2 py-1",
                      pathname === item.href
                        ? "text-primary border-b-2 border-primary"
                        : "hover:text-primary hover:border-b-2 hover:border-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            {/* Contact Info row with icons */}
            <div className="hidden lg:flex items-center gap-4  ">
              <a
                href="tel:2106129896"
                className="flex items-center gap-1 text-brandgray font-bold hover:text-primary no-underline  transition"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                210 612 9896
              </a>
              <a
                href="https://www.google.com/maps/place/%CE%A0%CE%91%CE%A3%CE%A3%CE%91%CE%9B%CE%97%CE%A3+%CE%97.+-+%CE%91%CE%9A%CE%9F%CE%A5%CE%A3%CE%A4%CE%99%CE%9A%CE%91+%CE%92%CE%91%CE%A1%CE%97%CE%9A%CE%9F%CE%AA%CE%91%CE%A3/@38.0483082,23.807228,17z/data=!3m1!4b1!4m6!3m5!1s0x14a19968f09ee0db:0x121536f50b8e6e2a!8m2!3d38.0483082!4d23.807228!16s%2Fg%2F11xdw04xv9?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-brandgray font-bold no-underline hover:text-primary transition"
              >
                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                Δολιανής 74, Leof. Kifisias 127
              </a>
            </div>
          </div>
          {/* Mobile Panel */}
          <Transition
            show={open}
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition duration-150 ease-in"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DisclosurePanel className="lg:hidden fixed inset-0 z-40 bg-white shadow-xl overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex justify-between items-center border-b">
                <Link href="/" onClick={() => close()}>
                  <Image
                    src="/logo1.svg"
                    alt="Passalis Akoustika Logo"
                    width={48}
                    height={48}
                    className="h-10 w-auto"
                  />
                </Link>
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
              </div>
              <div className="space-y-1 px-2 pt-4 pb-3">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div key={item.name} className="space-y-1">
                      <DisclosureButton
                        as={Link}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-primary"
                        onClick={() => close()}
                      >
                        {item.name} (Όλα)
                      </DisclosureButton>
                      {item.dropdown.map((drop) => (
                        <DisclosureButton
                          as={Link}
                          href={drop.href}
                          key={drop.href}
                          className="block rounded-md px-6 py-2 text-base font-medium text-gray-700 hover:text-primary"
                          onClick={() => close()}
                        >
                          {drop.name}
                        </DisclosureButton>
                      ))}
                    </div>
                  ) : (
                    <DisclosureButton
                      as={Link}
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-primary"
                      onClick={() => close()}
                    >
                      {item.name}
                    </DisclosureButton>
                  )
                )}
              </div>
              <div className="mt-4 px-4 py-2 border-t">
                <a
                  href="tel:2106129896"
                  className="block font-bold text-primary mb-1 hover:underline"
                >
                  <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  210 612 9896
                </a>
                <a
                  href="https://www.google.com/maps/place/%CE%A0%CE%91%CE%A3%CE%A3%CE%91%CE%9B%CE%97%CE%A3+%CE%97.+-+%CE%91%CE%9A%CE%9F%CE%A5%CE%A3%CE%A4%CE%99%CE%9A%CE%91+%CE%92%CE%91%CE%A1%CE%97%CE%9A%CE%9F%CE%AA%CE%91%CE%A3/@38.0483082,23.807228,17z/data=!3m1!4b1!4m6!3m5!1s0x14a19968f09ee0db:0x121536f50b8e6e2a!8m2!3d38.0483082!4d23.807228!16s%2Fg%2F11xdw04xv9?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-gray-500 hover:underline"
                >
                  <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                  Δολιανής 74, Leof. Kifisias 127, Marousi 151 24
                </a>
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

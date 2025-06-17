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
          <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-blue-700 hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo1.svg"
                alt="Passalis Akoustika Logo"
                width={55}
                height={55}
                className="h-15 w-auto"
                priority
              />
            </Link>
            {/* Desktop nav */}
            <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
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
                          "inline-flex items-center font-medium text-gray-700 hover:text-blue-700 transition",
                          pathname?.startsWith(item.href) ? "text-blue-700" : ""
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
                          className="absolute left-0 mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
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
                                      ? "bg-gray-100 text-blue-700"
                                      : "text-gray-700",
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
                      "font-medium text-gray-700 hover:text-blue-700 transition",
                      pathname === item.href ? "text-blue-700" : ""
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            {/* Contact Info row with icons */}
            <div className="hidden lg:flex items-center gap-6 min-w-fit ml-6">
              <span className="flex items-center gap-1 text-blue-700 font-bold">
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                2310 123 456
              </span>
              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                Βασ. Όλγας 123, Θεσσαλονίκη
              </span>
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
                    src="/logo.png"
                    alt="Passalis Akoustika Logo"
                    width={48}
                    height={48}
                    className="h-10 w-auto"
                  />
                </Link>
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-blue-700 hover:bg-gray-100 focus:outline-none">
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
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-700"
                        onClick={() => close()}
                      >
                        {item.name} (Όλα)
                      </DisclosureButton>
                      {item.dropdown.map((drop) => (
                        <DisclosureButton
                          as={Link}
                          href={drop.href}
                          key={drop.href}
                          className="block rounded-md px-6 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
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
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-700"
                      onClick={() => close()}
                    >
                      {item.name}
                    </DisclosureButton>
                  )
                )}
              </div>
              <div className="mt-4 px-4 py-2 border-t">
                <span className="block font-bold text-blue-700 mb-1">
                  2310 123 456
                </span>
                <span className="block text-xs text-gray-500">
                  Βασ. Όλγας 123, Θεσσαλονίκη
                </span>
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

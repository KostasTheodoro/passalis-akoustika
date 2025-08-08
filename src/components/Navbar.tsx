"use client";
import { Fragment, useState, useRef, ReactNode } from "react";
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

const hearingTypesDropdown = [
  { name: "Ενδοκαναλικά - CIC", href: "/akoustika/cic" },
  { name: "Επαναφορτιζόμενα - Charge&Go", href: "/akoustika/rechargeable" },
  { name: "Ανοιχτής Εφαρμογής - RIC", href: "/akoustika/ric" },
  { name: "Οπισθωτιαία - BTE", href: "/akoustika/bte" },
];

const navigation = [
  { name: "Ακουστικά", href: "/akoustika", dropdown: hearingTypesDropdown },
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

interface MobileNavLinkProps {
  href: string;
  children: ReactNode;
  close: () => void;
  className?: string;
}

function MobileNavLink({
  href,
  children,
  close,
  className = "",
}: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        close();
      }}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const [isSynergatesOpen, setSynergatesOpen] = useState(false);
  const [isAkoustikaOpen, setAkoustikaOpen] = useState(false);
  const synergatesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const akoustikaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openSynergates = () => {
    if (synergatesTimeout.current) clearTimeout(synergatesTimeout.current);
    setSynergatesOpen(true);
  };

  const closeSynergates = () => {
    synergatesTimeout.current = setTimeout(() => setSynergatesOpen(false), 100);
  };
  const openAkoustika = () => {
    if (akoustikaTimeout.current) clearTimeout(akoustikaTimeout.current);
    setAkoustikaOpen(true);
  };
  const closeAkoustika = () => {
    akoustikaTimeout.current = setTimeout(() => setAkoustikaOpen(false), 100);
  };

  return (
    <Disclosure as="nav" className="bg-white border-b sticky top-0 z-50">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-[1980px] px-4 flex h-20 items-center justify-between lg:justify-start gap-2">
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
            <Link href="/" className="flex items-center">
              <Image
                src="/logo1.svg"
                alt="Passalis Akoustika Logo"
                width={65}
                height={65}
                className="h-19 w-auto"
                priority
              />
            </Link>
            <div className="w-10 lg:hidden" aria-hidden="true" />
            {/* Desktop nav */}
            <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={
                      item.name === "Ακουστικά" ? openAkoustika : openSynergates
                    }
                    onMouseLeave={
                      item.name === "Ακουστικά"
                        ? closeAkoustika
                        : closeSynergates
                    }
                  >
                    <Menu as="div">
                      <MenuButton
                        as={Link}
                        href={item.href}
                        className={classNames(
                          "inline-flex items-center font-medium transition px-2",
                          pathname === item.href ||
                            (item.name === "Ακουστικά" && isAkoustikaOpen) ||
                            (item.name === "Συνεργάτες" && isSynergatesOpen)
                            ? "text-primary border-b-2 border-primary"
                            : "text-gray-700 hover:text-primary hover:border-b-2 hover:border-primary"
                        )}
                        aria-expanded={
                          item.name === "Ακουστικά"
                            ? isAkoustikaOpen
                            : isSynergatesOpen
                        }
                        onClick={() => {
                          if (item.name === "Ακουστικά")
                            setAkoustikaOpen(false);
                          if (item.name === "Συνεργάτες")
                            setSynergatesOpen(false);
                        }}
                      >
                        {item.name}
                      </MenuButton>
                      <Transition
                        show={
                          item.name === "Ακουστικά"
                            ? isAkoustikaOpen
                            : isSynergatesOpen
                        }
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
                                      ? "bg-gray-100 text-primary"
                                      : "text-gray-700 hover:text-primary ",
                                    "block px-4 py-2 text-sm"
                                  )
                                }
                                onClick={() =>
                                  item.name === "Ακουστικά"
                                    ? setAkoustikaOpen(false)
                                    : setSynergatesOpen(false)
                                }
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

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:2106129896"
                className="flex items-center gap-1 text-brandgray font-bold hover:text-primary no-underline transition"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                210 612 9896
              </a>
              <a
                href="https://www.google.com/maps/place/%CE%A0%CE%91%CE%A3%CE%A3%CE%91%CE%9B%CE%97%CE%A3+%CE%97.+-+%CE%91%CE%9A%CE%9F%CE%A5%CE%A3%CE%A4%CE%99%CE%9A%CE%91+%CE%92%CE%91%CE%A1%CE%97%CE%9A%CE%9F%CE%8A%CE%91%CE%A3/@38.0483082,23.807228,17z/data=!3m1!4b1!4m6!3m5!1s0x14a19968f09ee0db:0x121536f50b8e6e2a!8m2!3d38.0483082!4d23.807228!16s%2Fg%2F11xdw04xv9?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-brandgray font-bold no-underline hover:text-primary transition"
              >
                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                Δολιανής 74, Λεωφ. Κηφισίας 127
              </a>
            </div>
          </div>

          <Transition
            show={open}
            appear
            as={Fragment}
            enter="transition-opacity duration-400"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-400"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => close()}
              aria-hidden="true"
            />
          </Transition>

          <Transition
            show={open}
            appear
            as={Fragment}
            enter="transition-transform duration-400"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-400"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DisclosurePanel
              static
              className="fixed inset-y-0 left-0 z-50 w-[38vw] max-w-xs min-w-[240px] bg-white shadow-xl overflow-y-auto h-full"
            >
              <div className="px-4 pt-5 pb-2 flex justify-between items-center border-b">
                <MobileNavLink href="/" close={close}>
                  <Image
                    src="/logo1.svg"
                    alt="Passalis Akoustika Logo"
                    width={48}
                    height={48}
                    className="h-10 w-auto"
                  />
                </MobileNavLink>

                <button
                  type="button"
                  onClick={() => close()}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="space-y-1 px-2 pt-4 pb-3">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div key={item.name} className="space-y-1">
                      <MobileNavLink
                        href={item.href}
                        close={close}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-primary"
                      >
                        {item.name} (Όλα)
                      </MobileNavLink>
                      {item.dropdown.map((drop) => (
                        <MobileNavLink
                          href={drop.href}
                          key={drop.href}
                          close={close}
                          className="block rounded-md px-6 py-2 text-base font-medium text-gray-700 hover:text-primary"
                        >
                          {drop.name}
                        </MobileNavLink>
                      ))}
                    </div>
                  ) : (
                    <MobileNavLink
                      key={item.href}
                      href={item.href}
                      close={close}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-primary"
                    >
                      {item.name}
                    </MobileNavLink>
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
                  href="https://www.google.com/maps/place/%CE%A0%CE%91%CE%A3%CE%A3%CE%91%CE%9B%CE%97%CE%A3+%CE%97.+-+%CE%91%CE%9A%CE%9F%CE%A5%CE%A3%CE%A4%CE%99%CE%9A%CE%91+%CE%92%CE%91%CE%A1%CE%97%CE%9A%CE%9F%CE%8A%CE%91%CE%A3/@38.0483082,23.807228,17z/data=!3m1!4b1!4m6!3m5!1s0x14a19968f09ee0db:0x121536f50b8e6e2a!8m2!3d38.0483082!4d23.807228!16s%2Fg%2F11xdw04xv9?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-gray-500 hover:underline"
                >
                  <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                  Δολιανής 74, Λεωφ. Κηφισίας 127, Μαρούσι 151 24
                </a>
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

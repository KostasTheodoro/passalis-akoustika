import Image from "next/image";

export function SigniaApp() {
  return (
    <section className="w-full px-4 py-12 mt-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16 py-8">
        <div className="flex flex-col items-center justify-center min-w-[130px]">
          <Image
            src="/signia-logo.png"
            alt="Signia logo"
            width={200}
            height={110}
            className="mb-2 md:mb-0"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center md:text-left pb-8">
            Κατεβάστε το Signia App
          </h2>
          <div className="flex flex-col gap-4 h-full justify-center">
            <p className="text-gray-700 text-md md:text-lg md:text-left text-center mb-2 max-w-2xl">
              Ελέγξτε και προσαρμόστε τα ακουστικά σας απευθείας από το κινητό
              σας τηλέφωνο.
              <br />
              Το Signia App σας παρέχει έλεγχο, οδηγίες, υποστήριξη και πολλές
              ακόμα δυνατότητες, εύκολα και γρήγορα.
            </p>
            <div className="flex flex-row gap-4 mt-2 md:mt-4 justify-center md:justify-start">
              <a
                href="https://apps.apple.com/app/signia-app/id1440887920"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-transform duration-200 hover:scale-105 focus:scale-105 active:scale-95"
              >
                <Image
                  src="/badges/appstore-badge.svg"
                  alt="Download on the App Store"
                  width={150}
                  height={54}
                  className="h-12 w-auto"
                  unoptimized
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.signia.rta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-transform duration-200 hover:scale-105 focus:scale-105 active:scale-95"
              >
                <Image
                  src="/badges/googleplay-badge.png"
                  alt="Get it on Google Play"
                  width={170}
                  height={54}
                  className="h-17.5 w-auto"
                  unoptimized
                />
              </a>
            </div>
            <div className="mt-4 text-primary italic text-sm font-bold md:text-left text-center">
              Διαθέσιμο για iOS και Android.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

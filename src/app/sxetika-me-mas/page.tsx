export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Top section: Left text, right image grid */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text side */}
          <div>
            <h1 className="text-4xl font-extrabold text-primary mb-6 leading-tight">
              Αλλάζουμε τον τρόπο που οι άνθρωποι ακούν
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Η Passalis Ακουστικά Βαρηκοΐας είναι εδώ για να βελτιώσει την
              καθημερινότητά σας. Η ομάδα μας προσφέρει σύγχρονες λύσεις και
              φροντίδα με σεβασμό και επαγγελματισμό.
            </p>
            <p className="text-gray-700 text-base">
              Εμπιστευθείτε τους ειδικούς μας για να βρείτε το κατάλληλο
              ακουστικό βαρηκοΐας, προσαρμοσμένο στις δικές σας ανάγκες.
            </p>
          </div>
          {/* Images side */}
          <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Ακουστικά"
                className="rounded-xl object-cover w-full h-32 lg:h-36 shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="Ομάδα"
                className="rounded-xl object-cover w-full h-32 lg:h-36 shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
                alt="Πελάτης"
                className="rounded-xl object-cover w-full h-32 lg:h-36 shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
                alt="Εξοπλισμός"
                className="rounded-xl object-cover w-full h-32 lg:h-36 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Left-aligned text section, with right empty */}
      <section className="mx-auto max-w-7xl px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Η αποστολή μας
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Στόχος μας είναι να προσφέρουμε εξατομικευμένη φροντίδα, με
              τεχνογνωσία και σεβασμό. Από τη διάγνωση έως την υποστήριξη μετά
              την πώληση, βρισκόμαστε δίπλα σας σε κάθε βήμα.
            </p>
            <p className="text-gray-700 text-base">
              Είμαστε υπερήφανοι για το ανθρώπινο δυναμικό μας και για την
              εμπιστοσύνη που μας δείχνετε όλα αυτά τα χρόνια.
            </p>
          </div>
          {/* Right side left empty intentionally */}
          <div></div>
        </div>
      </section>
      {/* Bottom image, aligned with the main container, with some padding above & below */}
      <section className="mx-auto max-w-7xl px-4 pt-4 pb-6">
        <div className="w-full h-64 lg:h-96 relative">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
            alt="Χαρούμενοι πελάτες"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

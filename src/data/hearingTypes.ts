// src/data/hearingTypes.ts

export type HearingType = {
  slug: string;
  title: string;
  description: string;
  image: string; // URL για placeholder!
};

export const hearingTypes: HearingType[] = [
  {
    slug: "cic",
    title: "CIC – Completely In Canal (Ενδοκαναλικά)",
    description:
      "Τα ακουστικά CIC εφαρμόζουν βαθιά στον ακουστικό πόρο και είναι σχεδόν αόρατα, προσφέροντας διακριτική ενίσχυση ακοής με φυσικό ήχο.",
    image: "https://placehold.co/170x170?text=CIC", // placeholder image
  },
  {
    slug: "ric",
    title: "RIC – Receiver In Canal (Ανοιχτής Εφαρμογής)",
    description:
      "Τα ακουστικά RIC προσφέρουν άνεση και υψηλή απόδοση, με διακριτικό σχεδιασμό και φυσική μεταφορά ήχου στον ακουστικό πόρο.",
    image: "https://placehold.co/170x170?text=RIC",
  },
  {
    slug: "bte",
    title: "BTE – Behind The Ear (Οπισθωτιαία)",
    description:
      "Τα BTE είναι τα πιο διαδεδομένα ακουστικά, με μεγάλη αντοχή, ευκολία στη χρήση και κατάλληλα για όλα τα επίπεδα απώλειας ακοής.",
    image: "https://placehold.co/170x170?text=BTE",
  },
  {
    slug: "rechargeable",
    title: "Επαναφορτιζόμενα",
    description:
      "Τα επαναφορτιζόμενα ακουστικά εξαλείφουν την ανάγκη για συχνές αλλαγές μπαταρίας, προσφέροντας ευκολία και οικολογική χρήση.",
    image: "https://placehold.co/170x170?text=Rechargeable",
  },
];

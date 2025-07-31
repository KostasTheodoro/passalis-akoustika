export type HearingType = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const hearingTypes: HearingType[] = [
  {
    slug: "cic",
    title: "Ενδοκαναλικά-CIC (Completely in Canal)",
    description:
      "Τα ακουστικά CIC εφαρμόζουν βαθιά στον ακουστικό πόρο και είναι σχεδόν αόρατα, προσφέροντας διακριτική ενίσχυση ακοής με φυσικό ήχο.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/6/319222286/RE/JL/FM/6841868/signia-prompt-itc-cic-custom-500x500.jpg",
  },
  {
    slug: "ric",
    title: "Ανοιχτής Εφαρμογής–RIC (Receiver In Canal)",
    description:
      "Τα ακουστικά RIC προσφέρουν άνεση και υψηλή απόδοση, με διακριτικό σχεδιασμό και φυσική μεταφορά ήχου στον ακουστικό πόρο.",
    image: "https://i.ebayimg.com/images/g/2zoAAOSwvFxgybsq/s-l1200.jpg",
  },
  {
    slug: "bte",
    title: "Οπισθωτιαία - ΒΤΕ (Behind the Ear)",
    description:
      "Τα BTE είναι τα πιο διαδεδομένα ακουστικά, με μεγάλη αντοχή, ευκολία στη χρήση και κατάλληλα για όλα τα επίπεδα απώλειας ακοής.",
    image:
      "https://слышувижу.рф/wp-content/uploads/2023/10/sluhovoj-apparat-siemens-xtm-p-p4.jpg",
  },
  {
    slug: "rechargeable",
    title: "Επαναφορτιζόμενα",
    description:
      "Τα επαναφορτιζόμενα ακουστικά εξαλείφουν την ανάγκη για συχνές αλλαγές μπαταρίας, προσφέροντας ευκολία και οικολογική χρήση.",
    image:
      "https://static.wixstatic.com/media/6e811e_420d8eb47b494d5eb72fd55eac8429c5~mv2.jpg",
  },
];

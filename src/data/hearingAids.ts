// src/data/hearingAids.ts

export type HearingAidModel = {
  id: string;
  name: string;
  type: "cic" | "ric" | "bte" | "rechargeable";
  images: string[];
  description: string;
};

export const hearingAidModels: HearingAidModel[] = [
  // --- CIC ---
  {
    id: "intuis-cic",
    name: "Signia Intuis CIC",
    type: "cic",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2023/6/319222286/RE/JL/FM/6841868/signia-prompt-itc-cic-custom-500x500.jpg",
    ],
    description:
      "Διακριτικό ενδοκαναλικό ακουστικό με 12‑kanaλους επεξεργαστές, έλεγχο θορύβου και δυνατότητα τηλερύθμισης μέσω Signia App, ιδανικό για μέτρια βαρηκοΐα.",
  },
  {
    id: "insio-cic-mayro",
    name: "Signia Insio IX CIC (Μαύρο)",
    type: "cic",
    images: [
      "https://hearshearingandhearables.com/wp-content/uploads/2024/03/Insio-IX_CIC_black_pair_1000x1000.jpg",
    ],
    description:
      "Τα Signia Insio IX CIC προσφέρουν πλήρως εξατομικευμένη εφαρμογή, Binaural OneMic Directionality 2.0 για καθαρότητα στη φωνή και διακριτικότητα στην εμφάνιση.",
  },
  {
    id: "intuis-click-3",
    name: "Signia Intuis 3 Click CIC",
    type: "cic",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/7/IK/CP/IZ/64931873/click-itc-1-500x500.jpg",
    ],
    description:
      "Με το σύστημα Click, οι εύκαμπτες θήκες εφαρμόζουν εύκολα και αντικαθίστανται, προσφέροντας άνεση και γρήγορη προσαρμογή με 12‑kanaλους επεξεργαστές.",
  },
  {
    id: "silk-cic",
    name: "Signia Silk CIC",
    type: "cic",
    images: [
      "https://hearingaidaustralia.com.au/cdn/shop/products/4733_source_1624964690_7a44d1f6-0a8a-4d18-b2ff-c5c04b30ed3c.jpg?v=1657871509",
    ],
    description:
      "Πολύ διακριτικό CIC με μαλακή θήκη Silk, άνετη εφαρμογή και αόρατη εμφάνιση, ιδανικό για όσους θέλουν να 'εξαφανίζεται' μέσα στον ακουστικό πόρο.",
  },

  // --- RIC ---
  {
    id: "intuis-3-ric",
    name: "Signia Intuis 3 RIC",
    type: "ric",
    images: ["https://i.ebayimg.com/images/g/2zoAAOSwvFxgybsq/s-l1200.jpg"],
    description:
      "RIC ακουστικό με λεπτό καλώδιο και ακουστικό μικρο-ηχείων στο κανάλι. Προηγμένα μικρόφωνα, σπίσιμο θορύβου, 6‑kanaλους, Signia App & TeleCare ready ",
  },
  {
    id: "pure-312",
    name: "Signia Pure 312 RIC",
    type: "ric",
    images: [
      "https://aanviihearing.com/image/cache/catalog/web/products/pure/312%20AX/Pure-312-AX_beige_1000x1000-2000x2000.jpg",
    ],
    description:
      "Δημοφιλές RIC με μπαταρία 312, κλασσικά 4‑προγράμματα ήχου, ασύρματη επαφή και εύκολη χρήση — ιδανικό για all‑round εφαρμογές.",
  },

  // --- BTE ---
  {
    id: "prompt-p-sp",
    name: "Signia Prompt P/SP BTE",
    type: "bte",
    images: [
      "https://слышувижу.рф/wp-content/uploads/2023/10/sluhovoj-apparat-siemens-xtm-p-p4.jpg",
    ],
    description:
      "BTE με εκτενή ισχύ, αντοχή σε υγρασία/σκόνη, TeleCare, με βαρόμετρο και στιβαρή σχεδίαση για κάθε χρήση.",
  },
  {
    id: "intuis-4-p-sp",
    name: "Signia Intuis 4.1 P/SP BTE",
    type: "bte",
    images: [
      "https://aanviihearing.com/image/cache/catalog/web/products/intuis/4.0SP/Intuis-SP-4_Beige-1000x1000.png",
    ],
    description:
      "Νέα σειρά Intuis 4 με Bluetooth streaming, Signia Assistant, TeleCare, τηλε‑κουτσαβιο και αντίσταση IP68 .",
  },
  {
    id: "intuis-3-s-m",
    name: "Signia Intuis 3 S/M BTE",
    type: "bte",
    images: [
      "https://aanviihearing.com/image/cache/catalog/web/products/intuis/Aanvii-Hearing-Solutions-Intuis-3_S_beige_lt_1000x1000-1000x1000.jpg",
    ],
    description:
      "Σειρά Intuis 3 BTE, με 6‑kanaλους MPO, τηλε‑πωλήσεις μέσω Signia app, directionality mic και αντοχή σε απαιτητικά περιβάλλοντα .",
  },

  // --- Rechargeable ---
  {
    id: "insio-charge-go",
    name: "Signia Insio Charge&Go",
    type: "rechargeable",
    images: [
      "https://static.wixstatic.com/media/6e811e_420d8eb47b494d5eb72fd55eac8429c5~mv2.jpg",
      "https://cdn.signia.net/-/media/signia/global/images/products/signia-ax/insio-chargego-ax/insio-ax_black_double_1000x1000.jpg?rev=f3d0df96f0594402930ba6e739588ccc&hash=9E03A1D2E0001A311A47DA9E7FA02CF5",
    ],
    description:
      "Επαναφορτιζόμενο CIC/ΙΙC με Charge&Go βάση, έως 20 ώρες αυτονομία, Bluetooth και HD streaming από Signia NX πλατφόρμα ",
  },
  {
    id: "silk-charge-go",
    name: "Signia Silk Charge&Go IX",
    type: "rechargeable",
    images: [
      "https://aanviihearing.com/image/cache/catalog/web/products/silk/silk-charge-and-go-ix/silk-charge-and-go-ix-hearing-aids-800x800-2000x2000.png",
    ],
    description:
      "Διακριτικό Silk CIC με επαναφορτιζόμενη Charge&Go λειτουργία, Augmented Xperience platform για φυσικό ήχο & streaming.",
  },
  {
    id: "pure-charge-go",
    name: "Signia Pure Charge&Go IX",
    type: "rechargeable",
    images: [
      "https://ear.direct/cdn/shop/files/PureCnGIX_Graphite_Pair_Charger_e1a9e993-c49a-41bd-9b3e-c5a024e59dc3.png",
    ],
    description:
      "Rechargeable RIC με Bluetooth, Signia Assistant, streaming τηλεφώνου και τηλεόρασης – ισχυρό και εύκολο στη χρήση.",
  },
  {
    id: "orion-charge-go",
    name: "Signia Orion Charge&Go",
    type: "rechargeable",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/1/481661718/UR/DQ/TT/150676699/signia-orion-charge-go-bte-50.png",
    ],
    description:
      "Μεγάλο BTE επαναφορτιζόμενο μοντέλο Orion, Charge&Go, για βαριά σε μέτρια απώλεια, με ισχυρή μπαταρία και streaming.",
  },
];

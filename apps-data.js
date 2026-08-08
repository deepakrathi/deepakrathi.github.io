/**
 * Android Trail — App Data
 * ---------------------------------------------------------
 * This is the single place to add, edit, or remove apps.
 * The rest of the site (home page grid + app detail pages)
 * is generated automatically from this list — no other file
 * needs to change when a new app ships.
 *
 * To add a new app: copy one of the objects below, fill in
 * your own values, and add it to the APPS array. Use a unique
 * "id" (short, lowercase, hyphenated — it's used in the URL,
 * e.g. app.html?id=your-app-id).
 * ---------------------------------------------------------
 */

const APPS = [
  {
    id: "ludo-legends",
    name: "Ludo Legends",
    tagline: "Roll. Strategize. Dominate. Ludo like you've never played before.",
    category: "Board Game",
    contentRating: "Rated for 3+",
    icon: "https://play-lh.googleusercontent.com/q3RqteZRRDLv3EGr5Q2uQ6fJzlGH3EhD5p2Yp1BtXlLZBXVX0M7aFdr7ILDl855G12uO465Kf1ITJneFIgR-=w512-h512",
    screenshots: [
      "https://play-lh.googleusercontent.com/xzBkrJvF3EkKVGVwDKMdDPbpcB9SSLrZt0m6YGxwaPspEIfy5od-lZ1AyQ3VmpR2vFCxBf183pLhY8qcodl1=w1080-h608",
      "https://play-lh.googleusercontent.com/DdKV6zO11Xv-klv9UX3_2jiO2IvSTP1LFPO47B1EQyNlnAhtogFqCdgQcjDg4fb56QvcWXOnaFSR5XPZhM2u=w1080-h608",
      "https://play-lh.googleusercontent.com/HgpXW1D1K31gug1OpQ1ONaNpbza6f6RHHzaj6aW8Okf1gcK-rgwl2sjQLsXObdGFEcDrclutZ6zkpT_UGUylzQ=w1080-h608",
      "https://play-lh.googleusercontent.com/lgDgD2Zz9XnZU8kZ1tJgCaYN_o5lOyMzTw1TaA570c0rwLMW_L76YtfzYSok6JkCYzGXn8E_-t4Ba1yy5Qir=w1080-h608",
      "https://play-lh.googleusercontent.com/LiJDhtY4JYgEPrpfgcmko_aF1Y56rfew81rxG29H0rUkuJWN-nnjH7oKhUSyh0MDD8sgNg1mUiLDfFA15JC1jw=w1080-h608"
    ],
    description: "Ludo Legends brings the classic board game to life through fast-paced multiplayer competition. Challenge friends in private lobbies, compete against opponents from around the world in quick matches, or enjoy couch co-op sessions with Pass & Play mode. Roll the dice, plan your moves, and race your tokens home in a game the whole family can pick up in seconds.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mac.ludolegends",
    appStoreUrl: "",
    privacyPolicyUrl: "https://docs.google.com/document/d/1sviZKuHk9Dw1Mol9yuxu-nlWtymkdQXrMMDtAiIUH5c/edit?usp=sharing",
    accent: "#ff6b4a"
  },
  {
    id: "mala-counter",
    name: "Mala Counter",
    tagline: "Simple offline mala counter for naam jaap & mantra.",
    category: "Lifestyle",
    contentRating: "Rated for 3+",
    icon: "https://play-lh.googleusercontent.com/P46xJ4u6BFOlWK7G0WcIeVJtdiwpVLngwiKurCdItQKnSzIB4Cwk7oGGCvjJGEpm1o3Det4UySd8xvOeEaVVeg=w512-h512",
    screenshots: [
      "https://play-lh.googleusercontent.com/hPx-JGqgrWYhHahGwekrgH_nYhIT0dBu0CQ0zS7p-IvCdrmrwSO5IhoVUtRuJyFNU-vxMKMO-Uaag2fbaixKFQ=w1080-h608",
      "https://play-lh.googleusercontent.com/yyHwkeF5e-myAowt60dMHA-42-_CtqeBKEbDhg5c5985RsFrZiOdPj_k7e3jSVplVNdNKPXPa38oXiXsrVJh=w1080-h608",
      "https://play-lh.googleusercontent.com/xttF5vmry_tXmO39iE0Nr_sp4Y_bpYAXOniWCWUQ1YPa2E3fpOoXXNyiHzeWoZYk4lwFanpMXmW7E8rgWaAmyA=w1080-h608",
      "https://play-lh.googleusercontent.com/z3f9Xb0De6Bq03WuMp6J5FB8ZW7xX290OQuT4eNeehRgZ1M6nU32pVm5T4SZ_dQdcuND0RCLgkuG0IGL_KvgdB4=w1080-h608",
      "https://play-lh.googleusercontent.com/EnRjokjwI1Q1_CjhtktanYDqgy6wQw57r56WCUmxC8VcJvomkHvETzpDLl-pHNSHQC33N9SPg36gkjqhwsnyIA=w1080-h608"
    ],
    description: "Mala Counter is a minimal, distraction-free way to track mantra repetitions and prayer cycles during japa meditation. It works entirely offline, collects no user data, shows no advertisements, and needs no account to get started — just open the app and begin your practice. Designed for practitioners of naam jaap and mantra chanting across traditions who want a clean, calming counter that stays out of the way.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.counter.free",
    appStoreUrl: "",
    privacyPolicyUrl: "https://docs.google.com/document/d/1tbds3qW3OnlFO_R0XXbV2kFQXQj-rdCbknHdRLI2WVA/edit?tab=t.0",
    accent: "#6a8caf"
  }

  /* Add your next app here, e.g.:
  {
    id: "your-next-app",
    name: "Your Next App",
    tagline: "One line that sells it.",
    category: "Category",
    contentRating: "Rated for 3+",
    icon: "https://.../icon.png",
    screenshots: ["https://.../1.png", "https://.../2.png"],
    description: "A couple of sentences describing what the app does and why someone would want it.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=your.package.name",
    appStoreUrl: "",
    privacyPolicyUrl: "https://your-privacy-policy-link",
    accent: "#7c5cff"
  },
  */
];

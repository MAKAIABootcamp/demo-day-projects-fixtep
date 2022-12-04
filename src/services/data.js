import { facebook, google } from "../firebase/firebaseConfig";

export const categoryWorker = [
  {
    label: "Carpintero",
    value: 1,
  },
  {
    label: "Albañil",
    value: 2,
  },
  {
    label: "Plomero",
    value: 3,
  },
  {
    label: "Electricista",
    value: 4,
  },
];

export const loginProvider = [
  {
    name: "google",
    image: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1",
    provider: google,
  },
  {
    name: "facebook",
    image: "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png",
    provider: facebook,
  },
];

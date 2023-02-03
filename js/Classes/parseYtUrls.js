export function parseUrl(URL) {
  let URLFinal = "";
  let URLid = "";

  if (URL.includes("watch?")) {
    let indexPrincipio = URL.indexOf("watch?v=") + 8;
    let indexFinal = URL.length;

    while (indexPrincipio < indexFinal) {
      URLid += URL[indexPrincipio];
      indexPrincipio++;
    }

    URLFinal = "https://www.youtube.com/embed/" + URLid + "?autoplay=1";
  } else {
    let indexPrincipio = URL.indexOf("youtu.be/") + 9;
    let indexFinal = URL.length;

    while (indexPrincipio < indexFinal) {
      URLid += URL[indexPrincipio];
      indexPrincipio++;
    }
    URLFinal = "https://www.youtube.com/embed/" + URLid + "?autoplay=1";
  }

  return URLFinal;
}

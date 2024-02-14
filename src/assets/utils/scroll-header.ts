export const scrollToComponent = (target: string) => {
  switch (target) {
    case "ABOUT ME":
      window.location.href = "/";
      break;
    case "RESUME":
      window.location.href = "/";
      break;
    case "PROJECTS":
      window.location.href = "/";
      break;
    case "CONTACT":
      window.location.href = "/";
      break;
    case "AWARDS AND CERTIFICATES":
      window.location.href = "/";
      break;
    default:
      break;
  }
};

import { portfolio } from "../data/portfolio";

export function downloadResume() {
  if (!portfolio.resumeUrl) return;
  const link = document.createElement("a");
  link.href = portfolio.resumeUrl;
  link.download = portfolio.resumeFileName;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

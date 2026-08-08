/** Smooth-scroll to a section by id on the current page. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }
  return false;
}

/** Scroll on home, or navigate to /#id from other routes. */
export function goToSection(
  id: string,
  pathname: string,
  navigate: (opts: { to: string; hash?: string }) => void,
) {
  if (pathname === "/") scrollToSection(id);
  else navigate({ to: "/", hash: id });
}

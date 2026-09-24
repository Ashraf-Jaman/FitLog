export function scrollToLibrary() {
  const library = document.getElementById("library");

  if (!library) return;

  library.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
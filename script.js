const body = document.querySelector("#body");
const container = document.querySelector("#main-container");
const btn = document.querySelector("#btn");

function scrollToPage(pageNumber) {
  const pageWidth = container.scrollWidth / 5;
  console.log(container.scrollWidth); // Assuming 5 pages
  container.scrollTo({ left: pageWidth * pageNumber, behavior: "smooth" });
}
let page = 0;
container.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && page < 5) {
    page++;
  } else if (e.deltaY < 0 && page > 0) {
    page--;
  }
  console.log();
  scrollToPage(page);
});

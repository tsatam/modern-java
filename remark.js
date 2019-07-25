import "remark-slide/src/remark.js";
import presentation from "./presentation.md";

const slideshow = remark.create({
	sourceUrl: presentation,
	highlightLanguage: "java",
	highlightStyle: "solarized-dark",
	ratio: "16:9"
});

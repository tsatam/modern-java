import "remark-slide/src/remark.js";

const slideshow = remark.create({
	sourceUrl: "/presentation.md",
	highlightLanguage: "java",
	highlightStyle: "solarized-dark",
	ratio: "16:9"
});

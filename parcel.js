const Bundler = require("parcel-bundler");
const Path = require("path");

(async function() {
	const bundler = new Bundler([
		"./index.html",
		"./presentation.md"
	], {
		publicUrl: "./"
	});

	bundler.addAssetType("md", require.resolve("parcel-bundler/src/assets/RawAsset"))

	if(process.argv[2] === "watch") {
		await bundler.serve();
	}
	else {
		await bundler.bundle();
	}
})();
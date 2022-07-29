const fs = require("fs");
const params = {
	dirPackage: "package",
	dirRoot: ".",
	filePackage: "package.json",
}

params.fileRoot = [params.dirRoot, params.filePackage].join("/");
params.fileRootPackage = [params.dirPackage, params.filePackage].join("/");

const getVersion = async () => {
	const data = await fs.readFileSync(params.fileRoot);
	const dataPackage = await fs.readFileSync(params.fileRootPackage);
	const dataJsonPackage = JSON.parse(data);
	const {version} = JSON.parse(dataPackage);
	const lastVersion = dataJsonPackage.version;
	dataJsonPackage.version = version;
	fs.writeFileSync(params.fileRoot, JSON.stringify(dataJsonPackage))
	console.log(`File change ${lastVersion} to ${version}`)
}

const components = (path, subPath, all = false) => {
	let files = fs.readdirSync(`${path}/${subPath}`)
	files = files.filter(i => i !== "index.ts")

	const template = (files, directory) => {
		return `
  ${files.map(file => ` ${all ? "export *" : `import ${file.split(".svelte")[0].split(".ts")[0]}`} from "./${file.split(".ts")[0]}";`).join("\n")}
${all ? '' : `export { ${files.map(file => file.split(".svelte")[0].split(".ts")[0]).join(", ")} };`}
`.trim();
	};

	fs.writeFileSync(`${path}/${subPath}/index.ts`, template(files, `${path}/${subPath}`));
}

const mvFiles = (targetDirectory, outputDirectory) => {
	fs.cpSync(`${targetDirectory}`, `${outputDirectory}`, {
		recursive: true,
	})
	fs.rmSync(`${outputDirectory}/*.js`)
}

getVersion();
components("src/lib/components", "atoms");
components("src/lib/components", "molecules");
components("src/lib/components", "organismes");
components("src/lib/components", "templates");
components("src/lib/components", "pages");
components("src/lib/components", "", true);
components("src/lib/actions", "", true);
components("src/lib/functions", "", true);
components("src/lib/models", "", true);
mvFiles("./src/lib/interfaces", "./package/interfaces")

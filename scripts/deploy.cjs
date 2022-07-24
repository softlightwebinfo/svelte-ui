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
    const { version } = JSON.parse(dataPackage);
    const lastVersion = dataJsonPackage.version;
    dataJsonPackage.version = version;
    fs.writeFileSync(params.fileRoot, JSON.stringify(dataJsonPackage))
    console.log(`File change ${lastVersion} to ${version}`)
}

getVersion();
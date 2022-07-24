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
    const { version } = JSON.parse(data);
    const dataJsonPackage = JSON.parse(dataPackage);
    const lastVersion = dataJsonPackage.version;
    dataJsonPackage.version = version;
    fs.writeFileSync(params.fileRootPackage, JSON.stringify(dataJsonPackage))
    console.log(`File change ${lastVersion} to ${version}`)
}

getVersion();
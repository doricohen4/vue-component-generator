#! /usr/bin/env node

const fs = require("fs");
const path = require('path');

/**
 * gather settings
 */

// get component name
const componentName = process.argv[2];

try{
    validateName(componentName);
} catch(err){
    console.error(err);
    process.exit(1);
}

// get configuration variables
let _force = false;

process.argv.forEach((val, index) => {
    if (val === '--force') {
        _force = true;
    }
});


/**
 * start
 */

let componentFolder = path.join(componentName);
let generatorsFolder = path.join(__dirname, "generators");


// create a folder
if (fs.existsSync(componentFolder)) {

    if (!_force){
        console.error(`folder ${componentFolder} already exists, use --force in order to ovrride`);
        process.exit(0);
    }
}
else {
    fs.mkdirSync(componentFolder);
}

let generatorFiles = fs.readdirSync(generatorsFolder);

generatorFiles.forEach(file => {

    try {
        let generator = require(`${path.join(generatorsFolder, file)}`);
        generateFile(componentName, generator, componentFolder);
    } catch (err) {
        console.error(`error during generating file ${file} for component ${componentName}`, err);
        process.exit(1);
    }

});

// done
process.exit(0);

function validateName(componentName) {

    if (typeof componentName !== 'string') {
        throw "component has no name";
    }

    if (componentName === "con"){
        throw "invalid component name forbidden folder name"
    }

    if (/[^a-z-]/.test(componentName)){
        throw "invalid component name pattern, use only dashes and a-z letters"
    }

    if (/(^-)|(-$)/.test(componentName)){
        throw "invalid component name, cannot begin or end with dash"
    }
}

function generateFile(componentName, generator, componentFolder){

    if (typeof generator.getSuffix !== 'function' && typeof generator.getSuffix !== 'function') {}

    let filename = path.join(componentFolder, componentName + generator.getSuffix());
    let filecontent = generator.getTemplate(componentName);

    fs.writeFileSync(filename, filecontent);
}

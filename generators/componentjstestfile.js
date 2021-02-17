

class ComponentJsTestGenerator {

    getSuffix(){
        return ".spec.js"
    }

    getTemplate(componentName){
        return `${componentName} spec was auto generated`
    }
}

const instance = new ComponentJsTestGenerator();

module.exports = instance;

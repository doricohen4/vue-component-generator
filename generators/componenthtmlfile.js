

class ComponentHtmlGenerator {

    getSuffix(){
        return ".html"
    }

    getTemplate(componentName){
        return `<div class="${componentName}-wrapper">

 ${componentName} html file was generated
</div>`
    }
}

const instance = new ComponentHtmlGenerator();

module.exports = instance;

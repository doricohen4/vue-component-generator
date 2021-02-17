

class ComponentHtmlGenerator {

    getSuffix(){
        return ".html"
    }

    getTemplate(componentName){
        return `<div class="${componentName}">

 ${componentName} html was generated
</div>`
    }
}

const instance = new ComponentHtmlGenerator();

module.exports = instance;

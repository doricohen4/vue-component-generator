

class ComponentLessGenerator {

    getSuffix(){
        return ".scss"
    }

    getTemplate(componentName){
        return `
.${componentName}-wrapper {
   
    
}
`
    }
}

const instance = new ComponentLessGenerator();

module.exports = instance;

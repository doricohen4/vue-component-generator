

class ComponentLessGenerator {

    getSuffix(){
        return ".scss"
    }

    getTemplate(componentName){
        return `
.${componentName} {
   
    
}
`
    }
}

const instance = new ComponentLessGenerator();

module.exports = instance;

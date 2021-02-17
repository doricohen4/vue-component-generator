

class ComponentJsTestGenerator {

    getSuffix(){
        return ".spec.js"
    }

    getTemplate(componentName){

        let dash = componentName.replace(/(-)([a-z])(?!$)/g, (text) => text.toUpperCase().substring(1));
        let dashtoUpperCase = dash.charAt(0).toUpperCase() + dash.slice(1);

        return `
import { shallowMount } from '@vue/test-utils';
import ${dashtoUpperCase} from './${dashtoUpperCase}.vue';
let wrapper;
beforeEach(() => {
  wrapper = shallowMount(ValidationCell, {
    propsData: {
     
      }
    })
  });

describe('${dashtoUpperCase}', () => {
  it('should render ${dashtoUpperCase} with ${componentName}-wrapper class', () => {
    expect(wrapper.contains('.${componentName}-wrapper')).toBe(true);
  });
  
 });     
        `
    }
}

const instance = new ComponentJsTestGenerator();

module.exports = instance;

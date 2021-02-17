class ComponentVueGenerator {

    getSuffix() {
        return ".vue"
    }

    getTemplate(componentName) {

        // convert to camel case
        let dashtoUpperCase = componentName.replace(/(-)([a-z])(?!$)/g, (text) => text.toUpperCase().substring(1));
        let camelCaseComponentName = dashtoUpperCase.replace(/^[a-z]/g, (text) => text.toUpperCase());

        return `
      
        <script lang="ts">
import WithRender from './${componentName}';
import { Component, Vue } from 'vue-property-decorator';

@WithRender
@Component
export default class  ${dashtoUpperCase} extends Vue {


}
</script>

<style scoped lang="scss">

@import './${componentName}';
</style>
        
    `

    }
}

const instance = new ComponentVueGenerator();

module.exports = instance;

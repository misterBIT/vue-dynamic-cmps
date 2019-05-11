import selectBox from '../cmps/select-box.cmp.js'
import textBox from '../cmps/text-box.cmp.js'
import linearScale from '../cmps/linear-scale.cmp.js'
import photoTuner from '../cmps/photo-tuner.cmp.js'
import surveyService from '../services/survey.service.js'


export default {
  template: `
        <section v-if="survey">
            <h2>Survey</h2>
            <form @submit.prevent="save">
                <div v-for="(cmp, idx) in survey.cmps">
                    <component :is="cmp.type"  :info="cmp.info" @setVal="setAns($event, idx)"></component>
                </div>
                <button>Save</button>
            </form>
            <pre>{{answers}}</pre>
        </section>
    `, 
    methods: {
        save() {
            console.log('Saving...');
        }
    },
    data() {
        return {
            survey : null,
            answers: []
        }
    },
    async created() {
        this.survey = await surveyService.getById();    
        this.answers = new Array(this.survey.cmps.length)

    },
    methods: {
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans);
            this.answers.splice(idx, 1, ans)
            
        },
        save() {
            console.log('Saving..');
            
        }
    },
    components: {
        selectBox,
        textBox,
        linearScale,
        photoTuner
    }
};


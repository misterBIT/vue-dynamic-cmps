export default {
  template: `
        <section>
            <datalist :id="listId">
                <option v-for="opt in info.opts" :value="opt"></option>
            </datalist>
            <label>
                {{info.label}}
                <input type="text" v-model="val" @change="reportVal" :list="listId" />
            </label>  
        </section>
        `,
  props: ["info"],
  data() {
    return {
      val: ""
    };
  },
  methods: {
    reportVal() {
      this.$emit("setVal", this.val);
    }
  },
  computed: {
    listId() {
      return "list" + this._uid;
    }
  }
};

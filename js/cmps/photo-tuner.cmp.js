
export default {
    template: `
        <section class="photo-tuner" style="overflow:auto">
            <div style="float:right">
                <img :src="imgUrl"  />
                <button type="button"  @click="reportVal">Done</button>
            </div>
            <h4>{{info.label}}</h4>
            Zoom: <input type="range" min="0.1" max="3" step="0.5" v-model="opts.zoom">
            <br>
            Size: <input type="range" min="10" max="400" v-model="opts.size">
            <br>
            Angle: <input type="range" min="0" max="360" step="10" v-model="opts.angle">
            <br>
            vignette: <input type="range" min="0" max="100" step="10" v-model="opts.vignette">
            <br>
        </section>
        `,
        props: ['info'],
        data() {
            return {
                opts : { size: 200, zoom: 1, angle: 0, vignette : 0}
            }
        },
        methods: {
            reportVal() {
                this.$emit('setVal', this.opts)
            }
        },
        computed: {
            imgUrl() {
                const w = `w_${this.opts.size},`;
                const h = `h_${this.opts.size},`;
                const z = `z_${this.opts.zoom},`;
                const a = `a_${this.opts.angle}`;
                const v = `e_vignette:${this.opts.vignette},`;
                
                var url = this.info.imgUrl;
                const pos = url.indexOf('/upload/') + '/upload/'.length;
                const imgOptions = `/g_face,c_thumb,${v}${w}${h}${z}${a}/`;
                url = url.substring(0, pos-1) + imgOptions + 
                url.substring(pos)
                
                return url;
                // Transforms a url: `https://res.cloudinary.com/demo/image/upload/woman.jpg`
                // To Cloudinary Image Manipulation API: `https://res.cloudinary.com/demo/image/upload/g_face,c_thumb,${v}${w}${h}${z}${a}/woman.jpg`
            }
        }
} 
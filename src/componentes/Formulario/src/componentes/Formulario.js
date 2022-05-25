
export default {
    name: 'src-componentes-formulario',
    components: {},
    props: [],
    data () {
      return {
        formData : this.getInicialData(),
        formDirty : this.getInicialData()
      }
    },
    computed: {
  
    },
    mounted () {
  
    },
    methods: {
      getInicialData() {
        return {
          nombre: null,
          edad: null,
          email: null
        }
      },
      enviar() {

        console.log({...this.formData})
  
        this.formData = this.getInicialData()
        this.formDirty = this.getInicialData()
      }
    }
  }
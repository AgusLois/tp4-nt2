<template>

  <section class="src-componentes-api-rest-ful">
    <div class="jumbotron">

      <button class="btn btn-success my-3 mr-3" @click="getUsuariosFetch()">Fetch </button>
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosAxios()">Axios </button>

      <div class="media alert alert-info" v-for="(usuario,index) in usuarios" :key="index">
          <div class="media-body ml-4">
              <p>Nombre: <b>{{ usuario.nombre }}</b></p>
              <p>Email: <i>{{ usuario.email }}</i></p>
              <p>Telefono: {{ usuario.telefono }}</p>

          </div>
      </div>

    </div>
  </section>

</template>

<script>
export default  {
    name: 'src-componentes-api-rest-ful',
    props: [],
    mounted () {
    //this.getUsuarios()
    },
    data () {
      return {
        url: 'https://62842ba33060bbd3473556b1.mockapi.io/usuarios',
        usuarios: []
      }
    },
    methods: {
        async getUsuariosAxios() {
        try {
          let { data: usuarios } = await this.axios(this.url)
          console.log('AXIOS GET usuarios', usuarios)
          this.usuarios = usuarios
        }
        catch(error) {
          console.error('Error en getUsuarios()', error.message)
        }
      },

      async getUsuariosFetch() {
        try {
          let response = await fetch(this.url)
          let respuesta = await response.json()
          this.usuarios = respuesta
        }
        catch(error) {
          console.error('Error Fetch', error)
        }
      },


    },
    computed: {

    },
}

</script>

<style>

.jumbotron {

    color: #222;
  }

  hr {
    background-color: #ddd;
  }

  pre {
    color: #333;
  }
</style>
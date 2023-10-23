const { createApp } = Vue

  createApp({
    data() {
      return {
        message: '',
        title: 'Questo è il titolo della pagina!',
        titleFlex: ['flex-center', 'title-padding'],
        titleBg: ''
      }
    },
    methods: {
        onClick: function () {
            this.message = ''
        }
    }
  }).mount('#app')
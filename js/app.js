const { createApp } = Vue

  createApp({
    data() {
      return {
        message: '',
        title: 'Questo è il titolo della pagina!',
        titleFlex: ['flex-center', 'title-padding'],
        titleBg: '',
        pageImg: './img/01.webp'
      }
    },
    methods: {
        onClick: function () {
            this.message = ''
        }
    }
  }).mount('#app')
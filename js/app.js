const { createApp } = Vue

  createApp({
    data() {
      return {
        message: '',
        title: 'Questo è il titolo della pagina!',
        titleFlex: ['flex-center', 'title-padding'],
        titleBg: '',
        pageImg: './img/01.webp',
        imgBorder: ''
      }
    },
    methods: {
        clearInput: function () {
            this.message = ''
        },
        addShadow: function () {
            this.imgBorder = 'img-shadow'
        },
        removeShadow: function () {
            this.imgBorder = ''
        }
    }
  }).mount('#app')
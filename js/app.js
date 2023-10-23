const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        title: 'Questo è il titolo della pagina!',
        titleFlex: ['flex-center', 'title-padding']
      }
    }
  }).mount('#app')
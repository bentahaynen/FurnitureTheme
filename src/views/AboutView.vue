<template>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <div class="text-center mb-4">
            <h1 class="display-4 fw-bold mb-4">Hakkımızda</h1>
            <p class="lead text-muted">
              Borcelle olarak, mobilya tasarımında inovasyon ve estetiği ön planda tutarak sizlere en kaliteli ürünleri sunmayı hedefliyoruz. Ekibimiz, her projeyi titizlikle ele alarak, kullanıcı deneyimini en üst seviyeye taşır.
            </p>
            <p>
              Misyonumuz, müşterilerimize yüksek kaliteli, sürdürülebilir ve şık mobilyalar sunmaktır. Yaratıcı tasarımlarımız ve kişisel hizmet anlayışımız ile sektörde fark yaratıyoruz.
            </p>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="video-container">
            <video class="video" autoplay muted loop>
              <source src="@/assets/furniture.mp4" type="video/mp4">
              Tarayıcınız video etiketi desteklemiyor.
            </video>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutView'
  }
  </script>
  
  <style scoped>
  .container {
    background-color: #ffffff;
    padding: 2rem 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .row {
    align-items: center;
  }
  
  .text-center {
    text-align: center;
  }
  
  h1 {
    color: #000; /* Siyah renk */
  }
  
  p {
    color: #000; /* Siyah renk */
  }
  
  .video-container {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    background-color: #000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .video {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  @media (max-width: 992px) {
    .row {
      text-align: center;
    }
  
    .video-container {
      margin-top: 1rem;
    }
  }
  </style>
  
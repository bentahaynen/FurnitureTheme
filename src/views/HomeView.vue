<template>
    <div>
      <!-- Slider Bölümü -->
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/banner2.jpg" class="d-block w-100" alt="Slider Image 1">
          </div>
          <div class="carousel-item">
            <img src="@/assets/banner1.jpg" class="d-block w-100" alt="Slider Image 2">
          </div>
          <div class="carousel-item">
            <img src="@/assets/banner3.jpg" class="d-block w-100" alt="Slider Image 3">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon custom-carousel-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Önceki</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon custom-carousel-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Sonraki</span>
        </button>
      </div>
      <br>
  
      <!-- Öne Çıkan Ürünler Bölümü -->
      <section class="featured-products py-5">
        <div class="container">
          <h2 class="text-center mb-4">Öne Çıkan Koltuk Takımları</h2>
          <br>
          <div class="row">
            <div class="col-md-4">
              <div class="card text-center shadow-sm">
                <img src="@/assets/mobilya1.jpg" class="card-img-top" alt="Koltuk Takımı 1">
                <div class="card-body">
                  <h5 class="card-title">Elegance Koltuk Takımı</h5>
                  <p class="card-text">Zarif tasarımı ve konforlu oturumuyla evinizin şıklığını artıran Elegance Koltuk Takımı, kaliteli kumaşı ve modern çizgileriyle dikkat çekiyor.</p>
                  <a href="/products/" class="btn btn-custom">Daha Fazla Bilgi</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center shadow-sm">
                <img src="@/assets/mobilya2.jpg" class="card-img-top" alt="Koltuk Takımı 2">
                <div class="card-body">
                  <h5 class="card-title">Comfort Plus Koltuk Takımı</h5>
                  <p class="card-text">Yumuşak dokusu ve ergonomik tasarımıyla Comfort Plus Koltuk Takımı, uzun süreli oturumlarda bile maksimum konfor sunar.</p>
                  <a href="/products/" class="btn btn-custom">Daha Fazla Bilgi</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center shadow-sm">
                <img src="@/assets/mobilya3.jpg" class="card-img-top" alt="Koltuk Takımı 3">
                <div class="card-body">
                  <h5 class="card-title">Classic Style Koltuk Takımı</h5>
                  <p class="card-text">Klasik tasarımı ve zarif detaylarıyla Classic Style Koltuk Takımı, şıklığı ve rahatlığı bir arada sunar. Her türlü dekorasyon stiliyle uyum sağlar.</p>
                  <a href="/products/" class="btn btn-custom">Daha Fazla Bilgi</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br>
  
      <!-- Özellikler Bölümü -->
      <section class="features bg-light py-5">
        <div class="container">
          <h2 class="text-center mb-4">Avantajlarımız</h2>
          <br>
          <div class="row text-center">
            <div class="col-md-4">
              <div class="feature-icon mb-3">
                <i class="bi bi-gear"></i> <!-- Bootstrap Icons kullanarak ikon ekleme -->
              </div>
              <h4>Yüksek Kalite</h4>
              <p>Ürünlerimiz en yüksek kalite standartlarına göre üretilmektedir.</p>
            </div>
            <div class="col-md-4">
              <div class="feature-icon mb-3">
                <i class="bi bi-truck"></i>
              </div>
              <h4>Ücretsiz Kargo</h4>
              <p>Belirli bir miktarın üzerinde alışverişlerde ücretsiz kargo fırsatı.</p>
            </div>
            <div class="col-md-4">
              <div class="feature-icon mb-3">
                <i class="bi bi-credit-card"></i>
              </div>
              <h4>Kolay Ödeme Seçenekleri</h4>
              <p>Farklı ödeme seçenekleriyle alışverişinizi kolaylaştırıyoruz.</p>
            </div>
          </div>
        </div>
      </section>
      <br>
  
      <!-- Müşteri Yorumları Bölümü -->
      <section class="customer-reviews py-5">
        <div class="container">
          <h2 class="text-center mb-4">Müşteri Yorumları</h2>
          <br>
          <div id="customerReviewsCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card text-center shadow-sm p-4">
                  <img src="@/assets/allame.jpg" class="rounded-circle mb-3" alt="Müşteri 1" style="width: 100px; height: 100px; object-fit: cover;">
                  <p class="font-weight-bold">Hamza Gül</p>
                  <p class="text-muted">"Elegance Koltuk Takımı gerçekten harika. Hem konforlu hem de şık. Evinizin havasını değiştiriyor. Kesinlikle tavsiye ederim!"</p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card text-center shadow-sm p-4">
                  <img src="@/assets/mete.jpg" class="rounded-circle mb-3" alt="Müşteri 2" style="width: 100px; height: 100px; object-fit: cover;">
                  <p class="font-weight-bold">Mete Erpek</p>
                  <p class="text-muted">"Comfort Plus Koltuk Takımı ile tanıştım ve gerçekten çok memnun kaldım. Yumuşak dokusu ve konforu inanılmaz. Herkesin evinde olması gereken bir ürün."</p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card text-center shadow-sm p-4">
                  <img src="@/assets/sagopa.jpg" class="rounded-circle mb-3" alt="Müşteri 3" style="width: 100px; height: 100px; object-fit: cover;">
                  <p class="font-weight-bold">Yunus Özyavuz</p>
                  <p class="text-muted">"Classic Style Koltuk Takımı, evimin klasik dekorasyonuna mükemmel uyum sağladı. Hem konforlu hem de estetik açıdan tatmin edici."</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#customerReviewsCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon custom-carousel-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Önceki</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#customerReviewsCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon custom-carousel-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Sonraki</span>
            </button>
          </div>
        </div>
      </section>
      <br>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView'
  }
  </script>
  
  <style scoped>
  /* Slider Styles */
  #carouselExample {
    width: 98%; /* Slider'ı sağdan ve soldan 20px pay bırakacak şekilde küçült */
    height: 380px; /* Slider yüksekliğini artır */
    margin: 1px auto; /* Slider'ın ortalanmasını sağlar */
    overflow: hidden; /* Taşmayı engelle */
    position: relative; /* Pozisyonlama için relative kullan */
  }
  
  .carousel-inner img {
    width: 100%;
    height: 330px; /* Resimlerin yüksekliğini belirle */
    object-fit: cover; /* Resimlerin kırpılmasını önler */
    border-radius: 2px; /* Köşeleri yuvarla */
  }
  
  /* Custom Carousel Controls */
  .custom-carousel-icon {
    background-color: black; /* Siyah arka plan rengi */
    border-radius: 50%; /* Yuvarlak buton */
    width: 50px; /* Genişlik */
    height: 50px; /* Yükseklik */
    display: flex; /* Ortalamak için flex kullan */
    align-items: center; /* Dikeyde ortalama */
    justify-content: center; /* Yatayda ortalama */
  }
  
  .carousel-control-prev-icon::after, .carousel-control-next-icon::after {
    content: '';
    font-size: 24px; /* Ok boyutunu artır */
    color: black; /* Ok rengi */
    display: inline-block;
    font-weight: bold; /* Kalın yazı */
  }
  
  .carousel-control-prev-icon::after {
    content: '<'; /* Sol ok */
  }
  
  .carousel-control-next-icon::after {
    content: '>'; /* Sağ ok */
  }
  
  /* Öne Çıkan Ürünler Styles */  
  .featured-products .card {
    transition: transform 0.3s ease-in-out;
    border-radius: 10px;
  }
  
  .featured-products .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Daha koyu gölge efekti */
  }
  
  .featured-products .card-title {
    font-weight: bold;
  }
  
  .featured-products .btn-custom {
    background-color: #000;
    color: #fff;
    border: none;
  }
  
  .featured-products .btn-custom:hover {
    background-color: #333;
  }
  
  /* Özellikler Styles */
  .features .feature-icon {
    font-size: 40px;
    color: #000;
  }
  
  /* Müşteri Yorumları Styles */
  .customer-reviews .card {
    transition: transform 0.3s ease-in-out;
    border-radius: 10px;
  }
  
  .customer-reviews .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Daha koyu gölge efekti */
  }
  
  .customer-reviews img {
    margin: 0 auto;
    border: 3px solid #000; /* Resimlerin etrafına siyah çerçeve */
  }
  
  /* General Styles */
  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #000;
  }
  
  section {
    margin-bottom: 50px;
  }
  </style>
  
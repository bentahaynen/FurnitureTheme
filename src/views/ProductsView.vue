<template>
  <div class="container py-5">
    <div class="row">
      <!-- Ürün Görseli -->
      <div class="col-md-6">
        <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(product, index) in products" :key="product.title" class="carousel-item" :class="{ active: index === 0 }">
              <img :src="product.image" class="d-block w-100" :alt="'Ürün Görseli ' + (index + 1)">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Önceki</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Sonraki</span>
          </button>
        </div>
      </div>

      <!-- Ürün Detayları -->
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h2 class="text-center">{{ currentProduct.title }}</h2>
        <p class="text-center text-muted">Ürün Kodu: {{ currentProduct.code }}</p>
        <p class="lead text-center">₺{{ currentProduct.price }}</p>
        <p class="text-center">{{ currentProduct.description }}</p>
        
        <h5 class="text-center mt-4">Özellikler</h5>
        <ul class="list-unstyled text-center">
          <li v-for="(feature, index) in currentProduct.features" :key="index" class="feature-item">{{ feature }}</li>
        </ul>

        <!-- Satın Al Butonu -->
        <div class="text-center mt-4">
          <button class="btn btn-dark btn-lg">Satın Al</button>
        </div>
      </div>
    </div>

    <!-- Ürün İncelemeleri Bölümü -->
    <div class="mt-5">
      <h3 class="text-center mb-4">Ürün İncelemeleri</h3>
      <div class="review-section text-center">
        <div v-for="(review, index) in currentProduct.reviews" :key="index" class="review-item">
          <h5>{{ review.name }}</h5>
          <p class="review-text">"{{ review.text }}"</p>
          <p class="review-rating">Puan: {{ review.rating }}</p>
        </div>
      </div>
    </div>

    <!-- Sıkça Sorulan Sorular (SSS) -->
    <div class="mt-5 mb-5">
      <h3 class="text-center mb-4">Sıkça Sorulan Sorular</h3>
      <div class="faq-section">
        <div class="faq-item">
          <h5>Ürünü nasıl temizlerim?</h5>
          <p>Bu ürünü nemli bir bezle temizleyebilirsiniz. Kimyasal temizlik ürünlerinden kaçının.</p>
          <hr>
        </div>
        <div class="faq-item">
          <h5>Montaj için hangi araçlar gerekli?</h5>
          <p>Montaj için düz tornavida ve alyan anahtarı gereklidir. Montaj talimatları kutu içinde yer almaktadır.</p>
          <hr>
        </div>
        <div class="faq-item">
          <h5>Ürün garantisi var mı?</h5>
          <p>Evet, ürünümüz 2 yıl garanti kapsamındadır. Garanti süresi içinde herhangi bir sorun yaşamanız durumunda bize ulaşabilirsiniz.</p>
          <hr>
        </div>
        <div class="faq-item">
          <h5>Ürünün teslim süresi nedir?</h5>
          <p>Ürün, siparişinizden sonra 7 iş günü içinde kargoya teslim edilmektedir. Kargo süresi bölgeye göre değişiklik gösterebilir.</p>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mobilya1 from '@/assets/mobilya1.jpg';
import mobilya2 from '@/assets/mobilya2.jpg';
import mobilya3 from '@/assets/mobilya3.jpg';

export default {
  name: 'ProductsView',
  data() {
    return {
      products: [
        {
          image: mobilya1,
          title: 'Elegance Koltuk Takımı',
          code: '12345',
          price: '4999,00',
          description: 'Zarif tasarımı ve konforlu oturumuyla evinizin şıklığını artıran Elegance Koltuk Takımı, kaliteli kumaşı ve modern çizgileriyle dikkat çekiyor.',
          features: [
            'Yüksek kaliteli kumaş',
            'Modern ve zarif tasarım',
            'Konforlu oturum',
            'Dayanıklı yapı'
          ],
          reviews: [
            { name: 'Ali K.', text: 'Bu koltuk takımı harika! Hem konforlu hem de çok şık. Kesinlikle tavsiye ederim.', rating: '★★★★☆' },
            { name: 'Ayşe Y.', text: 'Kalitesi mükemmel, ancak montajı biraz zorladı. Yine de çok beğendim.', rating: '★★★☆☆' }
          ],
          link: '/products/1'
        },
        {
          image: mobilya2,
          title: 'Comfort Plus Koltuk Takımı',
          code: '12346',
          price: '5499,00',
          description: 'Yumuşak dokusu ve ergonomik tasarımıyla Comfort Plus Koltuk Takımı, uzun süreli oturumlarda bile maksimum konfor sunar.',
          features: [
            'Yumuşak doku',
            'Ergonomik tasarım',
            'Maksimum konfor',
            'Dayanıklı yapı'
          ],
          reviews: [
            { name: 'Mehmet B.', text: 'Harika bir ürün, çok memnun kaldım. Ürün beklediğimden daha kaliteli çıktı.', rating: '★★★★★' },
            { name: 'Elif A.', text: 'Tasarımı çok şık, fakat bazı parçaları montajı biraz zorladı. Genel olarak iyi.', rating: '★★★☆☆' }
          ],
          link: '/products/2'
        },
        {
          image: mobilya3,
          title: 'Classic Style Koltuk Takımı',
          code: '12347',
          price: '5999,00',
          description: 'Klasik tasarımı ve zarif detaylarıyla Classic Style Koltuk Takımı, şıklığı ve rahatlığı bir arada sunar. Her türlü dekorasyon stiliyle uyum sağlar.',
          features: [
            'Klasik tasarım',
            'Zarif detaylar',
            'Şıklık ve rahatlık',
            'Uyumlu dekorasyon'
          ],
          reviews: [
            { name: 'Ahmet Y.', text: 'Mükemmel bir tasarım ve konfor. Bu fiyata böyle kaliteli bir ürün bulmak zor.', rating: '★★★★☆' },
            { name: 'Fatma G.', text: 'Koltuk çok güzel ama biraz sert. Yine de beğendim.', rating: '★★★☆☆' }
          ],
          link: '/products/3'
        },
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentProduct() {
      return this.products[this.currentIndex];
    }
  },
  methods: {
    updateCurrentProduct(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    const carousel = document.getElementById('productCarousel');
    carousel.addEventListener('slid.bs.carousel', (event) => {
      this.updateCurrentProduct(event.to);
    });
  }
}
</script>

<style scoped>
.carousel-inner img {
  height: 500px; /* Resimlerin yüksekliğini belirle */
  object-fit: cover; /* Resimlerin kırpılmasını önler */
  border-radius: 10px; /* Köşeleri yuvarla */
}

.card {
  transition: transform 0.3s ease-in-out;
  border-radius: 10px;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.review-section {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.review-item {
  margin-bottom: 20px;
}

.review-text {
  font-style: italic;
}

.faq-section {
  margin-bottom: 5rem; /* Alt margini arttırarak footer'dan uzaklaştır */
}

.faq-item {
  text-align: center;
  margin-bottom: 20px;
}

.faq-item hr {
  border: 0;
  border-top: 1px solid #ddd;
  margin: 10px 0;
}

.faq-item h5 {
  font-size: 18px;
}

.faq-item p {
  font-size: 16px;
}

@media (max-width: 768px) {
  .carousel-inner img {
    height: auto;
  }
}
</style>

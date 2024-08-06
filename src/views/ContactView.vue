<template>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 mb-4">
          <h1 class="display-4 fw-bold mb-4 text-center">İletişim</h1>
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Adınız :</label>
              <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Adınızı girin.." required>
            </div>
            <div class="mb-3">
              <label for="surname" class="form-label">Soyadınız :</label>
              <input type="text" class="form-control" id="surname" v-model="form.surname" placeholder="Soyadınızı girin.." required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">E-Mail Adresiniz :</label>
              <input type="email" class="form-control" id="email" v-model="form.email" placeholder="E-posta adresinizi girin.." required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Mesajınız :</label>
              <textarea class="form-control" id="message" rows="3" v-model="form.message" placeholder="Mesajınızı buraya yazın.." required></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Gönder</button>
            </div>
          </form>
        </div>
        <div class="col-lg-6">
          <div class="contact-info text-center mb-4">
            <h3 class="mb-3">Bize Ulaşın</h3>
            <p><i class="bi bi-geo-alt me-2"></i>Adres: Örnek Mah. No:1, İstanbul</p>
            <p><i class="bi bi-telephone me-2"></i>Telefon: (012) 345-6789</p>
            <p><i class="bi bi-envelope me-2"></i>E-posta: info@example.com</p>
          </div>
          <div class="map-container">
            <!-- Google Maps Embed with a specific address -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.508291506748!2d28.968822253471893!3d41.01455181364828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c8f657f09d0b3b%3A0x6c9d7c4919f95a1!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1633384718708!5m2!1sen!2sus"
              style="border:0; border-radius: 10px; width: 100%; height: 300px;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
    data() {
      return {
        form: {
          name: '',
          surname: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        // Form gönderme işlemi burada yapılır
        alert('Mesajınız gönderildi!');
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    background-color: #ffffff;
    padding: 2rem 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1, h3 {
    color: #000;
  }
  
  .contact-info p {
    color: #333;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #004085;
  }
  
  .map-container {
    margin-top: 15px;
  }

  .form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  @media (min-width: 992px) {
    .row {
      margin-top: -1.5rem; /* Daha yukarıdan başlaması için margin ayarı */
    }
  }
  </style>

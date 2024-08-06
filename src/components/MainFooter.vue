<template>
  <footer class="footer">
    <div class="video-background">
      <video autoplay muted loop class="video-background__content">
        <source src="@/assets/banner.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="overlay">
      <div class="container text-center">
        <div class="d-flex justify-content-center align-items-center mb-2">
          <div class="line"></div>
          <div class="social-media-icons mx-3">
            <a href="#" class="social-icon" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="social-icon" aria-label="Twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="social-icon" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="social-icon" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          <div class="line"></div>
        </div>
        <p class="mb-0">&copy; 2024 Company, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style scoped>
.footer {
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 1rem;
  margin-top: auto; /* This ensures the footer sticks to the bottom */
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.video-background__content {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: relative;
}

.social-media-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-icon {
  color: #fff;
  font-size: 18px;
  margin: 0 8px;
  text-decoration: none;
}

.social-icon:hover {
  color: #ddd;
}

.line {
  flex: 1;
  border-top: 1px solid #444;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

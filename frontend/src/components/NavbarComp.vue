import HelloWorld from '@/components/HelloWorld.vue';
<template>
    <div>
        <nav>
              <h1><router-link to="/">BMX WORLD</router-link></h1> 
                <ul>
                  <li>
                    <router-link to="/products">Products</router-link>
                  </li>
                  <li>
                    <router-link to="/products">About Us</router-link>
                  </li>
                  <li>
                    <router-link to="/products">Contact Us</router-link>
                  </li>
                </ul>
                <div class="icons">
                  <i class="bi bi-person-circle"></i>
                  <i class="bi bi-basket"></i>
                </div>
          </nav>
          <video class="home_video" muted autoplay>
            <source src="https://player.vimeo.com/progressive_redirect/playback/684098096/rendition/540p?loc=external&signature=d7a3b70d4dabefd7e151554e9d2b1556f8d4be6fdd4c04abf24dcf27c6bb6a70" type="video/mp4">
          </video>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  nav, ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    list-style: none;
  }

  a{
    text-decoration: none;
    padding-inline: 1rem;
  }

  .icons > i{
    padding-inline: 1rem;
  }

  .home_video{
    width: 100%;
  }
</style>
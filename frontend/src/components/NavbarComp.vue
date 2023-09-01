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
                  <li>
                    <router-link to="/signup">Signin</router-link>
                  </li>
                  <li>
                    <router-link to="/admin">Admin(DELETE LATER)</router-link>
                  </li>
                </ul>
                <div class="icons">
                  <router-link to="/login"><i class="bi bi-person-circle"></i></router-link>
                  <i class="bi bi-basket"></i>
                </div>
          </nav>
          <video class="home-video" data-object-fit="cover" muted autoplay loop>
            <source src="https://player.vimeo.com/progressive_redirect/playback/684098096/rendition/540p?loc=external&signature=d7a3b70d4dabefd7e151554e9d2b1556f8d4be6fdd4c04abf24dcf27c6bb6a70" type="video/mp4">
          </video>
          <!-- <img src="https://i.postimg.cc/hPbRMM0z/SUNDAY-2018-Primer-White-Drool-9857-Web.jpg" class="home-img" alt=""> -->
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

  nav{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 99999;
  }

  a{
    text-decoration: none;
    padding-inline: 1rem;
  }

  .icons > i{
    padding-inline: 1rem;
  }

  .home-video{
    width: 100%;
  }

  .home-img{
    aspect-ratio: 16 / 9;
    object-fit: cover;
    width: 100%;
  }
</style>
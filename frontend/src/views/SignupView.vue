<!-- <template>
    <div>
        <div class="container">
            <h1 class="heading">Signup</h1>
            <form>
                <div class="form">
                    <div class="form-group">
                        <div>
                            <label for="name">First Name</label>
                            <input type="text" name="name" id="" placeholder="John">
                        </div>
                        <div>
                            <label for="surname">Last Name</label>
                            <input type="text" name="surname" id="" placeholder="Doe">
                        </div>
                        <div>
                            <label for="gender">Gender</label>
                            <input type="text" name="gender" id="">
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="dob">Date of Birth</label>
                            <input type="text" name="dob" id="" placeholder="yyyy-mm-dd">
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input type="email" name="email" id="" placeholder="john@gmail.com">
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" name="password" id="">
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <p>Have an account? <a href="#">Login</a></p> 
                    <button class="btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
    background-color: #232327b6;
    padding: 3rem;
    width: 80%;
    height: 50%;
    border-radius: 10px;
    inset: 0;
    margin: auto;
    position: absolute;
    top: 10rem;
}

.heading{
    margin-bottom: 1rem;
    text-align: center;
}

h1, label, p, a{
    color: #fff;
}

.form-group{
    display: flex;
    justify-content: center;
    gap: 2rem;
}

input[type='text']{
    width: 100%;
    margin-block: 1rem;
    padding: .5rem;
}

input[type='email']{
    width: 100%;
    margin-block: 1rem;
    padding: .5rem;
}

input[type='password']{
    width: 100%;
    margin-block: 1rem;
    padding: .5rem;
}

.btn{
    border: none;
    padding: .5rem;
    border-radius: 10px;
    background-color: var(--altColor);
    color: #000;
    margin-top: 1rem;
}

.footer{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style> -->

<template>
    <div>
        <div class="container">
            <div class="right-side">
                <form>
                    <div class="form">
                        <div class="form-group">
                            <h3 class="heading">SIGNUP</h3>
                            <div>
                                <label for="name">First Name</label>
                                <input type="text" name="name" id="" placeholder="John">
                            </div>
                            <div>
                                <label for="surname">Last Name</label>
                                <input type="text" name="surname" id="" placeholder="Doe">
                            </div>
                        </div>
                        <div class="form-group">
                            <div>
                                <label for="gender">Gender</label>
                                <input type="text" name="gender" id="">
                            </div>
                            <div>
                                <label for="dob">Date of Birth</label>
                                <input type="text" name="dob" id="" placeholder="yyyy-mm-dd">
                            </div>
                        </div>
                        <div class="form-group">
                            <div>
                                <label for="email">Email</label>
                                <input type="email" name="email" id="" placeholder="john@gmail.com">
                            </div>
                            <div>
                                <label for="password">Password</label>
                                <input type="password" name="password" id="">
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Have an account? <a href="#">Login</a></p> 
                        <button class="btn">Submit</button>
                    </div>
                </form> 
            </div>
            <div class="left-side">
                <video width="100%" class="home-video" data-object-fit="cover" muted autoplay loop>
                    <source src="https://player.vimeo.com/progressive_redirect/playback/684098096/rendition/540p?loc=external&signature=d7a3b70d4dabefd7e151554e9d2b1556f8d4be6fdd4c04abf24dcf27c6bb6a70">
                  </video>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 1.5rem;
    background-color: var(--bgColor);
}

.home-video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.right-side{
    padding: 2rem;
}
.heading{
    margin-bottom: 1rem;
    text-align: center;
    color: #fff;
}

h1, label, p, a{
    color: #fff;
}


input[type='text']{
    width: 100%;
    margin-block: 1rem;
    padding: .5rem;
}

input[type='email']{
    width: 100%;
    margin-block: 1rem;
    padding: .5rem;
}

input[type='password']{
    width: 100%;
    margin-block: 1rem;
    padding: .5rem;
}

.btn{
    border: none;
    padding: .5rem;
    border-radius: 10px;
    background-color: var(--altColor);
    color: #000;
    margin-top: .5rem;
}
</style>
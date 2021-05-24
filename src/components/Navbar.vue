<template>
  <nav>
      <div>
            <router-link :to="{ name: 'Home' }"><img src="../assets/logo.png" alt="Brivo"></router-link>
      </div>
      <div>
          <ul>
              <router-link :to="{ name: 'Signup' }"><li>Sign up</li></router-link>
              <router-link :to="{ name: 'Signin' }"><li>Sign in</li></router-link>
          </ul>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
    nav {
        display: flex;
        padding: 0 50px;
        align-items: center;
        /* background: #ddd; */
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
    }
    img {
        max-width: 140px;
    }
    ul {
        list-style: none;
        padding: 0 20px;
    }
    li {
        display: inline-block;
        padding: 8px 20px;
        background: #69995d;
        color: white;
        margin-left: 10px;
        border-radius: 20px;
        font-size: 20px;
        transition: .2s;
    }
    li:hover {
        transition: .2s;
        background: var(--primary);
        cursor: pointer;
    }
</style>
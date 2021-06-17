<template>
  <nav>
      <div>
            <router-link :to="{ name: 'Home' }"><img src="../assets/logo.png" alt="Brivo"></router-link>
      </div>
      <div class="navbar-buttons">
          <ul>
              <router-link :to="{ name: 'Signup' }"><li>{{ $t('register') }}</li></router-link>
              <router-link :to="{ name: 'Signin' }"><li>{{ $t('login') }}</li></router-link>
          </ul>
          <select v-model="$i18n.locale" name="lang">
            <option value="pl">
                PL
            </option>
            <option value="en">
                EN
            </option>
          </select>
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
        justify-content: space-between;
        box-shadow: 3px 5px 7px rgba(40, 40, 40, 0.1);
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
    .navbar-buttons select{
        width: 60px;
    }
    .navbar-buttons ul, .navbar-buttons select{
        float: left;
        
    }
</style>

<i18n>
{
  "en": {
    "login": "Sign in",
    "register": "Sign up"
  },
  "pl": {
    "login": "Zaloguj",
    "register": "Rejestracja"
  }
}
</i18n>
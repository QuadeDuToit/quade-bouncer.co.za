<template>
  <div class="container">
    <div class="row no-gutters">
      <div class="col-12 text-center mt-40">
        <img src="/assets/images/logo.svg" />
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col-10 offset-1">
        <ul
          class="w-100 list flex flex-inline flex-stretch nav-list mt-50 mb-40"
        >
          <li>
            <a href="#/"
              ><span :class="{ active: $route.name == 'home' }">HOME</span></a
            >
          </li>
          <li>
            <a href="#/store"
              ><span :class="{ active: $route.name == 'store' }">STORE</span></a
            >
          </li>
          <li>
            <router-link :to="{ name: 'iphone' }"
              ><span :class="{ active: $route.name == 'iphone' }"
                >IPHONE</span
              ></router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'ipad' }"
              ><span :class="{ active: $route.name == 'ipad' }"
                >IPAD</span
              ></router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'macbook' }"
              ><span :class="{ active: $route.name == 'macbook' }"
                >MACBOOK</span
              ></router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'accesories' }"
              ><span :class="{ active: $route.name == 'accesories' }"
                >ACCESORIES</span
              ></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "../../sass/variables.scss";
  .company-name {
    text-transform: uppercase;
  }
  .nav-list {
    > li {
      text-align: center;
      span {
        transition: color 300ms;
        &:hover {
          color: $clr-primary-dark-x;
        }
        &.active {
          color: $font-clr-hightlight;
        }
      }
    }
  }
</style>

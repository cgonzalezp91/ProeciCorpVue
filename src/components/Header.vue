<!-- <template lang="html">-->
<!-- <div id="hproeci"> -->

<template>
<div class="hproeci">
      <nav class="navbar is-info">
        <div class="container">
          <div class="navbar-brand is-large">
            <a class="navbar-item logo" href="#">
                <img src="../assets/PROECI.png" height="100px">
            </a>
             <transition name="fade">
            <button @click="makeBurger" class="button navbar-burger" data-target="navMenu" v-bind:class="{ 'is-active': activator }">
                <span></span>
                <span></span>
                <span></span>
          </button>
             </transition>
          </div>
          <div class="navbar-menu blue" id="navMenu" :class="{ 'is-active': activator }">
            <div class="navbar-start">
              <div class="navbar-item" :class="{'is-activenav ': activeCorp}">
                <a :class="activeCorp? 'has-text-white' : 'has-text-grey-lighter'"  @click="changeScreen"> Corporativo </a>
              </div>
              <div class="navbar-item " :class="{'is-activenav ': activeCli}">
                <a :class="activeCli? 'has-text-white' : 'has-text-grey-lighter'"  @click="changeScreenCli"> Clientes </a>
              </div>
              <div class="navbar-item" :class="{'is-activenav ': activeProv}">
                <a :class="activeProv? 'has-text-white' : 'has-text-grey-lighter'"  @click="changeScreenProv">Proveedores</a>
              </div>        
          </div>
        </div>
         
          <div class="navbar-menu blue" id="navMenu" :class="{ 'is-active': activator }">
              <div class="navbar-end">
                <div class="navbar-item">
                  <p class="control">
                    <a class="button is-primary grow" @click='btnacceso'>
                      <span class="icon child">
                        <i class="fas fa-user-tie"></i>
                      </span>
                      <span>Acceso</span>
                    </a>
                  </p>
                </div>
            </div>
          </div>
        
      </div>      
    </nav>
    <transition name="fade">
    <div v-show="acceso">
      <div>
        <div class="section flexcont">
          <div class="field" v-if='cliente'>
            <p class="control has-icons-left">
              <input class="input is-primary" type="text" :placeholder="placeHolderValue">
              <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
              </span>
            </p>
        </div>
         <div class="field">
            <p class="control has-icons-left">
              <input class="input is-primary" type="text" placeholder="Usuario">
              <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
              </span>
            </p>
        </div>
        <div class="field">           
            <p class="control has-icons-left">
              <input class="input is-info" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
      </div>
      </div>
   </div>
   </transition>
</div>
</template>

    <!-- HTML HERO -->
    <!-- <section class="hero is-info">
        <div class="hero-body is-paddingless is-clearfix">
            <div class="container grid">
                 <img src='../assets/PROECI1.png' class="image is-96x96 logo"></img>
            <h1 class="title h1t">               
                Grupo Proeci
            </h1>
            <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </div>
        </div>
    </section>
    <section v-show='acceso'>
            <h1> Texto </h1>
    </section> -->
<!-- </div> -->
<!--</template>-->

<script>
// import { EventBus } from '../event-bus.js';
import fetchcall from "../modules/fetchcall"

export default {
  name: "hproeci",
  data() {
    return {
      msg: "",
      activator: false,
      acceso: false,
      cliente: false,
      placeHolderValue: '',
      activeCli: false,
      activeCorp: true,
      activeProv: false,
    };
  },
  methods: {
    makeBurger() {
      this.activator = !this.activator;
      //let aele = document.getElementsByTagName('a')
      // let parent = document.querySelector('.navbar-start')
      // let aele = parent.querySelectorAll('a')

      // for (var i = 0; i < aele.length; i++) {
      //   if (aele[i].classList.contains('has-text-black')){ aele[i].className += ' has-text-white' }
      //   else aele[i].className += ' has-text-black';
      // }
      return this.activator;
    },
    btnacceso() {
      if (this.acceso) this.acceso = false
      else this.acceso = true
    },
    changeScreen() {
      // EventBus.$emit('id-selected', 1)
      this.$bus.$emit('id-selected', 1)
      this.cliente = false
      this.activeCli = false
      this.activeCorp = true
      this.activeProv = false   
    },
    changeScreenCli() {
      // EventBus.$emit('id-selected', 2)
      this.$bus.$emit('id-selected', 2)
      this.cliente = true
      this.activeCli = true
      this.activeCorp = false
      this.activeProv = false
      this.placeHolderValue = 'Cliente'
    },
        changeScreenProv() {
      // EventBus.$emit('id-selected', 2)
      this.$bus.$emit('id-selected', 2)
      this.cliente = true
      this.placeHolderValue = 'Proveedor'
      this.activeCli = false
      this.activeCorp = false
      this.activeProv = true
    }
  }
};
</script>



<style lang="scss" scoped>
div {
  border: 0px solid black;
}
.blue {
  background-color: #209cee;
}
.flexcont{
  // transition: all .5s ease;
  // transition: all .3s ease;
  // height: 100px;
  //   padding: 10px;
  //   background-color: #eee;
  //   overflow: hidden;
  display: flex;
  // position: absolute;
  // margin-top: 30px;
  // margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(210, 9%, 55%);
  // overflow: hidden;
  
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
  height: 180px;
  opacity: 0.5;
  // animation: bounce-in 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  height: 0px;
  opacity: 0;
}
.logo:hover {
  animation: pulse 0.9s;
  animation-iteration-count: infinite;
}
.grow:hover .icon{
  transition: 0.5s;
  transform: scale(1.3)
  // animation-delay: .5s;
}
.is-activenav {
  // border: 3px #23d160 solid;
  border-bottom: white solid 7px
}
</style>
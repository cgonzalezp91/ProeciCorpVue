<!-- <template lang="html">-->
<!-- <div id="hproeci"> -->

<template>
<div class="hproeci">
      <nav class="navbar is-info">
        <div class="container">
          <div class="navbar-brand is-large">
            <a class="navbar-item " href="#">
                <img class="logo" src="../assets/PROECI.png" height="100px">
            </a>
             <!-- <transition name="fade"> -->
            <button @click="makeBurger" class="button navbar-burger" data-target="navMenu" v-bind:class="{ 'is-active': activator }">
                <span></span>
                <span></span>
                <span></span>
          </button>
             <!-- </transition> -->
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
                     <transition name="bounce">
                    <a class="button is-danger grow" @click='logout' v-show="!logininputs">
                      <span class="icon child">
                        <i class="fas fa-user-alt-slash"></i>
                      </span>
                      <span>Cerrar Sesion</span>
                    </a>
                     </transition>
                  </p>
                </div>
            </div>
          </div>
        
      </div>      
    </nav>
    <transition name="fade">
    <div v-show="acceso">
      <div>
        <!-- <transition name="goright"> v-if="logininputs" v-if='cliente'-->
         <div class="section flexcont"  id="loginsection">
           <transition name="roll" mode="out-in">
            <div class="field" key="3"  v-show="(logininputs1 && cliente)">
              <p class="control has-icons-left">
                <input class="input is-primary" type="text" :placeholder="placeHolderValue">
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
           </transition>
          <transition name="roll" mode="out-in">
            <div class="field" key="1" v-show="logininputs1">
                <p class="control has-icons-left" >
                  <input class="input is-primary" id="txtuser" type="text" placeholder="Usuario">
                  <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                  </span>
                </p>
            </div>
          </transition>
          <transition name="roll" mode="out-in">
          <div class="field" key="5" v-show="logininputs1">           
              <p class="control has-icons-left">
                <input v-on:keyup.enter="login" class="input is-info" id="txtpass" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
          </transition>
            <transition name="rollup" mode="out-in">
            <div v-show="!logininputs">
              <figure class="image is-96x96" @click="dash">
                <img src="../assets/CAB1.png">
              </figure>
            </div>
            </transition>
            <transition name="rollout">
            <div v-show="!logininputs">
              <figure class="image is-96x96" @click="aduanet">
                <img src="../assets/aduanet1.png">
              </figure>
            </div>
            </transition>
            <transition name="rollout">
            <div v-show="!logininputs">
              <figure class="image is-96x96" @click="slamnet">
                <img src="../assets/slamnet.png">
              </figure>
            </div>
            </transition>
            <transition name="rollout">
            <div v-show="!logininputs">
              <figure class="image is-96x96" @click="slamcove">
                <img src="../assets/slamcove.png">
              </figure>
            </div>
            </transition>
            <transition name="rollout">
            <div v-show="!logininputs">
              <figure class="image is-96x96" @click="slamsed">
                <img src="../assets/slamsed.png">
              </figure>
            </div>
            </transition>
            <transition name="rollright">
            <div v-show="!logininputs">
              <figure class="image is-96x96" @click="slampatio">
                <img src="../assets/patio.png">
              </figure>
            </div>
            </transition>
         </div>
        <!-- </transition> -->
       
        <!-- <div class="section flexcontlogin" v-if="!logininputs">
           <transition name="rollleft">
            <div>
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png">
              </figure>
            </div>
            </transition>
            <div>
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png">
              </figure>
            </div>
            <div>
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png">
              </figure>
            </div>
            <div>
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png">
              </figure>
            </div>            
        </div>         -->
       
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
import fetchcall from "../modules/fetch.js";
import createCookie,{ readCookie } from "../modules/createCookie"

export default {
  name: "hproeci",
  data() {
    return {
      msg: "",
      activator: false,
      acceso: false,
      cliente: false,
      placeHolderValue: "",
      activeCli: false,
      activeCorp: true,
      activeProv: false,
      logininputs: true,
      logininputs1: true,
    };
  },
  methods: {
    makeBurger() {
      this.activator = !this.activator;
      if (this.activator) this.$bus.$emit("id-login", 2);
      else this.$bus.$emit("id-login", 1);
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
      this.acceso = !this.acceso;
      if (this.acceso) this.$bus.$emit("id-login", 2);
      else this.$bus.$emit("id-login", 1);
    },
    changeScreen() {
      // EventBus.$emit('id-selected', 1)
      this.$bus.$emit("id-selected", 1);
      this.cliente = false;
      this.activeCli = false;
      this.activeCorp = true;
      this.activeProv = false;
    },
    changeScreenCli() {
      // EventBus.$emit('id-selected', 2)
      this.$bus.$emit("id-selected", 2);
      this.cliente = true;
      this.activeCli = true;
      this.activeCorp = false;
      this.activeProv = false;
      this.placeHolderValue = "Cliente";
    },
    changeScreenProv() {
      // EventBus.$emit('id-selected', 2)
      this.$bus.$emit("id-selected", 2);
      this.cliente = true;
      this.placeHolderValue = "Proveedor";
      this.activeCli = false;
      this.activeCorp = false;
      this.activeProv = true;
    },
    login: async function(event) {
      const self = this;
      let loginsection = document.getElementById('loginsection')
      // self.logininputs1 = !self.logininputs1;
      //Se elimina url del web service
          let txtuser = document.getElementById('txtuser')
          let txtpass = document.getElementById('txtpass')
          var data = {
              uid: txtuser.value,
              pwd: txtpass.value,
              rem: false,
              ip: "",
              cteid: ""
          }
          const response = await fetchcall(url, data)
          if (response) {
              const jdata = JSON.parse(response)
              self.logininputs1 = !self.logininputs1;
              // self.logininputs = false
              // this.nombre = jdata.uname
              createCookie('uname',jdata.uname,7)
              createCookie('ciaid',jdata.ciaid,7)
              createCookie('uid',jdata.uid,7)
              createCookie('ulevel',jdata.ulevel,7)
              createCookie('uprofile',jdata.uprofile,7)
              createCookie('sPref',jdata.sPref,7)
              console.log(jdata)
              setTimeout(() => {
                if (jdata){
                  loginsection.style.flexDirection = "row"
                  loginsection.style.justifyContent = "space-evenly"
                  self.logininputs = !self.logininputs;
                  
                }
              }, 1000);
          }
    },
    logout () {
      let loginsection = document.getElementById('loginsection')
      this.logininputs = !this.logininputs
      setTimeout(() => {               
        loginsection.style.flexDirection = "column"
        loginsection.style.justifyContent = "center"
        this.logininputs1 = !this.logininputs1
      }, 1000);            
    },
    dash () {
      let ciaidcookie = readCookie("ciaid")          
      // abrirEnPestana(getUrl(ciaidcookie))
    },
    aduanet () {
      let url = 'https://proeci-tf.aduanetm3.net/loginI.php'
      abrirEnPestana(url)
    },
    slamnet () {
      let url = 'http://slamnet.grupoproeci.com.mx/Default.aspx'
      abrirEnPestana(url)
    },
    slamcove () {
      let url = 'http://slamcove.grupoproeci.com.mx/'
      abrirEnPestana(url)
    },
    slamsed () {
      let url = 'http://slamsed.grupoproeci.com.mx/'
      abrirEnPestana(url)
    },
    slampatio () {
      let url = 'http://slampatio.grupoproeci.com.mx/Login.aspx'
      abrirEnPestana(url)
    }
  }
};

function abrirEnPestana(url) {
		var a = document.createElement("a");
		a.target = "_blank";
		a.href = url;
		a.click();
  }
//se elimina funcion con urls
</script>



<style lang="scss" scoped>
div {
  border: 0px solid black;
}
.blue {
  background-color: #209cee;
}
img {
  cursor: pointer;
}
.flexcont {
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(210, 9%, 55%);
}
.flexcontlogin {
  display: flex;
  // position: absolute;
  // margin-top: 30px;
  // margin: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: hsl(210, 9%, 55%);
  // overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
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
.grow:hover .icon {
  transition: 0.5s;
  transform: scale(1.3);
  // animation-delay: .5s;
}
.is-activenav {
  // border: 3px #23d160 solid;
  border-bottom: white solid 7px;
}

.roll-enter-active {
  animation: roll 0.5s;
}
.roll-leave-active {
  animation: roll 0.5s reverse;
}
@keyframes roll {
  0% {
    transform: translateX(800px);
  }
  100% {
    -webkit-transform: translateX(0px);
  }
}

.rollup-enter-active {
  // transition-delay: 1s;
  animation: rollup 0.5s;
}
.rollup-leave-active {
  // transition-delay: 1s;
  animation: rollup 0.5s reverse;
}
@keyframes rollup {
  0% {
    transform: translateX(-400px);
  }
  100% {
    -webkit-transform: translateX(0px);
  }
}
.rollout-enter-active {
  animation: rollout 0.5s;
}
.rollout-leave-active {
  animation: rollout 0.5s reverse;
}
@keyframes rollout {
  0% {
    transform: translateY(-400px);
  }
  100% {
    -webkit-transform: translateY(0px);
  }
}
.rollright-enter-active {
  animation: rollright 0.5s;
}
.rollright-leave-active {
  animation: rollright 0.5s reverse;
}
@keyframes rollright {
  0% {
    transform: translateX(400px);
  }
  100% {
    -webkit-transform: translateX(0px);
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
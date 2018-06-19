<template>

    <div id='mainproeci' class='mainproeci'>
        
        <slider v-if="!clientes" ref="slider" :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit' style="position: relative;">
           
        </slider>
        <slider v-if="clientes" ref="slider" :pages="pagescli" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
    
        </slider>
      <transition name="fadediv" mode="out-in">
        <!-- <div v-show="divlogin" style="position: absolute;"> -->
          <div class="overlaydiv" v-if='!clientes' v-show="divlogin">
            <div v-show='divfirst' class="flexdiv">
              <figure class="image is-256x256">
                 <a target="_blank" href="http://proeci.com.mx/">
                  <img src="../assets/PROECI.png">
                 </a>
              </figure>
            <!-- <div class="container"> -->
              <!-- <p class="title is-1 has-text-white">Grupo Proeci</p>
              <p class="subtitle is-3 has-text-white">Camina con nosotros hacia el futuro</p>
              <a href="http://proeci.com.mx/" target="_blank" class="button is-primary is-outlined is-centered">Ven con nosotros</a> -->
            </div>
            <div v-show='divsecond' class="flexdiv">
              <figure class="image is-256x256">
                 <a target="_blank" href="http://www.zebralogistics.net/">
                  <img src="../assets/zebralogo2.jpg">
                 </a>
              </figure>                                                    
            </div>                
          </div>
          <div class="overlaydivleft" v-else v-show="divlogin">
            <div v-show='divfirstcli' class="flexdiv">
              <figure class="image is-256x256">
                 <a target="_blank" href="http://proeci.com.mx/">
                  <img src="../assets/PROECI.png">
                 </a>
              </figure>
              <!-- <p class="title is-1 has-text-white">Grupo Proeci</p>
              <p class="subtitle is-3 has-text-white">Dejanos ayudarte a caminar hacia el futuro</p>
              <a href="http://proeci.com.mx/" target="_blank" class="button is-primary is-outlined is-centered">Ven con nosotros</a> -->
           
            </div>
          </div>
        <!-- </div> -->
      </transition>
    </div>
</template>

<script>
import slider from "vue-concise-slider"; // import slider

var pagenum = 0;
export default {
  name: "mainproeci",
  components: {
    slider
  },
  mounted () {
    let that = this
    this.$bus.$on("id-selected", function(id) {
      // console.log(id);
      if (id === 2) {
        that.clientes = true
        //  that.$refs.slider.$emit('slideTo', 0)    
        if (that.currentPage===0) that.divfirstcli = true
        // that.currentPage = 0
        }
      else {
        that.clientes = false
        // that.currentPage = 0
        // that.$refs.slider.$emit('slideTo', 0)
        if (that.currentPage===0)  that.divfirst = true 
        }   
    }.bind(this))

    this.$bus.$on("id-login", function(id) {
       id === 2 ? that.divlogin = false : that.divlogin = true
     }.bind(this))
    //  setInterval(function(){
    //       pagenum != 2 ? pagenum = pagenum + 1 : pagenum = 0
    //       that.$refs.slider.$emit('slideTo', pagenum)
    //       pagenum != 0 ? (
    //         that.divfirst = false,
    //         that.divfirstcli = false
    //       )
    //       : (
    //         that.divfirst = true,
    //         that.divfirstcli = true
    //       )
    //     }, 3000)
  },
  // watch: {
  //     changeSlide (id) {
  //       if (id == 2) this.clientes = true
  //       else this.clientes = false
  //     }
  // },
  data() {
    return {
      clientes: false,
      divfirst: true,
      divsecond: false,
      divfirstcli: true,
      divlogin: true,
      //Image list[arr]
      pages:[
        {
          html: '',
          style:{
           background:'url(dist/plane4.jpg) center/cover !important',        
          }
        },
        {
         html: '',
         style:{
            background:'url(dist/plane1.jpg) center/cover !important'
          }
        },
        {
          html: '',
          style:{
            background: 'url(dist/trailer1.jpg) bottom/cover !important',
            backgroundSize: 'cover !important',
            backgroundPosition: 'bottom !important',
          },
        }
      ],
      pagescli: [
          {
          html: '',
          style:{
           background:'url(dist/proeci1.jpg) center/cover !important',        
          }
        },
        {
         html: '',
         style:{
            background:'url(dist/road1.jpg) center/cover !important'
          }
        },
        {
          html: '',
          style:{
            background: 'url(dist/zebra.jpg) bottom/cover !important',
            backgroundSize: 'cover !important',
            backgroundPosition: 'bottom !important',
          },
        }
      ] ,   
      sliderinit: {
        currentPage: 0,
        thresholdDistance: 300,
        thresholdTime: 500,
        autoplay:4000,
        loop:true,
        infinite:1,
        slidesToScroll:1,
        effect:'fade',
        // loop: true
      }
    };
  },

    methods: {
      slide (data) {
        // console.log(data)
        if (data.currentPage === 0){
          this.divfirst = true,
          this.divfirstcli = true,
          this.divsecond = false
        }
        else if(data.currentPage === 1) {
          this.divfirst = false,
          this.divfirstcli = false,
          this.divsecond = true
        }
        else{
          this.divfirst = false,
          this.divfirstcli = false,
          this.divsecond = false
        }
      },
      onTap (data) {
        // console.log(data)
      },
      onInit (data) {
        // console.log(data)
      }
    }
};
</script>

<style lang="scss" scoped>
.mainproeci {
  height: 80vh;
  // position: fixed;
}
.slider-item {
  background-position: bottom !important;
}
.overlaydiv{
  // background: rgba(0, 0, 0, 0.8);
  position: absolute;
  // width: 100px;
  // height: 100px;
  top: 30%;
  left: 10%;
  z-index: 1;
}
.overlaydivleft{
  // background: rgba(0, 0, 0, 0.8);
  position: absolute;
  // width: 100px;
  // height: 100px;
  top: 30%;
  right: 10%;
  z-index: 1;
}
.flexdiv{
  display: flex;
  flex-direction: column;
}
.is-centered{
  align-self: center;
}
.fadediv-enter-active, .fadediv-leave-active {
  // position: absolute;
  transition: opacity 0.5s ease;
}
.fadediv-enter,
.fadediv-leave-to {
  position: absolute;
  opacity: 0;
  // background-color: red;
  // transform: translateY(10px);
}
</style>

<template>

    <div id='mainproeci' class='mainproeci'>
        
        <slider v-if="!clientes" ref="slider" :pages="pages" :sliderinit="sliderinit" style="position: relative;">
           
        </slider>
        <slider v-if="clientes" ref="slider" :pages="pagescli" :sliderinit="sliderinit">
    
        </slider>        
      <div class="overlaydiv" v-if='!clientes'>
        <div v-show='divfirst' class="flexdiv">
        <!-- <div class="container"> -->
          <p class="title is-1 has-text-white">Grupo Proeci</p>
          <p class="subtitle is-3 has-text-white">Camina con nosotros hacia el futuro</p>
          <a href="http://proeci.com.mx/" target="_blank" class="button is-primary is-outlined is-centered">Ven con nosotros</a>
        </div>
      </div>
       <div class="overlaydivleft" v-else>
        <div v-show='divfirstcli'>
          <p class="title is-1 has-text-white">Grupo Proeci</p>
          <p class="subtitle is-3 has-text-white">Dejanos ayudarte a caminar hacia el futuro</p>
          <a href="http://proeci.com.mx/" target="_blank" class="button is-primary is-outlined is-centered">Ven con nosotros</a>
        </div>
      </div>
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
      if (id == 2) {
        that.clientes = true
         that.$refs.slider.$emit('slideTo', 0)
        //  that.divfirst = true 
        that.divfirstcli = true
        // that.currentPage = 0
        }
      else {
        that.clientes = false
        that.$refs.slider.$emit('slideTo', 0)
        that.divfirst = true 
        // that.divfirstcli = true
        // that.currentPage = 0
        }
      // changeSlide(id)
        // this.clientes = true;      
    }.bind(this))
     setInterval(function(){
          // let count = 0
          // console.log(count)
          // count =+ count
          
          if (pagenum != 2) pagenum = pagenum + 1
          else pagenum = 0
          that.$refs.slider.$emit('slideTo', pagenum)
          if (pagenum != 0) {
            that.divfirst = false
            that.divfirstcli = false
            }
          else { 
            that.divfirst = true 
            that.divfirstcli = true
            }
        }, 3000)
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
      divfirstcli: true,
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
        // autoplay:4000,
        loop:true,
        infinite:1,
        slidesToScroll:1,
        effect:'fade',
        // loop: true
      }
    };
  },
  // ready: function ready() {
  //   this.intervalo();
  // },
    methods: {
      // intervalo() {
      //   setInterval(() => {
      //     let count = 0
      //     console.log(count)
      //     count =+ count
      //     this.$refs.slider.$emit('slideNext')
      //   }, 100);
      // },
      // Listener event
      slide (data) {
        console.log(data)
      },
      onTap (data) {
        console.log(data)
      },
      onInit (data) {
        console.log(data)
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
  display: flex;
  flex-direction: column;
  // border: 5px solid red;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  // width: 100px;
  // height: 100px;
  top: 30%;
  left: 10%;
  z-index: 1;
}
.overlaydivleft{
  
  // border: 5px solid red;
  background: rgba(0, 0, 0, 0.8);
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
</style>

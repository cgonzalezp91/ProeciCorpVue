<template>
    <footer class="footer">
    <div class="container">
        <div class="content has-text-centered is-paddingless is-marginless">
        <p>
            <strong>Enlaces Externos</strong>
        </p>        
        </div>
        <div class="container is-flex is-rows is-paddingless is-marginless is-centered">
        
        <figure class="image is-96x96 is-paddingless is-marginless caaarem">
            <a target="_blank" href="http://www.caaarem.mx/">
                <img src="../assets/caaarem.png">
            </a>
        </figure>
        
        <figure class="image is-96x96 is-paddingless is-marginless aaanl">
            <a target="_blank" href="https://aaanld.org/">
                <img src="../assets/aaanldlogo.png">
            </a>
        </figure>
        <figure class="image is-96x96 is-paddingless is-marginless aaabj">
            <a target="_blank" href="http://www.aaabac.org/">
                <img src="../assets/aaabaclogo.png">
            </a>
        </figure>
        </div>
        <!-- <div class="container">
        
        </div> -->
        <div class="flexdiv">
            <p class="subtitle is-5">
                Powered by                 
            </p>
            <br>
            <figure class="image is-24x24">
                <a href="https://vuejs.org/" target="_blank"><img src="../assets/logo.png"></a>
            </figure>
        </div>
    </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
    // height: ;
    // padding-top: 2vh;
    // padding-bottom: 2vh;
    padding: 3rem 1.5rem 1rem;
    background-color: lightsteelblue;
}
.is-rows {
    flex-direction: row;
}
.is-centered{
    justify-content: space-around;
}
.caaarem:hover{
    animation: bounce 2s infinite;
}
.aaanl:hover{
    animation: flash 2s infinite;
}
.aaabj:hover{
    animation: rubberBand 2s infinite;
}
.flexdiv{
    display: flex;
    flex-direction: row;
    // align-items: center;
    justify-content: center;
}
</style>

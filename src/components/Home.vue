<template>
<div>
<Header />
<Carousel/>
<Card />
<!-- <Card v-bind:card="card"/> -->
<Specialized />
<Skills/>
<Item/>
<Clients/>
<Facts/>
<Form/>
<Footer/>
</div>
</template>

<script>
import Header from './Header.vue'
import Carousel from './Carousel.vue'
import Card from './Card.vue'
import Specialized from './Specialized.vue'
import Skills from './Skills.vue' 
import Item from './Item.vue'
import Clients from './Clients.vue'
import Facts from './Facts.vue'
import Form from './Form.vue'
import Footer from './Footer.vue'
export default {
    name:'Home',
    components:{
    Header,
    Carousel,
    Card,
    Specialized,
    Skills,
    Item,
    Form,
    Clients,
    Facts,
    Footer,  
},
}
</script>
<style>
@import '../assets/style.css';
</style>
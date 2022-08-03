<template>
    <div class="bg-img4 pb-5">
  <div class="our-facts">
<h2 class="text-center clr">Facts About us</h2>
<div class="container">
  <div class="row">
    <div class="col-lg-3 text-center"  v-for="face in faces" v-bind:key="face.smile ">
      <!-- <i class=""></i> -->
      <div class="fa-5x1 text-gredient1 text-shadow1">
     <i :class="face.smile" />
     </div>
      <h3>
      <strong class="counter text-gredient1">{{face.price}}</strong>
     </h3>
     <h5 class="txt_clr">{{face.text}}</h5>
    </div>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    name:'Facts',
    data() {
        return{
faces:[
  {
smile:"fas fa-smile",
price:"1100",
text:"Happy Clients",
  },
  {
smile:"fas fa-bullseye",
price:"1100+",
text:"Projects Developed",
  },
  // <i class=""></i>
  {
smile:"fas fa-cogs",
price:"20",
text:"Ready to Use Products",
  },
  {
smile:"fas fa-horse-head",
price:"40",
text:"Employees",
  },
]
        }
    },
}
</script>
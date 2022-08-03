<template>
<div>
    <div class="bg-img3">  
  <div class="padd">
 <h2 class="text-center line">Our Skills</h2>
</div>
<div class="container">
  <div class="row pb-5">

    <div class="col-lg-12 pb-3" v-for="skill in progress" v-bind:key="skill.title">
 <div class="progress progress-style1 ">
  <div class="progress-bar " style="width: 100%;">
  <span class="pullleft">{{skill.title}} </span>
  <span class=" pullright">{{skill.rate}}</span>
</div> 
</div>
  </div>
    <div class="col-lg-12 pb-3">
 <div class="progress progress-style1 ">
  <div class="progress-bar " style="width: 95%;">
  <span class="pullleft">IOS Development </span>
  <span class=" pullright">95%</span>
</div> 
</div>
    </div>
<div class="col-lg-12 pb-3" v-for="skill1 in progress1" v-bind:key="skill1.title">
 <div class="progress progress-style1">
  <div class="progress-bar" style="width: 90%;">
  <span class="pullleft">{{skill1.title}} </span>
  <span class=" pullright">{{skill1.rate}}</span>
  </div> 
  </div>
</div>

  </div>
</div>
</div>
<div class="set-bground">
<div class="sectionTitle1">
  <h1 class="text-center">Ready To Install/Use Softwares</h1>
  <h6 class="text-center">Available on Per Month/Per Year Basis.</h6>
</div>
</div>
</div>
</template>

<script>
export default {
    name:"Skills",
    data(){
        return{
progress:[
  {
    title:"Web Development",
    rate:"100%"
  },
  {
  title:"Android Development",
  rate:"100%"
},
 {
  title:"Quality",
  rate:"100%"
},
 {
  title:"Graphics Designing",
  rate:"100%"
},
 {
  title:"3D Modeling",
  rate:"100%"
}
],
progress1:[
    {
    title:"Server Management ",
    rate:"90%"
    },
    {
    title:"Control And Automation",
    rate:"90%"
    },
],
        }
        
    }
}
</script>
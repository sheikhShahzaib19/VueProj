<template>
    <div class="set-bg1 mt-5">
  <h1 class="text-center line text-white">We are Specialized in</h1>
<div class="container mt-5">
     <div class="row mt-3">
     <div v-for="skill in card1" v-bind:key="skill.icon1">
     
    <div class="col-sm-4 mt-4 col-12">
            <div class="card text-center h-100 shadow c-shape" style="width:21.5rem;">
            <div class="card-block">
                <div class="media-left fa-5x">
                 <i :class="skill.icon1" />
                </div>
                 <h3 class="card-title text-gradient">{{skill.title}}</h3>
                <div class="sett mb-5">
                <p>{{skill.text}}</p>
            </div>
            </div>
          </div>
      </div>
      </div>
      </div>
 </div>
</div>
</template>
<script>
export default {
    name:"Specialized",
    data(){
        return{
       card1:[
    {
    icon1:"fab fa-dashcube aria-hidden='true'",
    title:"Online Systems",
    text:"A special blend of accounts, inventory, stock and sale."
  },
  {
   icon1:"fab fa-android",
   title:"Mobile Apps",
   text:"5 years of experience in Mobile Apps development (Android/IOS)",
},
{
   icon1:"fa fa-shopping-cart",
   title:"E-Commerce",
   text:"More than 25 projects working successfuly.",
},
{
  icon1:"fab fa-youtube",
   title:"Video Portal",
   text:"More than 10 web channels & video streaming sites with millions of users.",
},
{
  icon1:"fab fa-slideshare",
   title:"Classified Sites",
   text:"Some of the most renowned classified sites are our creative products.",
},
{
  icon1:"fas fa-video",
   title:"Social Network",
   text:"5 years of skillful experience in developing & troubleshooting of social network system.",
},
{
  icon1:"fa fa-search",
   title:"SEO Solution",
   text:"Specialization in increasing the quantity and quality of traffic to your website through organic search engine results.",
},
{
  icon1:"fa fa-paint-brush",
   title:"3D Graphics/Modelling",
   text:"Specialization in 3D Graphics and 3D Modelling with latest tools",
},
{
   icon1:"fa fa-cubes",
   title:"Block Chain Development",
   text:"Our approach to blockchain technology consulting begins with what, why and the way blockchain can benefit your enterprise solution.",
},
  ],
        }
    }
}
</script>
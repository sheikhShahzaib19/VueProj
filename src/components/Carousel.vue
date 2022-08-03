<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;">
      <!-- Text slides with image -->
      <!-- Slides with custom text -->
     
      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="../assets/images/bg-sliders.jpg">
      
      <div class="slide-text">
              <h1 data-animation="animated zoomInRight">Welcome To IT Empire</h1>
                  <p class="slider2_text" data-animation="animated fadeInLeft">We Design Your Dreams</p>
              <a href="about.ite" class="btn btn-primary btnn1" data-animation="animated fadeInRight">About
                  Us</a><br><br><br>
                    </div>
      </b-carousel-slide> -->

      <b-carousel-slide img-src="../assets/images/sc.jpg">
      <div class="slide-text slide-text1">
              <h1 data-animation="animated zoomInRight">School Management System</h1>
                  <p class="slider2_text" data-animation="animated fadeInLeft">A perfect Solution for any School</p>
              <a href="about.ite" class="btn btn-primary btnn1" data-animation="animated fadeInRight">View Demo
                  Us</a><br><br><br>
                    </div>
      </b-carousel-slide>
<b-carousel-slide
        img-src="../assets/images/19.jpg">
      <div class="slide-text slide-text3">
              <h1 data-animation="animated zoomInRight">CARENTAL</h1>
                  <p class="slider2_text" data-animation="animated fadeInLeft">Mobile Application developed for Car Rentals</p>
              <a href="about.ite" class="btn btn-primary btnn1" data-animation="animated fadeInRight">Read More
                  Us</a><a href="about.ite" class="btn btn-primary btnn1" data-animation="animated fadeInRight">Google Store</a><br><br><br>
                    </div>
        
      </b-carousel-slide>      
       <b-carousel-slide img-src="../assets/images/18.jpg">
        <div class="slide-text slide-text2">
        <h1 data-animation="animated zoomInRight">Real Estate Manager (REM)</h1>
              <p class="slider2_text">Mobile Application developed for Property Dealers and Real Estate Advisors</p>
              <a href="about.ite" class="btn btn-primary btnn1" data-animation="animated fadeInRight">Read More
                  Us</a><a href="about.ite" class="btn btn-primary btnn1" data-animation="animated fadeInRight">Download
                  Us</a><br><br><br>
             </div>
        


      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
  export default {
      name:'Carousel', 
  }
</script>
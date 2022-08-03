<template>
    <div class="bg-img5 pb-5">
<div class="container">
  <div class="row">
    <div class="col-lg-6">
      <img src="../assets/images/logo.png" style="padding:60px" alt="">
    </div>
    <!-- <div class="col-lg-6"> -->
      <div class="col-sm-6 text_dark padding30 radius shadow-dark center-block color1" >

                <div id="show_msg"></div>
                <div class="sending_loader">
                </div>

                <h2 class="m-bottom15">Request A Quote</h2>
    
                <div class="contactForm row m0">
                    <div class="contactForm">
                        <br>
                        <form>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <input id="get_name" type="text" class="form-control" placeholder="Name" aria-label="name">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <input id="get_phone" type="text" class="form-control" placeholder="Phone No." aria-label="phone">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <select id="get_dept" class="form-control" aria-label="department">
                                            <option>Website Development</option>
                                            <option>Android Development</option>
                                            <option>IOS Development</option>
                                            <option>3D Modeling</option>
                                            <option>Digital Marketing SEO</option>
                                            <option>Media Production</option>
                                            <option>Control and Automation</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <button type="submit" class="btn btn-pink btn-xlg bttn">Request</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  </div>
</div>
</div>
</template>

<script>
export default {
    name:'Form'
}
</script>
<template>
  <div class="set-bg">
    <div class="sectionTitle">
      <h2 class="text-center mt-2 set">Our Solution</h2>
    </div>
    <div class="container">
      <div class="row mt-4">
        <div v-for="tod in card" v-bind:key="tod.title">
          <div class="col-sm-4 mt-4 col-12">
            <div class="card text-center h-100 shadow" style="width: 21.5rem">
              <div class="card-block">
                <h3 class="card-title mt-5 font-weight">{{ tod.title }}</h3>
                <div class="icon">
                  <h2 class="fa-3xx"><i :class="tod.icon" /></h2>
                </div>
                <a
                  href="#"
                  :class="'btn btn-' + tod.btn_color + 'mb-5 mt-4 txt'"
                >
                  <i :class="tod.button" />{{ tod.text }}
                </a>
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
  name: "Card",
  // props:['card']
  data() {
    return {
      card: [
        {
          title: "Web Solution",
          icon: "fas fa-globe-asia",
          button: "fas fa-external-link-alt",
          text: "Web solution",
          btn_color: "primary",
        },
        {
          title: "Android/Ios",
          icon: "fas fa-mobile-alt",
          button: "fas fa-external-link-alt",
          text: "Android/Ios",
          btn_color: "secondary",
        },
        {
          title: "Desktop Solution",
          icon: "fas fa-desktop",
          button: "fas fa-external-link-alt",
          text: "Desktop Solutions",
          btn_color: "success",
        },
        {
          title: "SEO Solutions",
          icon: "fas fa-search",
          button: "fas fa-external-link-alt",
          text: "SEO Solutions",
          btn_color: "info",
        },
        {
          title: "Media Solutions",
          icon: "fas fa-film",
          button: "fas fa-external-link-alt",
          text: "Media Solutions",
          btn_color: "primary",
        },
        {
          title: "Domain / Hosting",
          icon: "fas fa-tasks",
          button: "fas fa-external-link-alt",
          text: "Domain / Hosting",
          btn_color: "primary",
        },
        {
          title: "Blockchain Development",
          icon: "fas fa-cubes",
          button: "fas fa-external-link-alt",
          text: "Blockchain Development",
          btn_color: "primary",
        },
        {
          title: "Amazon Services",
          icon: "fab fa-amazon",
          button: "fas fa-external-link-alt",
          text: "Amazon Services",
          btn_color: "primary",
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn {
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  display: inline-block;
  text-shadow: none;
  text-transform: uppercase;
  border-radius: 12em;
  font-weight: 700;
  padding: 16px 40px 17px;
  line-height: 1.33;
}
.font-weight {
  font-weight: 500;
}
</style>

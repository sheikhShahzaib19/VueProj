<template>
  <div class="pattern10">
    <div class="sectionTitle">
      <h2>Get <strong>20% Discount!</strong> on following course!</h2>
    </div>
    <div class="list-icons mt-2">
      <ul class="list-inline">
        <li v-for="item in item" v-bind:key="item.icon1">
          <i :class="item.icon1" />
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      item: [
        {
          icon1: "fas fa-globe-asia",
          text: "Web Designing",
        },
        {
          icon1: "fas fa-cogs",
          text: "Web Development",
        },
        {
          icon1: "fab fa-android",
          text: "Android Development",
        },
        {
          // <i class=""></i>
          icon1: "fab fa-apple",
          text: "IOS Development",
        },
      ],
    };
  },
};
</script>
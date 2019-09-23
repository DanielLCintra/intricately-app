<template>
  <div class="container">
    <div class="col">
      <div class="box">
        <div class="box-title">
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae vehicula ipsum. Sed dapibus, lorem nec molestie aliquam, arcu ex efficitur magna, quis tempus leo neque nec erat.</b>
        </div>

        <div class="box-input">
          <label for="">COMPANY NAME</label>
          <input
            type="text"
            value=""
            placeholder="Your company name"
          >
        </div>

        <div class="box-input">
          <label for="">COMPANY SPEND</label>
          <input
            type="text"
            value=""
            placeholder="Your company name"
          >
        </div>

        <div class="box-input">
          <label for="">COMPANY SPEND ABILITY</label>
          <input
            type="text"
            value=""
            placeholder="Your company name"
          >
        </div>

        <div class="box-input">
          <label for="">NOTES</label>
          <textarea
            id="notes"
            name="notes"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyDataIndex"
};
</script>

<style>
</style>

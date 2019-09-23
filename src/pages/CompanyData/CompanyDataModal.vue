<template>
  <div
    v-if="show"
    class="container-modal"
  >
    <div class="col">
      <div class="box">

        <div class="box-input">
          <label for="">
            ADDITIONAL NOTES
            <span
              class="box-close"
              @click="toggleModal"
            >
              <img src="src/assets/Company Data - Modal/close.png">
            </span>
          </label>

          <textarea
            id="notes"
            name="notes"
            cols="30"
            rows="10"
          />
        </div>

        <div class="box-button">
          <input
            type="button"
            value="SAVE"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CompanyDataModal',

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    ...mapActions(['toggleModal'])
  }
}
</script>

<style>
</style>

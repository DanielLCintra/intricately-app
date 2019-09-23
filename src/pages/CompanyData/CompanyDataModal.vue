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
            v-model="text"
            name="notes"
            cols="30"
            rows="10"
            placeholder="e.g. Good Tech Company"
          />

          <div
            v-if="$v.text.$error"
            class="error"
          >
            Note is required
          </div>
        </div>

        <div class="box-button">
          <input
            type="button"
            value="SAVE"
            @click="saveNote"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'CompanyDataModal',

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    text: ''
  }),

  validations: {
    text: {
      required
    }
  },

  methods: {
    ...mapActions(['toggleModal', 'addNote']),

    saveNote() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.addNote(this.text)
        this.text = ''
        this.$emit('close-modal')
      }
    }
  }
}
</script>

<style>
</style>

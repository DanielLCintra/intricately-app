<template>
  <div class="container">
    <div class="col">
      <div class="box">
        <div class="box-title">
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae vehicula ipsum. Sed dapibus, lorem nec molestie aliquam, arcu ex efficitur magna, quis tempus leo neque nec erat.</b>
        </div>

        <div class="box-input">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.company.name.$error }"
          >
            <label for="">COMPANY NAME</label>
            <input
              v-model.trim="$v.company.name.$model"
              type="text"
              class="form__input"
              placeholder="e.g Your Company Name"
            >
          </div>

          <div
            v-if="!$v.company.name.required"
            class="error"
          >
            Company name is required
          </div>
        </div>

        <div class="box-input">
          <label for="">COMPANY SPEND</label>
          <input
            v-model="company.spend"
            v-mask="'$###,###'"
            type="text"
            value=""
            placeholder="e.g. $150,000 "
          >
        </div>

        <div class="box-input">
          <label for="">COMPANY SPEND ABILITY</label>
          <div class="input-group">
            <input
              v-model="company.spend_ability_min"
              type="text"
              value=""
              placeholder="e.g. $150,000 - $300,000"
            >

            <input
              v-model="company.spend_ability_max"
              type="text"
              value=""
            >
          </div>
        </div>

        <div class="box-input">
          <label for="">NOTES</label>
          <textarea
            id="notes"
            name="notes"
            cols="30"
            rows="10"
            placeholder="e.g. Good Tech Company"
            @click="toggleModal()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'CompanyDataIndex',

  data: () => ({
    company: {
      name: null,
      spend: 0,
      spend_ability_min: 0,
      spend_ability_max: 0,
      notes: []
    }
  }),

  validations: {
    company: {
      name: {
        required
      }
    }
  },

  methods: {
    ...mapActions(['toggleModal'])
  }
}
</script>

<style>
</style>

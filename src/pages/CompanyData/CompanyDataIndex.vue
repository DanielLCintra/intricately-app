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
              @blur="$v.$touch"
            >
          </div>

          <div
            v-if="$v.company.name.$error"
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
              v-model="company.spendAbilityMin"
              v-mask="'$###,###'"
              type="text"
              value=""
              placeholder="e.g. $150,000 -"
              @blur="validate"
            >

            <input
              v-model="company.spendAbilityMax"
              v-mask="'$###,###'"
              type="text"
              value=""
              placeholder="$300,000"
              @blur="validate"
            >

            <div
              v-if="hasError"
              class="error"
            >
              Spend Ability Max has to be greater than Min, and Min has to be lower then Max.
            </div>
          </div>
        </div>

        <div class="box-input">
          <label for="">NOTES</label>
          <textarea
            id="notes"
            v-model="notes"
            name="notes"
            cols="30"
            rows="10"
            placeholder="e.g. Good Tech Company"
            readonly
            @click="toggleModal()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable radix */
import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import Company from '../../models/Company'

export default {
  name: 'CompanyDataIndex',

  data: () => ({
    company: new Company(),
    hasError: false
  }),

  computed: {
    notes() {
      return this.$store.state.notes.join(',\n')
    }
  },

  validations: {
    company: {
      name: {
        required
      }
    }
  },

  methods: {
    ...mapActions(['toggleModal']),

    validate() {
      const { spendAbilityMin, spendAbilityMax } = this.company
      if (spendAbilityMin === null || spendAbilityMax === null) {
        this.hasError = false
        return
      }
      const validation1 = this.convertToNumber(spendAbilityMin) < this.convertToNumber(spendAbilityMax)
      const validation2 = this.convertToNumber(spendAbilityMax) > this.convertToNumber(spendAbilityMin)

      this.hasError = !validation1 || !validation2
    },

    convertToNumber(string) {
      return parseInt(string.replace('$', ''))
    }
  }
}
</script>

<style>
</style>

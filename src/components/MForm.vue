<template lang="pug">
.form
  .form-tit {{ formTitle }}

  //- slot for form-item
  slot

  .form-buttons
    m-button.comfirm(
      :text="comfirmText ? comfirmText : 'Comfirm'"
      :clickHandle="comfirmHandle"
    )
    m-button.cancel(
      :text="cancelText ? cancelText : 'Cancel'"
      :clickHandle="cancelHandle"
    )

</template>

<script>
import { mapState } from 'vuex'
import MFormItem from '@/MFormItem'
import MButton from '@/MButton'

export default {
  name: "my-form",
  props: [
    "formTitle",
    "comfirmText",
    "cancelText",
    "comfirmHandle",
    "cancelHandle"
  ],
  components: {
    MFormItem, MButton
  },
}
</script>

<style lang="stylus">

$font-color = #bbb
$label-width = 100px
$input-width = 240px

.form
  margin 30px
  // font-style italic
  font-weight bold

  .form-tit
    margin-left 30px // not absolutely centered
    margin-bottom 20px
    font-size 30px
    text-align center
    color $font-color

  .form-item
    display flex
    margin 15px 0

  .form-label
    position relative
    left -20px
    top 4px
    width $label-width
    line-height 30px
    text-align right
    color $font-color

  .form-input
    width $input-width

  .form-buttons
    margin-top 35px

  .comfirm,
  .cancel
    margin-left $label-width
    padding 0

  .cancel
    margin-left $input-width - 90px * 2

</style>

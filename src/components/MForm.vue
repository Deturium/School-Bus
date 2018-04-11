<template lang="pug">
.form
  .form-tit {{ formTitle }}
  img.lifegame(src="../assets/lifegame.png")

  //- slot for form-item
  .form-items
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
$label-width = 120px
$input-width = 270px

.form
  margin 30px auto
  // font-style italic
  font-weight bold

  .form-tit
    font-size 30px
    text-align center
    color $font-color

  .lifegame
    width 580px
    margin 20px 0

  .form-items
    display flex
    flex-direction column
    align-items center
    margin 0 auto

    .form-item
      display flex
      margin 8px 0

    .form-label
      position relative
      left -20px
      width $label-width
      line-height 30px
      text-align center
      color $font-color
      border 1px solid #646464
      border-radius 5px

    .form-input
      width $input-width

    .form-buttons
      margin-top 30px

    .comfirm,
    .cancel
      margin-left $label-width
      padding 0

    .cancel
      margin-left $input-width - 90px * 2

</style>

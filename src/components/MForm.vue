<template lang="pug">
.form
  .form-tit {{ formTitle }}
  //- .lifegame
  //-   img(src="../assets/lifegame.png")

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
$input-width = 260px

.form
  margin 30px auto
  // font-style italic

  .form-tit
    font-size 30px
    font-weight bold
    text-align center
    color $font-color

  // .lifegame
  //   width 580px
  //   overflow-x hidden
  //   margin 20px 0
  //   >img
  //     height 50px

  .form-items
    display flex
    flex-direction column
    align-items center
    margin 0 auto
    margin-top 25px

    .form-item
      display flex
      flex-direction column
      align-items flex-start
      margin 8px 0

    .form-label
      font-size 14px
      color $font-color

    .form-input
      width $input-width

    .form-buttons
      width $input-width
      margin-top 30px

    .comfirm,
    .cancel
      padding 0

    .cancel
      margin-left $input-width - 90px * 2

</style>

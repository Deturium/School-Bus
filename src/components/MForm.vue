<template lang="pug">
.m-form
  .formtit {{ formTitle }}

  .formitems
    //- slot for form-item
    slot

    .formbuttons
      m-button.-comfirm(
        :text="comfirmText ? comfirmText : 'Comfirm'"
        :clickHandle="comfirmHandle"
      )
      m-button.-cancel(
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

.m-form
  margin 30px auto
  // font-style italic

  >.formtit
    font-size 30px
    font-weight bold
    text-align center
    color $font-color

  >.formitems
    display flex
    flex-direction column
    align-items center
    margin 0 auto
    margin-top 25px

    .formtext
      margin-bottom 25px
      font-size 12px
      color #999

    >.formbuttons
      width $input-width
      margin-top 30px

    .-comfirm
      padding 0

    .-cancel
      padding 0
      margin-left $input-width - 90px * 2

.form-item
  display flex
  flex-direction column
  align-items flex-start
  margin 8px 0

  >.formlabel
    font-size 14px
    color $font-color

  >.forminput
    width $input-width

</style>

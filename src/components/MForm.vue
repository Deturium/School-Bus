<template lang="pug">
.m-form
  .formtit {{ formTitle }}
  .formtext(v-if="promptText") {{ promptText }}

  .formitems
    slot

  .formbuttons
    m-button(
      :text="comfirmText ? comfirmText : 'Comfirm'"
      :clickHandle="comfirmHandle"
    )
    m-button(
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
    "promptText",
    "comfirmText",
    "comfirmHandle",
    "cancelText",
    "cancelHandle"
  ],
  components: {
    MFormItem, MButton
  },
}
</script>

<style lang="stylus">

$formitem-width = 256px

.m-form
  margin 30px auto
  // font-style italic

  >.formtit
    font-size 30px
    font-weight bold
    text-align center
    color #bbb

  >.formtext
    margin 25px auto
    font-size 12px
    color #999

  >.formitems
    display flex
    flex-direction column
    align-items center
    width $formitem-width
    margin 0 auto
    margin-top 25px

  >.formbuttons
    display flex
    justify-content space-between
    width $formitem-width
    margin 0 auto
    margin-top 30px

</style>

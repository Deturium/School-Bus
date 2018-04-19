<template lang="pug">
.notification
  notification-item(
    v-for="(n, i) in notifications"
    :key="i"
    :title="n.title"
    :description="n.description"
    :type="n.type"
    :survivalTime="n.survivalTime"
  )
</template>

<script>
import { mapState } from 'vuex'
import NotificationItem from './NotificationItem'

export default {
  name: "notification",
  computed: mapState([
    "notifications"
  ]),
  components: {
    NotificationItem
  },
}
</script>

<style lang="stylus" scoped>

.notification
  position fixed
  right 10px
  // width 280px
  min-width 280px
  max-width 380px
  z-index 1000

</style>

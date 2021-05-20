<template>
  <ul class="tickets">
    <li
      class="border-topbottom"
      v-for="(ticket,index) in tickets"
      :key="index">
      <div class="ticket">
        <i class="ticket__icon iconfont icon-ticket"></i>
        <span class="ticket__title">{{ticket.title}}</span>
        <div
          class="tickets--inferior"
          v-if="ticket.children">
          <DetailTickets :tickets="ticket.children" />
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DetailTickets',
  props: {
    tickets: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.tickets {
  @include reset--list;
  .ticket {
    padding-left: 1em;
    line-height: .4rem;
    &__icon {
      color: $bgcolor--main;
    }
    &__title {
      padding: 0 .1rem;
      font-size: .16rem;
      @include ellipsis;
    }
  }
}
</style>

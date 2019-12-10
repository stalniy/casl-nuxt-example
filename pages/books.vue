<template>
  <div>
    <div v-if="$can('read', 'book')">
      books
    </div>
    <div v-else>
      no_permission
    </div>
  </div>
</template>

<script>

export default {
  async asyncData({ store, params, route, redirect, query, app }) {
    store.commit('books', {});

    console.log(app.$ability.rules)

    if (app.$ability.can('read', 'books')) {
      try {
        store.commit('isLoading', true);
        await store.dispatch('books')
      } finally {
        store.commit('isLoading', false);
      }
    }

    return {};
  }
};
</script>

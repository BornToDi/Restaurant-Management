<template>
  <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
    <q-list padding>
      <q-item v-for="(item, i) in categories" :key="i" clickable v-ripple>
        <q-item-section>
          {{ item.name }}
        </q-item-section>
      </q-item>
    </q-list>
</q-scroll-area>
</template>

<script>
export default {
  name: 'CategoriesList',
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Category 1'
        },
        {
          id: 2,
          name: 'Category 2'
        },
        {
          id: 3,
          name: 'Category 3'
        }
      ]
    }
  }
}
</script>

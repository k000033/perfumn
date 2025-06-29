<script setup>
import { apiUseGetJosn } from '../../componentApi/index'
const { flootData } = apiUseGetJosn()

const block = computed(() => {
  const map = new Map()

  for (let item of flootData.value) {
    if (!map.has(item.title)) {
      map.set(item.title, [])
    }
    map.get(item.title).push(item.txt)
  }

  return map
})
</script>
<template>
  <footer>
    <div class="mx-auto max-w-[1440px]">
      <div class="flex flex-1 py-5">
        <div
          v-for="[title, content] in block.entries()"
          :key="item"
          class="mb-8 px-10"
        >
          <p>{{ title }}</p>
          <nav>
            <ul>
              <li
                v-for="list in content"
                :key="list"
              >
                {{ list }}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="w-[36%]"></div>
    </div>
  </footer>
</template>

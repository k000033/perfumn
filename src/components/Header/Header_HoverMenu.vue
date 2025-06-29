<script setup>
const porps = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  hoverMenu: {
    type: String,
    default: '',
  },
})

const test = (items) => {
  const OOXX = [[], []]
  if (items.length > 5) {
    for (let [idx, x] of items.entries()) {
      if (idx % 2 == 0) {
        OOXX[0].push(x)
      } else {
        OOXX[1].push(x)
      }
    }
  } else {
    OOXX[0] = items
  }
  return OOXX
}

const { data, hoverMenu } = porps
</script>
<template>
  <div>
    <div class="flex">
      <div class="px-6 py-4">
        <div class="px-6 py-4">
          <a
            href=""
            class="relative block max-h-[250px] max-w-[250px]"
          >
            <img
              :src="data.img"
              alt=""
            />
            <span class="absolute bottom-4 left-0 right-0 text-center text-lg text-white">{{
              data.name
            }}</span>
          </a>
        </div>
      </div>
      <!-- 中間 -->
      <div
        v-for="item in data.childrens"
        :key="item.title"
        class="px-6 py-4"
      >
        <div class="px-6 py-4">
          <a
            href=""
            class="text-base"
            >{{ item.title }}</a
          >
        </div>
        <div class="flex">
          <ul
            v-for="list in test(item.items)"
            :key="list"
            class="px-6"
          >
            <li
              v-for="x in list"
              :key="x.en"
              class="mb-2 flex cursor-pointer gap-2"
            >
              <!--有英文的-->
              <template v-if="x.en != ''">
                <a
                  href=""
                  class="inline-block border-b-2 border-transparent hover:border-[#333]"
                >
                  <span class="font-bold">{{ x.en }} </span>
                  <span>({{ x.zh }})</span>
                </a>
              </template>
              <!--沒有英文的-->
              <template v-if="x.en == ''">
                <a
                  href=""
                  class="border-b-2 border-transparent hover:border-[#333]"
                >
                  <span>{{ x.zh }}</span>
                </a>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

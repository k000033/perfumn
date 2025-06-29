<script setup>
import { apiUseGetJosn } from '../../componentApi/index'
const selectAction = ref('')
const { actions } = apiUseGetJosn()

const mouseover = (en) => {
  selectAction.value = en
}
</script>
<template>
  <div class="bg relative h-[calc(100dvh-162px)] overflow-hidden">
    <video
      autoplay
      playsinline
      muted
      preload
      class="h-full w-full object-cover"
    >
      <source
        type="video/mp4"
        src="https://player.vimeo.com/progressive_redirect/playback/973156980/rendition/720p/file.mp4?loc=external&signature=e82be0c7178cbed15b73f429a9abeefcd5608669a29ae8b03fe46cd3e2116227"
      />
    </video>
    <div class="absolute bottom-0 w-full">
      <div class="mx-auto table w-full table-fixed text-white xl:w-[1140px]">
        <div
          v-for="item in actions"
          :key="item.en"
          :class="[
            'relative table-cell border-l border-[#26262626] pb-7 opacity-40 duration-300 before:absolute before:-left-[1px] before:-right-[1px] before:bottom-full before:h-dvh before:border before:border-[#26262626]',

            {
              '-translate-y-10 !opacity-100': item.en == selectAction,
            },
          ]"
          @mouseover="mouseover(item.en)"
        >
          <h2 class="border-b border-[#26262626] px-2 py-1 text-2xl">
            <span>{{ item.zh }}</span>
            <br />
            <span>{{ item.en }}</span>
          </h2>
          <p class="max-w-[212px] px-2 py-1 text-sm">{{ item.desc }}</p>
          <div
            :class="[
              'px-2 py-1 underline opacity-0 duration-700',
              {
                '!opacity-100': item.en == selectAction,
              },
            ]"
          >
            <span>{{ item.more }}</span>
          </div>
          <a
            href=""
            class="absolute bottom-0 left-0 right-0 h-dvh"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

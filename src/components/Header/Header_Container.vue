<script setup>
import { apiUseGetJosn } from '../../componentApi/index'
const { menu, menuItem } = apiUseGetJosn()

const cuurentMenuItem = ref('')

const getDate = (menu) => {
  return menuItem.value.find((x) => x.menu == menu)
}

const mouseover = (menu) => {
  cuurentMenuItem.value = menu
}

const mouseout = () => {
  cuurentMenuItem.value = ''
}
</script>
<template>
  <header class="border-b border-[#ebebeb] lg:relative">
    <div class="flex">
      <a
        href=""
        class="logo absolute left-1/2 top-[20px] block h-[43px] w-[147px] -translate-x-1/2 lg:static lg:ml-5 lg:mr-4 lg:mt-5 lg:translate-x-0"
      ></a>
      <!-- 漢堡 --->
      <a
        href=""
        class="side-menu block h-[81px] w-[81px] border-r border-[#ebebeb] lg:hidden"
      ></a>
      <div class="hidden grow border-l border-[#ebebeb] text-right lg:block">
        <!-- 搜尋 --->
        <div class="inline-flex w-[calc(100%-125px)] border-b border-[#ebebeb] text-right">
          <div class="h-[42px] pl-10"></div>
        </div>

        <!-- 選單 --->
        <nav class="h-[37px] w-[calc(100%-125px)]">
          <ul class="flex h-full items-center justify-center gap-4">
            <li
              v-for="item in menu"
              class="group cursor-pointer border-b-2 border-transparent text-left text-xs hover:border-b-[#333] xl:text-sm"
              @mouseover="mouseover(item)"
              @mouseout="mouseout(item)"
            >
              {{ item }}
              <Header_HoverMenu
                :class="[
                  'invisible absolute left-0 top-[calc(100%+1px)] z-40 w-full border-b border-[#ebebeb] bg-white opacity-0 shadow-md duration-500 group-hover:visible group-hover:opacity-100',
                ]"
                :data="getDate(item)"
                :hoverMenu="cuurentMenuItem"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="flex justify-center border-t border-[#ebebeb] px-4 py-5 lg:hidden">
      <div class="mx-auto w-[540px]">
        <input
          type="text"
          name=""
          id=""
          class="h-12 w-full border border-[#ebebeb] px-4 focus:outline-none"
          placeholder="搜尋"
        />
      </div>
    </div>
  </header>
</template>
<style scoped>
.logo {
  background: url('https://www.lelabofragrances.com.tw/css/images/logonew.png') 0 0 / contain;
}
.side-menu {
  background: url('https://www.lelabofragrances.com.tw/css/images/btn-menu.png') center center
    no-repeat;
  background-size: 21px 18px;
}
</style>

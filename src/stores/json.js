import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useJsonStore = defineStore('json', () => {
  const menu = ref([
    '個人香氛系列',
    '室內香氛系列',
    '個人護理系列',
    '日常理容系列',
    '別緻小物',
    '禮品推薦',
    '探索體驗裝',
    '關於我們',
  ])

  const menuItem = ref([
    {
      menu: '個人香氛系列',
      name: '桉樹 20',
      img: 'https://lelabotaiwan-java.s3.amazonaws.com/images/categories/10_ONE_SIZE_IMAGE_01_12958_-417983193.jpg',
      childrens: [
        {
          title: '經典香氛',
          items: [
            { en: 'EUCALYPTUS', zh: '桉樹 20' },
            { en: 'LAVANDE', zh: '薰衣草 31' },
            { en: 'THÉ MATCHA', zh: '末茶 26' },
            { en: 'SANTAL', zh: '檀香 33' },
            { en: 'ANOTHER', zh: '別物 13' },
            { en: 'THÉ NOIR', zh: '黑茶 29' },
            { en: 'ROSE', zh: '玫瑰 31' },
            { en: 'BERGAMOTE', zh: '佛手柑 22' },
            { en: 'BAIE', zh: '樹果 19' },
            { en: 'LYS', zh: '百合 41' },
            { en: 'TONKA', zh: '東加豆 25' },
            { en: 'NEROLI', zh: '苦橙 36' },
            { en: 'YLANG', zh: '依蘭 49' },
            { en: "FLEUR D'ORANGER", zh: '橙花 27' },
            { en: 'PATCHOULI', zh: '廣藿香 24' },
            { en: 'LABDANUM', zh: '岩薔薇 18' },
            { en: 'JASMIN', zh: '茉莉 17' },
            { en: 'VETIVER', zh: '香根草 46' },
            { en: 'AMBRETTE', zh: '香葵 9' },
          ],
        },
        {
          title: '依形式',
          items: [
            { zh: '淡香精', en: '' },
            { zh: '探索體驗裝', en: '' },
            { zh: '身體乳液', en: '' },
            { zh: '沐浴膠', en: '' },
            { zh: '潤膚油', en: '' },
            { zh: '旅行用淡香精', en: '' },
            { zh: '滾珠香氛油', en: '' },
            { zh: '香氛皂', en: '' },
            { zh: '洗髮露', en: '' },
            { zh: '潤髮乳', en: '' },
            { zh: '洗沐旅行組', en: '' },
          ],
        },
      ],
    },
    {
      menu: '室內香氛系列',
      name: '絲柏 21',
      img: 'https://lelabotaiwan-java.s3.amazonaws.com/images/categories/11_ONE_SIZE_IMAGE_01_13211_870152021.jpg',
      childrens: [
        {
          title: '室內香氛',
          items: [
            { en: 'CYPRÈS', zh: '絲柏 21' },
            { en: 'AMBROXYDE', zh: '降龍涎香 17' },
            { en: 'SANTAL', zh: '檀香 26' },
            { en: 'ENCENS', zh: '乳香 9' },
            { en: 'PALO SANTO', zh: '聖壇木 14' },
            { en: 'CALONE', zh: '海洋 17' },
            { en: 'FIGUE', zh: '無花果 15' },
            { en: 'LAURIER', zh: '桂冠 62' },
            { en: 'PETIT GRAIN', zh: '苦橙葉 21' },
            { en: 'CADE', zh: '刺檜 26' },
            { en: 'PIN', zh: '松木 12' },
            { en: 'VERVEINE', zh: '馬鞭草 32' },
            { en: 'CEDRE', zh: '雪松 11' },
          ],
        },
        {
          title: '依形式',
          items: [
            { zh: '經典蠟燭', en: '' },
            { zh: '室內噴霧', en: '' },
            { zh: '水泥蠟燭', en: '' },
            { zh: '迷你蠟燭', en: '' },
          ],
        },
      ],
    },
  ])

  //   const fragrances = ref([
  //     { en: 'EUCALYPTUS 20', zh: '桉樹 20' },
  //     { en: 'LAVANDE 31', zh: '薰衣草 31' },
  //     { en: 'THÉ MATCHA 26', zh: '末茶 26' },
  //     { en: 'SANTAL 33', zh: '檀香 33' },
  //     { en: 'ANOTHER 13', zh: '別物 13' },
  //     { en: 'THÉ NOIR 29', zh: '黑茶 29' },
  //     { en: 'ROSE 31', zh: '玫瑰 31' },
  //     { en: 'BERGAMOTE 22', zh: '佛手柑 22' },
  //     { en: 'BAIE 19', zh: '樹果 19' },
  //     { en: 'LYS 41', zh: '百合 41' },
  //   ])

  //   const fragrances2 = ref([
  //     { en: 'TONKA 25', zh: '東加豆 25' },
  //     { en: 'NEROLI 36', zh: '苦橙 36' },
  //     { en: 'YLANG 49', zh: '依蘭 49' },
  //     { en: "FLEUR D'ORANGER 27", zh: '橙花 27' },
  //     { en: 'PATCHOULI 24', zh: '廣藿香 24' },
  //     { en: 'LABDANUM 18', zh: '岩薔薇 18' },
  //     { en: 'JASMIN 17', zh: '茉莉 17' },
  //     { en: 'VETIVER 46', zh: '香根草 46' },
  //     { en: 'AMBRETTE 9', zh: '香葵 9' },
  //   ])

  const actions = ref([
    {
      en: 'EUCALYPTUS 20',
      zh: '桉樹 20',
      desc: '經典香氛系列新作...',
      more: '查看更多',
    },
    {
      en: 'CYPRÈS 21',
      zh: '絲柏 21',
      desc: '深藏於林間的一處靜謐隱居地...',
      more: '查看更多',
    },
    {
      en: 'GROOMING',
      zh: '日常理容系列',
      desc: '挾帶復古風情的現代化質感配方',
      more: '查看更多',
    },
    {
      en: 'ABOUT LE LABO',
      zh: '我們的近況',
      desc: '自2006年起',
      more: '查看更多',
    },
  ])

  const product = ref([
    {
      img: 'https://lelabotaiwan-java.s3.amazonaws.com/images/skus/J3F201R000__PRODUCT_01--IMG_360--20EUCALYPTUS20-813887651.jpg',
      en: 'EUCALYPTUS 20',
      zh: '桉樹 20',
      capacity: '1.5 ml',
      smell: '探索體驗裝',
      price: 'NT $250',
    },
    {
      img: 'https://lelabotaiwan-java.s3.amazonaws.com/images/skus/J3F801R000__PRODUCT_01--IMG_360--20EUCALYPTUS20--1650988199.jpg',
      en: 'EUCALYPTUS 20',
      zh: '桉樹 20',
      capacity: '50ml',
      smell: '淡香精',
      price: 'NT $7,450',
    },
    {
      img: 'https://lelabotaiwan-java.s3.amazonaws.com/images/skus/J3FC01R000__PRODUCT_01--IMG_360--20EUCALYPTUS20--1864425932.jpg',
      en: 'EUCALYPTUS 20',
      zh: '桉樹 20',
      capacity: '100ml',
      smell: '淡香精',
      price: 'NT $10,650',
    },
    {
      img: 'https://lelabotaiwan-java.s3.amazonaws.com/images/skus/J3F601R000__PRODUCT_01--IMG_360--20EUCALYPTUS20--1294743830.jpg',
      en: 'EUCALYPTUS 20',
      zh: '桉樹 20',
      capacity: '1.5 ml',
      smell: '淡香精',
      price: 'NT $3,250',
    },
  ])

  const flootData = ref([
    {
      title: '關於Le Labo',
      txt: '關於我們',
    },
    {
      title: '關於Le Labo',
      txt: '探索體驗裝',
    },
    {
      title: '關於Le Labo',
      txt: 'Le Journal 品牌報紙',
    },
    {
      title: '關於Le Labo',
      txt: 'Accessibility View',
    },
    {
      title: '顧客服務',
      txt: '聯絡我們',
    },
    {
      title: '顧客服務',
      txt: '管理Cookies',
    },
    {
      title: '顧客服務',
      txt: '隱私權政策',
    },
    {
      title: '顧客服務',
      txt: '服務條款',
    },
    {
      title: '顧客服務',
      txt: '正版聲明',
    },
    {
      title: '與我們相見',
      txt: '實體店鋪位址',
    },
    {
      title: '與我們相見',
      txt: '實體店鋪服務',
    },
    {
      title: '與我們相見',
      txt: 'LINE',
    },
  ])
  return { menu, menuItem, flootData, product, actions }
})

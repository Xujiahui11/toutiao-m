<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="app-nav-bar">
      <van-button
        class="search-btn"
        slot="title"
        icon="search"
        type="info"
        round
        size="small"
        >搜索</van-button
      >
    </van-nav-bar>
    <!-- 导航栏 -->
    <!-- 文章频道列表 -->
    <van-tabs v-model="active">
      <van-tab
        v-for="chaneel in channels"
        :key="chaneel.id"
        :title="chaneel.name"
      >
        <article-list :channel="chaneel" />
      </van-tab>
    </van-tabs>
    <!-- 文章频道列表 -->
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user.js'
import ArticleList from './components/article-list'
export default {
  name: 'HomeIndex',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      active: 0, // 控制激活的标签
      channels: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannles()
  },
  mounted () {},
  methods: {
    // 文章列表
    async loadChannles () {
      const { data } = await getUserChannels()
      this.channels = data.data.channels
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  /deep/.van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    width: 277px;
    height: 32px;
    background-color: #5babfb;
    border: none;
    .van-button__text {
      font-size: 14px;
    }
    .van-icon {
      font-size: 16px;
    }
  }
}
</style>

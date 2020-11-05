<template>
  <div class="discover-container">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#0097dd">
      <van-swipe-item v-for="(item, index) in swipeLists" :key="index">
        <img class="banner" v-lazy="item.pic" />
      </van-swipe-item>
    </van-swipe>
    <TabBar>
      <template v-slot:content>
        <template v-for="(item, index) in tabBarList">
          <TabBarItem :key="index" :item="item"></TabBarItem>
        </template>
      </template>
    </TabBar>
    <TabBar>
      <template v-slot:title>
        <SubTitle :leftText="plSubTitle"></SubTitle>
      </template>
      <template v-slot:content>
        <template v-for="(item, index) in plRecommendList">
          <PlayListRecommend
            :key="index"
            :item="item.uiElement"
            :playCount="item.resources[0].resourceExtInfo.playCount"
          ></PlayListRecommend>
        </template>
      </template>
    </TabBar>
    <TabBar>
      <template v-slot:title>
        <SubTitle :leftText="styleRecommendLeftTitle" :rightText="styleRecommendRightTitle"></SubTitle>
      </template>
      <template v-slot:content>
        <van-swipe class="styleRecommend" :loop="false" :show-indicators="false">
          <template v-if="styleRecommend.length>0">
            <van-swipe-item v-for="(item, index) in styleRecommend" :key="index" ref="styleItem">
              <ul>
                <li class="sr-item" v-for="(subItem, index) in item.resources" :key="index">
                  <div class="left">
                    <img :src="subItem.uiElement.image.imageUrl" />
                  </div>
                  <div class="center">
                    <div class="song-info">
                      <span class="name">{{subItem.uiElement.mainTitle.title}}</span>
                      <span
                        class="singer"
                      >-{{subItem.resourceExtInfo.songData.alias[0]||''}}{{''+subItem.resourceExtInfo.songData.artists[0].name}}</span>
                    </div>
                    <div class="mark">
                      <span class="icon" v-if="subItem.uiElement.subTitle">独家</span>
                      <span
                        class="intro"
                        v-if="subItem.uiElement.subTitle"
                      >{{subItem.uiElement.subTitle.title}}</span>
                    </div>
                  </div>
                  <div class="right">
                    <img src="@/assets/img/play.png" />
                  </div>
                </li>
              </ul>
            </van-swipe-item>
          </template>
        </van-swipe>
      </template>
    </TabBar>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Tabs, Tab } from "vant";
import TabBar from "./components/TabBar";
import TabBarItem from "./components/TabBarItem.vue";
import PlayListRecommend from "./components/PlayListRecommend.vue";
import SubTitle from "@/components/common/SubTitle";

import { reqSwipeLists, reqHomePage } from "@/network/discoverApi";
export default {
  name: "discover",
  data() {
    return {
      swipeLists: [],
      tabBarList: [
        {
          icon: "day.png",
          text: "每日推荐"
        },
        {
          icon: "fm.png",
          text: "私人FM"
        },
        {
          icon: "playlist.png",
          text: "歌单"
        },
        {
          icon: "paihangbang.png",
          text: "排行榜"
        },
        {
          icon: "liaotian.png",
          text: "唱聊"
        },
        {
          icon: "zhibo.png",
          text: "直播"
        },
        {
          icon: "diantai.png",
          text: "电台"
        },
        {
          icon: "zhuanji.png",
          text: "数字专辑"
        }
      ],
      plRecommendList: [],
      plSubTitle: "",
      styleRecommendLeftTitle: "",
      styleRecommendRightTitle: "",
      styleRecommend: []
    };
  },
  methods: {
    async getSwipeLists() {
      const { banners } = await reqSwipeLists({
        type: 2
      });
      this.swipeLists = banners;
    },
    async getHomePage() {
      const { data } = await reqHomePage();
      this.plSubTitle = data.blocks[0].uiElement.subTitle.title;
      this.plRecommendList = data.blocks[0].creatives;
      this.styleRecommendLeftTitle = data.blocks[1].uiElement.subTitle.title;
      this.styleRecommendRightTitle = data.blocks[1].uiElement.button.text;
      this.styleRecommend = data.blocks[1].creatives;
    },
    initData() {
      this.getSwipeLists();
      this.getHomePage();
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    TabBar,
    TabBarItem,
    PlayListRecommend,
    SubTitle
  },
  mounted() {
    this.initData();
  }
};
</script>
<style lang="less" scoped>
.discover-container {
  padding: 0 12px;

  .my-swipe {
    width: 100%;
    margin: 0 auto;
    height: 136px;

    .van-swipe-item {
      .banner {
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
      }
    }
  }
  .styleRecommend {
    width: 100%;
    // margin: 0 auto;
    // height: 136.5px;
    .van-swipe-item {
      // width: 340px !important;
      .sr-item {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 5px 0;
        .left {
          width: 40px;
          img {
            width: 40px;
            border-radius: 8px;
          }
        }
        .center {
          width: 70%;
          padding-left: 10px;
          .song-info {
            display: flex;
            align-items: center;
            .name {
              font-size: 12px;
            }
            .singer {
              display: inline-block;
              font-size: 12px;
              transform-origin: 0 50%;
              transform: scale(0.8);
              color: #666;
            }
          }
          .mark {
            font-size: 0;
            color: #666;
            transform-origin: 0 50%;
            transform: scale(0.7);
            font-size: 12px;
            .icon {
              color: @ease-cloud-red;
              padding: 1px 2px;
              margin-right: 5px;
              border: 1px solid @ease-cloud-red;
              border-radius: 3px;
              display: inline-block;
            }
            // .intro {
            //   font-size: 12px;
            // }
          }
        }
        .right {
          width: 40px;
          img {
            width: 10px;
            border-radius: 50%;
            padding: 4px;
            border: 1px solid #ccc;
          }
        }
      }
    }
  }
}
</style>
<template>
  <section class="container wow fadeIn">
    <div class="container-text">
      <div class="text-content">
        <div class="text-item name wow fadeInUp">你好我是刘先生!</div>
        <div class="text-item job wow fadeInDown">
          一个前端开发<span class="job prominent">工程师</span>
        </div>
        <div class="text-item desc wow fadeInUp">
          喜欢钓鱼，爱好羽毛球，待过小型创业公司，潜力型创业公司，小公司和大型外包公司，爱倒腾的前端选手
        </div>
        <div class="wow fadeInLeft">
          <a class="yellow_btn">下载简历</a>
        </div>
      </div>
    </div>
    <div class="container-img">
      <img :src="photo" class="photo" alt="logo" />
    </div>
  </section>
</template>
<script setup lang="ts">
  import photoSrc from '@/assets/images/photo.jpg';

  const photo = photoSrc;
</script>

<style scoped lang="less">
  .container {
    display: flex;
    border-radius: 1.2rem;
    overflow: hidden;
    height: 49rem;
    margin-bottom: 0.9rem;
    box-sizing: border-box;
    margin: 0 1.5rem;
    .container-text {
      flex: 1;
      background-color: @main-color;
      color: #ffffff;
      justify-content: center;
      display: flex;
      align-items: center;
      .text-content {
        width: 50%;
        .text-item {
          margin-bottom: 2rem;
        }
        .name {
          font-size: 1.7rem;
        }
        .job {
          font-size: 2.2rem;
        }
        .desc {
          font-size: 1rem;
          margin-bottom: 3rem;
        }
        .prominent {
          color: @prominent-color;
        }
      }
      .yellow_btn {
        font-size: 1rem;
        padding: 0.9rem 3rem;
        border-radius: 0.4rem;
        color: #222;
        position: relative;
        background-color: @prominent-color;
        border: 1px solid @prominent-color;
        transition: all 0.5s;
        cursor: pointer;
      }
      .yellow_btn:hover {
        border: 1px solid #ffffff;
        background-color: transparent;
        color: @main-color;
        z-index: 1;
      }
      .yellow_btn:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 50%;
        left: 50%;
        opacity: 0;
        border-radius: 0.3rem;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        background-color: #ffffff;
      }
      .yellow_btn:hover:before {
        right: 0;
        left: 0;
        opacity: 1;
        z-index: -1;
        background-color: #ffffff;
      }
    }
    .container-img {
      width: 40rem;
      .photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .container-img {
      display: none;
    }
  }
</style>

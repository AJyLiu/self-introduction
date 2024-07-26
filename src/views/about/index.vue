<template>
  <section class="mian-container about-me">
    <div class="img-box wow fadeInLeft">
      <img v-lazy="aboutMe" class="about-me-img" alt="aboutMe" />
    </div>
    <div class="text-box">
      <div class="wow fadeInUp">
        <h1 class="title">关于我</h1>
        <p class="about-item">
          为人诚恳、乐观向上、拥有较强的组织能力和适应能力,
          富有团队精神和团队意识，对 IT 事业有向往，热衷前端开发技术,
          对待需求，对待业务有很强的责任心
        </p>
        <p class="about-item">
          具有丰富的项目经验和技术专长，擅长团队管理、前端性能优化、安全整改、模块化、组件化和hooks开发，以及丰富的图形可视化经验，
          对易用性和用户体验有自己的经验积累，曾参与ToB、ToC，大屏可视化、电子流等项目开发，熟悉小程序开发模式，
          能够迅速上手开发各种类型的项目，同时了解Java，MySQL等后端技术，曾有后端开发经验
        </p>
      </div>
      <div class="basic-info wow fadeInUp">
        <h1 class="title basic-info-title">基本信息</h1>
        <ElForm
          :model="formData"
          label-width="120px"
          style="padding-top: 0.7rem"
        >
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12">
              <el-form-item label="出生日期：">
                <span>1993-01-03</span>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12">
              <el-form-item label="电话号码：">
                <span>{{ handlePhoneHide('18008044071') }}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12">
              <el-form-item label="毕业院校：">
                <span>攀枝花学院</span>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12">
              <el-form-item label="院校类别：">
                <span>普通全日制</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12">
              <el-form-item label="专业：">
                <span>软件工程</span>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12">
              <el-form-item label="学历：">
                <span>本科</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12">
              <el-form-item label="邮箱：">
                <span>{{ handleEmailHide('903803024@qq.com') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12">
              <el-form-item label="地址：">
                <span>四川省成都市</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12">
              <el-form-item label="微信小程序：">
                <el-tooltip
                  :content="tooltipContent"
                  raw-content
                  placement="top"
                  effect="light"
                >
                  <a style="cursor: pointer; color: #2785ff">JyLiu</a>
                </el-tooltip>
              </el-form-item>
            </el-col>
          </el-row>
        </ElForm>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import aboutMe from '@/assets/images/aboutMe.jpg';
  import wxMiniProgram from '@/assets/images/wx-mini-program.jpg';
  import { handlePhoneHide, handleEmailHide } from '@/utils/commonUitls';

  const formData = ref({
    birthDay: '1993-01-03',
    phone: '18008044071'
  });

  const tooltipContent = `
    <img
          style="width: 10rem; height: 10rem; object-fit: cover;"
          src="${wxMiniProgram}"
          alt="wx-mini-program"
        />
  `;
</script>

<style scoped lang="less">
  .about-me {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    .img-box {
      width: 300px;
      height: 400px;
      border: 8px solid @prominent-color;
      .about-me-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .text-box {
      flex: 1;
      padding: 0 2rem;
      font-size: 1rem;
      color: @textColor;
      overflow: visible;
      .title {
        color: @titleColor;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.8rem;
      }
      .about-item {
        padding: 0.7rem 0;
      }
      .about-item:last-child {
        padding-bottom: 2rem;
      }
      .basic-info {
        position: relative;
      }
      .basic-info-title {
        border-top: 1px solid #cccccc;
        padding-top: 20px;
      }
    }
    :deep(.el-form-item__label) {
      color: #000;
    }
  }
  @media screen and (max-width: 1199px) {
    .about-me {
      padding: 80px 20px;
      flex-direction: column;
      .img-box {
        margin: 0 auto;
        margin-bottom: 2rem;
      }
      .text-box {
        padding: 0 1rem;
        .title {
          text-align: center;
        }
      }
    }
  }
</style>

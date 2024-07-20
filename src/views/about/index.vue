<template>
  <section class="mian-container about-me">
    <div class="img-box wow fadeInLeft">
      <img :src="aboutMe" class="about-me-img" alt="aboutMe" />
    </div>
    <div class="text-box">
      <div class="wow fadeInUp">
        <h1 class="title">About Me</h1>
        <p class="about-item">
          为人诚恳、乐观向上、拥有较强的组织能力和适应能力,
          富有团队精神和团队意识，对 IT 事业有向往，热衷前端开发技术,
          对待需求，对待业务有很强的责任心
        </p>
        <p class="about-item">
          有团队小组长管理经验，熟悉整个项目开发流程，曾带领3~4人从0到1完成整个ToB项目开发；
          有前端性能优化经验，完成项目性能优化指标，国内1s国外3s达标率93%；
          有前端安问题全整改经验，在项目中完成安全整改并满足安全送检需求。如XSS、CSRF、不安全的依赖库、敏感信息泄露等；
          有丰富的模块化、组件化、hooks使用经验；
          有ToB、ToC，大屏数据可视化、电子流等项目经验，同时了解小程序开发模式，能迅速上手开发；
          对易用性和用户体验有自己的经验积累，在项目中对易用性和用户体验进行整改后，用户满意度提升20%；
          了解Java，MySQL等后端技术，曾有后端开发经验；
        </p>
      </div>
      <div class="basic-info wow fadeInUp">
        <h1 class="title basic-info-title">Basic Info</h1>
        <ElForm :model="formData" label-width="120px">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="出生日期：">
                <span>1993-01-03</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="电话号码：">
                <span>18008044071</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="毕业院校：">
                <span>攀枝花学院</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="院校类别：">
                <span>普通全日制</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="专业：">
                <span>软件工程</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="学历：">
                <span>本科</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="邮箱：">
                <span>903803024@qq.com</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="地址：">
                <span>四川省成都市</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="微信小程序：">
                <span>JyLiu</span>
              </el-form-item>
            </el-col>
          </el-row>
        </ElForm>

        <img
          class="wx-mini-program wow fadeInRight"
          :src="wxMiniProgram"
          alt="wx-mini-program"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import aboutMe from '@/assets/images/aboutMe.jpg';
  import wxMiniProgram from '@/assets/images/wx-mini-program.jpg';

  const formData = ref({
    birthDay: '1993-01-03',
    phone: '18008044071'
  });
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
      padding: 0 30px;
      font-size: 16px;
      color: @textColor;
      overflow: visible;
      .title {
        color: @titleColor;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .about-item {
        padding: 10px 0;
      }
      .about-item:last-child {
        padding-bottom: 20px;
      }
      .basic-info {
        position: relative;
        .wx-mini-program {
          position: absolute;
          bottom: -8rem;
          right: 0;
          width: 10rem;
          height: 10rem;
          object-fit: cover;
        }
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
  @media screen and (min-width: 992px) and (max-width: 1320px) {
    .about-me {
      padding: 80px 20px;
    }
  }
</style>

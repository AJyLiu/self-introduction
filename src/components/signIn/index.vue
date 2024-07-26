<template>
  <section class="sign-in">
    <div class="bg bg-top wow fadeInDown"></div>
    <div class="bg bg-bottom wow fadeInUp"></div>
    <div class="login-box wow fadeInRight">
      <h1>
        <UserFilled
          style="width: 1.7rem; height: 1.7rem; margin-right: 0.3rem"
        />登录
      </h1>
      <ElForm label-width="0" :model="loginForm">
        <ElFormItem style="margin-bottom: 1rem" required>
          <ElInput v-model="loginForm.userName" size="large" prefix-icon="User">
          </ElInput>
        </ElFormItem>
        <ElFormItem required>
          <ElInput
            v-model="loginForm.password"
            size="large"
            prefix-icon="Unlock"
          >
          </ElInput>
        </ElFormItem>
        <ElFormItem class="bottom-form-item">
          <el-checkbox
            v-model="loginForm.checkMe"
            label="记住我"
            size="large"
          />
          <a class="forgot-password">忘记密码？</a>
        </ElFormItem>
        <ElFormItem>
          <el-button
            color="#0B848C"
            size="large"
            style="width: 100%"
            @click="handleSignIn"
            >登录</el-button
          >
        </ElFormItem>
      </ElForm>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const emit = defineEmits(['sign-in']);

  const loginForm = reactive({
    userName: '',
    password: '',
    checkMe: false
  });

  const handleSignIn = () => {
    emit('sign-in');
  };
</script>

<style scoped lang="less">
  .sign-in {
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    .bg {
      height: 50vh;
    }
    .bg-top {
      background-color: @main-color;
    }
    .bg-bottom {
      background-color: #e7e7e7;
    }
    .login-box {
      width: 25rem;
      height: 25rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background-color: #ffffff;
      box-shadow: 0 0 20px #00000026;
      border-radius: 4px;
      padding: 1rem 2rem;
      box-sizing: border-box;
      color: @titleColor;
      h1 {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        font-weight: 100;
        margin-bottom: 3rem;
      }
      .forgot-password {
        font-size: 0.8rem;
        color: #0b848c;
        cursor: pointer;
      }
      .bottom-form-item {
        margin: 0 0 3rem 0;
        :deep(.el-form-item__content) {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>

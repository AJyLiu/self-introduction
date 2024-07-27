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
      <ElForm
        ref="ruleFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="0"
      >
        <ElFormItem style="margin-bottom: 1.5rem" prop="userName">
          <ElInput
            v-model="loginForm.userName"
            size="large"
            prefix-icon="User"
            placeholder="用户名"
          >
          </ElInput>
        </ElFormItem>
        <ElFormItem prop="password">
          <ElInput
            v-model="loginForm.password"
            type="password"
            size="large"
            prefix-icon="Unlock"
            show-password
            placeholder="密码"
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
        <ElFormItem>
          <el-button
            size="large"
            style="width: 100%; margin-top: 1rem"
            @click="cancleSignIn"
            >取消</el-button
          >
        </ElFormItem>
      </ElForm>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import type { FormRules, FormInstance } from 'element-plus';
  import { ElMessageBox } from 'element-plus';
  import { Base64 } from 'js-base64';

  const emit = defineEmits(['sign-in', 'sign-out']);

  interface RuleForm {
    userName: string;
    password: string;
    checkMe?: boolean;
  }

  const loginForm = reactive<RuleForm>({
    userName: '',
    password: '',
    checkMe: false
  });
  const ruleFormRef = ref<FormInstance>();
  const rules = reactive<FormRules<RuleForm>>({
    userName: [
      {
        required: true,
        message: 'Please input user name',
        trigger: ['change', 'blur']
      },
      {
        min: 1,
        max: 20,
        message: 'Length should be 0 to 20',
        trigger: ['change', 'blur']
      }
    ],
    password: [
      {
        required: true,
        message: 'Please input password',
        trigger: ['change', 'blur']
      }
    ]
  });

  const isLoginIn = () => {
    ElMessageBox.confirm('用户名或密码错误，请检查后重试！', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    })
      .then(() => {})
      .catch(() => {});
    return false;
  };

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) {
      return;
    }
    await formEl.validate((valid) => {
      if (valid && isLoginIn()) {
        if (loginForm.checkMe) {
          const { userName, password } = loginForm;
          setCookie(userName, password, 7);
        } else {
          clearCookie();
        }
        emit('sign-in');
      }
    });
  };

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };

  const handleSignIn = () => {
    submitForm(ruleFormRef.value);
  };
  const cancleSignIn = () => {
    resetForm(ruleFormRef.value);
    emit('sign-out');
  };

  const setCookie = (userName: string, password: string, exDays: number) => {
    const exDate = new Date();
    exDate.setTime(exDate.getTime() + 24 * 60 * 60 * 1000 * exDays);

    window.document.cookie = `userName=${userName};path/;expires=${exDate.toUTCString()}`;
    window.document.cookie = `password=${Base64.encode(Base64.encode(password))};path/;expires=${exDate.toUTCString()}`;
  };

  const getCookie = () => {
    if (document.cookie.length > 0) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const res = cookies[i].split('=');

        if (res[0].trim() === 'userName') {
          loginForm.userName = res[1];
        }

        if (res[0].trim() === 'password') {
          loginForm.password = Base64.decode(Base64.decode(res[1]));
        }
      }
    }
  };

  const clearCookie = () => {
    setCookie('', '', -1);
  };

  getCookie();
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
        margin: 0.7rem 0 1rem 0;
        :deep(.el-form-item__content) {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>

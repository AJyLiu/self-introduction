// 计算年月时间差
export const getMonthDifference = (
  startTime: string | number,
  endTime: string | number
): number => {
  const dt1 = new Date(startTime);
  const dt2 = new Date(endTime);
  const diff =
    dt2.getFullYear() * 12 +
    dt2.getMonth() -
    dt1.getFullYear() * 12 -
    dt1.getMonth();
  return Math.abs(diff);
};

// 手机号脱敏
export const handlePhoneHide = (phone: string | number): string => {
  const phoneStr = typeof phone === 'string' ? phone : String(phone);
  if (!phoneStr) {
    return phoneStr;
  }
  const reg = /^(1[3-9][0-9])\d{4}(\d{4}$)/; // 定义手机号正则表达式
  return phoneStr.replace(reg, '$1****$2'); // 输出为131****1234
};

// 邮箱脱敏
export const handleEmailHide = (email: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return email;
  }

  let avg: number = 0;
  let splitted: string[] = [];
  let emailStart: string;

  splitted = email.split('@');
  emailStart = splitted[0];
  avg = emailStart.length / 2;
  emailStart = emailStart.substring(0, emailStart.length - avg);
  const emailEnd = splitted[1];

  return `${emailStart}***@${emailEnd}`; // 输出为11223***@qq.com
};

// 防抖
export const debounce = (fn: (...args: any) => void, delay: number) => {
  let timeoutId: number | null = null;
  return function (...args: any) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

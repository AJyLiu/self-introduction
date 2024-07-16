export const useNumberAnimationHook = (options: {
  from: number;
  to: number;
  duration: number;
  onProgress: (v: number) => void;
}) => {
  const { from, to, duration, onProgress } = options;
  let value: number = from;
  // 计算增长速度
  const speed = (to - from) / duration;
  // 起始时间
  const startTime = Date.now();

  const run = () => {
    // 间隔时间
    const t = Date.now() - startTime;
    // 当时间间隔大于延时时间时终止
    if (t > duration) {
      value = to;
      onProgress?.(value);
      return;
    }
    value = from + t * speed;
    onProgress?.(value);

    // 继续执行
    requestAnimationFrame(run);
  };
  run();
};

export const CACHE_TIME = (() => {
  const time = parseInt(process.env.CACHE_TIME ?? "", 10);
  return Number.isNaN(time) ? 0 : time;
})();

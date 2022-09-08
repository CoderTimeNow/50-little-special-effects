// 获取按钮元素
const open = document.getElementById("open");
const close = document.getElementById("close");
// 获取容器元素
const container = document.querySelector(".container");

// 注册点击事件
open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));

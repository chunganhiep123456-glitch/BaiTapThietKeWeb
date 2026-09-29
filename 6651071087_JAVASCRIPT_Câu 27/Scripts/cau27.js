var bang = document.getElementById("bang");

// Bấm nút Xóa: xóa dòng chứa nút đó
bang.addEventListener("click", function (e) {
  if (e.target.classList.contains("xoa")) {
    var dong = e.target.parentNode.parentNode; // input -> td -> tr
    dong.parentNode.removeChild(dong);
  }
});

// Đổi số lượng / đơn giá: tính lại cột Tổng của dòng đó
bang.addEventListener("input", function (e) {
  if (e.target.classList.contains("sl") || e.target.classList.contains("dg")) {
    var dong = e.target.parentNode.parentNode;
    var sl = parseFloat(dong.querySelector(".sl").value);
    var dg = parseFloat(dong.querySelector(".dg").value);
    dong.querySelector(".tong").value = (isNaN(sl) || isNaN(dg)) ? "" : sl * dg;
  }
});

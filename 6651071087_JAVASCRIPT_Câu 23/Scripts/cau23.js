function tinhLuong() {
  var luong = document.getElementById("luong").value.trim();
  var heso = parseFloat(document.getElementById("heso").value);
  var o = document.getElementById("luongthang");
  if (luong === "" || isNaN(luong) || Number(luong) < 0) {
    o.style.color = "red";
    o.innerHTML = "Lương không hợp lệ!";
    return;
  }
  o.style.color = "";
  o.innerHTML = Math.round(Number(luong) * heso);
}
document.getElementById("btnTinh").addEventListener("click", tinhLuong);

var sel = document.getElementById("thang");
for (var i = 1; i <= 12; i++) sel.innerHTML += "<option value='" + i + "'>" + i + "</option>";

function xuatThu() {
  var d = parseInt(document.getElementById("ngay").value);
  var m = parseInt(sel.value);
  var y = parseInt(document.getElementById("nam").value);
  var o = document.getElementById("ketqua");
  var dt = new Date(2000, 0, 1);
  dt.setFullYear(y, m - 1, d);
  if (isNaN(d) || isNaN(y) || y < 1 || dt.getDate() !== d || dt.getMonth() !== m - 1) {
    o.style.color = "red";
    o.innerHTML = "Ngày tháng năm không hợp lệ!";
    return;
  }
  o.style.color = "";
  var w = dt.getDay(); // 0 = Chủ nhật
  var thu = (w === 0) ? "Chủ nhật" : "Thứ " + (w + 1);
  o.innerHTML = thu + " Ngày " + d + " tháng " + m + " năm " + y;
}
document.getElementById("btnThu").addEventListener("click", xuatThu);

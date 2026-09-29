var CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
var CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

function tinhCanChi() {
  var v = document.getElementById("nam").value.trim();
  var loi = document.getElementById("loi");
  var kq = document.getElementById("canchi");
  loi.innerHTML = "";
  kq.value = "";
  // validate: không rỗng, chỉ gồm chữ số, là số nguyên dương
  if (v === "") { loi.innerHTML = "Vui lòng nhập năm!"; return; }
  if (!/^[0-9]+$/.test(v)) { loi.innerHTML = "Năm phải là số nguyên dương!"; return; }
  var y = parseInt(v);
  if (y < 4 || y > 9999) { loi.innerHTML = "Năm phải nằm trong khoảng 4 - 9999!"; return; }
  kq.value = CAN[(y + 6) % 10] + " " + CHI[(y + 8) % 12];
}
document.getElementById("btnTinh").addEventListener("click", tinhCanChi);

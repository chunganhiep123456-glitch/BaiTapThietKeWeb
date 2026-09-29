function laySo() {
  var a = document.getElementById("so1").value.trim();
  var b = document.getElementById("so2").value.trim();
  var kq = document.getElementById("kq");
  kq.className = "";
  if (a === "" || b === "" || !Number.isInteger(Number(a)) || !Number.isInteger(Number(b))) {
    kq.className = "loi";
    kq.innerHTML = "Vui lòng nhập hai số nguyên hợp lệ!";
    return null;
  }
  return [Number(a), Number(b)];
}
function nhan() {
  var s = laySo();
  if (s) document.getElementById("kq").innerHTML = s[0] * s[1];
}
function chia() {
  var s = laySo();
  if (!s) return;
  var kq = document.getElementById("kq");
  if (s[1] === 0) { kq.className = "loi"; kq.innerHTML = "Không thể chia cho 0!"; }
  else kq.innerHTML = s[0] / s[1];
}
document.getElementById("btnNhan").addEventListener("click", nhan);
document.getElementById("btnChia").addEventListener("click", chia);

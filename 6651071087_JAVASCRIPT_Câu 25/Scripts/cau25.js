var thucAn = [["Bún bò", 20000], ["Hủ tiếu", 18000], ["Bánh canh", 17000], ["Phở bò", 19000],
              ["Nuôi", 15000], ["Bánh mì thịt", 12000], ["Bánh cuốn", 15000]];
var nuocUong = [["Cà phê đá", 12000], ["Cà phê sữa", 15000], ["Chanh dây", 13000], ["Chanh muối", 12000],
                ["Xí muội", 14000], ["Sữa tươi", 13000], ["Cam vắt", 17000]];

function napDanhSach(id, ds) {
  var s = document.getElementById(id);
  for (var i = 0; i < ds.length; i++) {
    var op = document.createElement("option");
    op.value = i;
    op.text = ds[i][0];
    s.add(op);
  }
}
napDanhSach("thucan", thucAn);
napDanhSach("nuocuong", nuocUong);

function layMon(id, ds) {
  var s = document.getElementById(id), kq = [];
  for (var i = 0; i < s.options.length; i++) {
    if (s.options[i].selected) kq.push(ds[s.options[i].value]);
  }
  return kq;
}

function tinhTien() {
  var mon = layMon("thucan", thucAn).concat(layMon("nuocuong", nuocUong));
  var o = document.getElementById("hoadon");
  if (mon.length === 0) {
    o.innerHTML = "<span style='color:red'>Vui lòng chọn ít nhất một món!</span>";
    return;
  }
  var tong = 0;
  var h = "<table class='hoadon'><tr><th>Các món đã dùng</th><th>Tiền</th></tr>";
  for (var i = 0; i < mon.length; i++) {
    h += "<tr><td>" + mon[i][0] + "</td><td>" + mon[i][1] + "</td></tr>";
    tong += mon[i][1];
  }
  var dem = document.querySelector("input[name='tg']:checked").value === "dem";
  if (dem) {
    var phuThu = tong * 0.1;
    h += "<tr><td>Phụ thu ban đêm (10%)</td><td>" + phuThu + "</td></tr>";
    tong += phuThu;
  }
  h += "<tr><td>Tổng tiền</td><td>" + tong + " đồng</td></tr></table>";
  o.innerHTML = h;
}
document.getElementById("btnTinh").addEventListener("click", tinhTien);

var thu = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
var d = new Date(2023, 8, 5); // 05/09/2023 (tháng tính từ 0)
document.write("Ngày " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() +
               " là " + thu[d.getDay()]);

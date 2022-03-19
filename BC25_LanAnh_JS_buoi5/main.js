
// bài 1
var diemThiTong = 0;
var diemKhuVuc = 0;
var diemDoiTuong = 0;
var diemTongBaMon = 0;
const khuVucUuTien = (khuVuc) => {
  if (khuVuc == "A") return 2;
  else if (khuVuc == "B") return 1;
  else if (khuVuc == "C") return 0.5;
  else if (khuVuc == "X") return 0;
};
const doiTuongThi = (doiTuong) => {
  if (doiTuong == "1") return 2.5;
  else if (doiTuong == "2") return 1.5;
  else if (doiTuong == "3") return 1;
  else if (doiTuong == "0") return 0;
};
const tinhTongBaMon = (mon1, mon2, mon3) => {
  var ketQua = mon1 + mon2 + mon3;
  return ketQua;
};
const tinhDiemTong = (khuVuc, doiTuong, mon1, mon2, mon3) => {
  diemTongBaMon = tinhTongBaMon(mon1, mon2, mon3);
  diemKhuVuc = khuVucUuTien(khuVuc);
  diemDoiTuong = doiTuongThi(doiTuong);
  diemThiTong = diemTongBaMon + diemKhuVuc + diemDoiTuong;
  return diemThiTong;
};
document.getElementById("kq2").onclick = function () {
  var diemChuan = document.getElementById("diemChuan").value;
  var diem1 = document.getElementById("diem1").value * 1;
  var diem2 = document.getElementById("diem2").value * 1;
  var diem3 = document.getElementById("diem3").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;
  var thongBao = document.querySelector(".footer1");
  diemThiTong = tinhDiemTong(khuVuc, doiTuong, diem1, diem2, diem3);
  if (diemChuan > diemThiTong) {
    thongBao.innerHTML = `Chúc bạn may mắn lần sau :< ! <br> Tổng số điểm đạt được là : ${diemThiTong}`;
  } else {
    thongBao.innerHTML = `Đậu gòi nha ^^ ! <br> Tổng số điểm đạt được là : ${diemThiTong}`;
  }
};

// bài 2

const KW = 500; // tức là 0 tới 50
const KW_50 = 650; // tức là 51 tới 100
const KW_100 = 850; // tức là 101 tới 200
const KW_200 = 1100; // tức là 201 tới 350
const KW_PLUS = 1300; // tức là từ 351 trở đi
const BILL_50 = 50 * KW; // Tổng tiền khi 50
const BILL_100 = BILL_50 + 50 * KW_50; // Tổng tiền khi 100
const BILL_200 = BILL_100 + 100 * KW_100; // Tổng tiền khi 200
const BILL_PLUS = BILL_200 + 150 * KW_200; // Tổng tiền khi 350
//format tien te
const formatVND = new Intl.NumberFormat("vn-VN").format;

//tinh tien
const tienDien = (kw) => {
  let result;
  if (kw > 0 && kw < 51) result = kw * KW;
  else if (kw > 50 && kw < 101) result = (kw - 50) * KW_50 + BILL_50;
  else if (kw > 100 && kw < 201) result = (kw - 100) * KW_100 + BILL_100;
  else if (kw > 200 && kw < 351) result = (kw - 200) * KW_200 + BILL_200;
  else if (kw > 350) result = (kw - 350) * KW_PLUS + BILL_PLUS;
  else result = "Vui lòng nhập đúng số kw đã xài!";
  return result;
};
const test = document.getElementById("result-1");

document.getElementById("btnresult").onclick = () => {
  let soKw = document.getElementById("soKw").value * 1;
  let name = document.getElementById("name").value;

  test.innerHTML = `Tổng tiền điện của ${name} là: ${formatVND(
    tienDien(soKw)
  )}`;
};
// Bài Tập 1: Tính Điểm Chuẩn
function exe1() {
  let standardPoint = +document.getElementById("input-standardPoint").value;
  let point1 = +document.getElementById("input-point1").value;
  let point2 = +document.getElementById("input-point2").value;
  let point3 = +document.getElementById("input-point3").value;
  let areaA = document.getElementById("area-A");
  let areaB = document.getElementById("area-B");
  let areaC = document.getElementById("area-C");
  let object1 = document.getElementById("object-1");
  let object2 = document.getElementById("object-2");
  let object3 = document.getElementById("object-3");
  let sumPoint = 0;
  let total = 0;
  sumPoint = point1 + point2 + point3;
  if (point1 === 0 || point2 === 0 || point3 === 0) {
    return "Điểm Liệt";
  } else if (areaA.selected) {
    if (object1.selected) {
      total = sumPoint + 2 + 2.5;
    } else if (object2.selected) {
      total = sumPoint + 2 + 1.5;
    } else if (object3.selected) {
      total = sumPoint + 2 + 1;
    } else {
      total = sumPoint;
    }
  } else if (areaB.selected) {
    if (object1.selected) {
      total = sumPoint + 1 + 2.5;
    } else if (object2.selected) {
      total = sumPoint + 1 + 1.5;
    } else if (object3.selected) {
      total = sumPoint + 1 + 1;
    } else {
      total = sumPoint;
    }
  } else if (areaC.selected) {
    if (object1.selected) {
      total = sumPoint + 0.5 + 2.5;
    } else if (object2.selected) {
      total = sumPoint + 0.5 + 1.5;
    } else if (object3.selected) {
      total = sumPoint + 0.5 + 1;
    } else {
      total = sumPoint;
    }
  } else {
    return (total = sumPoint);
  }

  if (total >= standardPoint) {
    document.getElementById(
      "output-1"
    ).innerHTML = `Đậu -- ${total} / ${standardPoint}điểm`;
    document.getElementById("output-1").classList.remove("d-none");
  } else {
    document.getElementById(
      "output-1"
    ).innerHTML = `Rớt -- ${total} / ${standardPoint}điểm`;
    document.getElementById("output-1").classList.remove("d-none");
  }
}
// Bài Tập 2: Tính Tiền Điện
function exe2() {
  let nameEl = document.getElementById("input-name").value;
  let kw = +document.getElementById("input-electric").value;
  let totalPrice = 0;

  if (kw <= 50) {
    totalPrice += 500 * kw;
  } else if (kw <= 100) {
    totalPrice += 500 * 50 + 650 * (kw - 50);
  } else if (kw <= 200) {
    totalPrice += 500 * 50 + 650 * 50 + 850 * (kw - 100);
  } else if (kw <= 350) {
    totalPrice += 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (kw - 200);
  } else {
    totalPrice +=
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (kw - 350);
  }

  document.getElementById(
    "output-2"
  ).innerHTML = ` ${nameEl}: ${totalPrice.toLocaleString()} vnd`;
  document.getElementById("output-2").classList.remove("d-none");
}

// Bài Tập 3: Tính Thuế Thu Nhập Cá Nhân
function exe3() {
  let name2El = document.getElementById("input-name2").value;
  let icome = +document.getElementById("input-icome").value;
  let people = +document.getElementById("input-people").value;

  let icomeTaxes = 0;
  icomeTaxes = icome - 4 - people * 1.6;

  let taxes = 0;
  if (icomeTaxes <= 60) {
    taxes = icomeTaxes * 0.05;
  } else if (icomeTaxes > 60 && icomeTaxes <= 120) {
    taxes = icomeTaxes * 0.1;
  } else if (icomeTaxes > 120 && icomeTaxes <= 210) {
    taxes = icomeTaxes * 0.15;
  } else if (icomeTaxes > 210 && icomeTaxes <= 384) {
    taxes = icomeTaxes * 0.2;
  } else if (icomeTaxes > 384 && icomeTaxes <= 624) {
    taxes = icomeTaxes * 0.25;
  } else if (icomeTaxes > 624 && icomeTaxes <= 960) {
    taxes = icomeTaxes * 0.3;
  } else {
    taxes = icomeTaxes * 0.35;
  }

  let taxesVND = 0;
  taxesVND = taxes * 1_000_000;
  document.getElementById(
    "output-3"
  ).innerHTML = ` ${name2El}: ${taxesVND.toLocaleString()} vnd`;
  document.getElementById("output-3").classList.remove("d-none");
}

// Bài Tập 4: Tính Tiền Cáp
const changeValue = (showConnect) => {
  if (showConnect.value === "2") {
    document.getElementById("hide-connect").classList.remove("d-none");
  }
};

function exe4() {
  let numChanel = +document.getElementById("input-numChanel").value;
  let numConnect = +document.getElementById("input-numConnect").value;
  let customerCode = document.getElementById("input-customerCode").value;
  let houseHolds = document.getElementById("houseHolds");
  let enterprise = document.getElementById("enterprise");

  let totalMoney = 0;
  if (houseHolds.selected) {
    totalMoney = 4.5 + 20.5 + numChanel * 7.5;
    console.log(totalMoney);
  } else if (enterprise.selected) {
    if (numConnect <= 10) {
      totalMoney = 15 + 75 * numConnect + 50 * numChanel;
    } else {
      totalMoney = 15 + 75 * 10 + 5 * (numConnect - 10) + 50 * numChanel;
    }
  } else {
    alert("Vui lòng chọn loại khách hàng");
  }

  document.getElementById(
    "output-4"
  ).innerHTML = `${customerCode} -- Tiền cáp: ${totalMoney} $`;
  document.getElementById("output-4").classList.remove("d-none");
}

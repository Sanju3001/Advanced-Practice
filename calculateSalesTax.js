var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {

  var ABTaxRate = taxRates.AB;
  var BCTaxRate = taxRates.BC;
  var SKTaxRate = taxRates.SK;

  var totalTax;
  var result = {};

  for (var i in salesData) {

    var sum = salesData[i]["sales"].reduce((a, b) => a + b, 0);

    if (salesData[i]["province"] == "AB") {

      totalTax = sum * ABTaxRate;
      salesData[i]["totalTaxes"] = totalTax;

    }

    if (salesData[i]["province"] == "BC") {

        totalTax = sum * BCTaxRate;
        salesData[i]["totalTaxes"] = totalTax;

    }

    if (salesData[i]["province"] == "SK") {

        totalTax = sum * SKTaxRate;
        salesData[i]["totalTaxes"] = totalTax;

    }

    salesData[i]["sales"] = sum;

    }


    salesData.forEach (function (e) {

      delete e.province;

    });


  for (var i in salesData) {

    if (result[salesData[i]["name"]] == undefined ) {

      result[salesData[i]["name"]] = {
        totalSales: salesData[i]["sales"],
        totalTaxes: salesData[i]["totalTaxes"]
      };

    } else {

      result[salesData[i]["name"]]["totalSales"] += salesData[i]["sales"]
      result[salesData[i]["name"]]["totalTaxes"] += salesData[i]["totalTaxes"]
    }

  }


return result;

  //console.log(applyTaxRate(salesInfo));

}

//console.log(companySalesData.length);

//}

console.log(calculateSalesTax(companySalesData, salesTaxRates));




// var dd = 'dsdsdsds '  
const fs = require('fs')

const toNum = (val) => parseFloat(String(val).replace(/\s/g))
  const parser = new (require('simple-excel-to-json').XlsParser)();
  const doc = parser.parseXls2Json('pesel.xlsx');
  const arr = doc[0]
  const id = arr.map((element) => toNum(element.Pesel))
  console.log(id)
  const text = fs.readFileSync("log.txt").toString().split(' ').map(element => toNum(element))
  console.log(text)
  const result = id.filter(x => !text.includes(x));
  console.log(result);



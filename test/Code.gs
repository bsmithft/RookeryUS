//Ref: https://datatables.net/forums/discussion/comment/145428/#Comment_145428
//Ref: https://datatables.net/examples/styling/bootstrap4

/*
# CREATED BY: BPWEBS.COM
# URL: https://www.bpwebs.com
*/

function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData() {
  var spreadSheetId = "1x-uWVAZGbSF6C8Ni9oN-N4clfZfbrmqELI2LnC_nuaE"; //CHANGE
  var dataRange = "Sheet1!A2:C"; //CHANGE

  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;

  return values;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
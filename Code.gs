function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var name = d.tip === 'sondaj' ? 'Sondaj' : 'Test';
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (sh.getLastRow() === 0) sh.appendRow(Object.keys(d));
    var head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
    sh.appendRow(head.map(function (k) { return d[k] !== undefined ? d[k] : ''; }));
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput('ok');
}

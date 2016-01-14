try {
   throw "myException" // 產生例外
}
catch (e) {
// 用來處理任何例外的語句
   logMyErrors(e) // 把例外物件傳給錯誤處理器
}

try {
   writeMyFile(theData); // 這裡有可能拋出錯誤
}catch(e){
   handleError(e); // 如果我們得到錯誤，就處理他
}finally {
   closeMyFile(); // 永遠會關閉這項資源
}

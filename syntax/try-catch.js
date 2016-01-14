try {
   throw "myException" // 產生例外
}
catch (e) {
// 用來處理任何例外的語句
   logMyErrors(e) // 把例外物件傳給錯誤處理器
}

try {
// 可以拋出三個例外的函數
   getCustInfo("Lee", 1234, "lee@netscape.com")
}

catch (e if e == "InvalidNameException") {
// 針對無效的名稱呼叫處理器
   bad_name_handler(e)
}

catch (e if e == "InvalidIdException") {
// 針對無效的 ID 呼叫處理器
   bad_id_handler(e)
}

catch (e if e == "InvalidEmailException") {
// 針對無效的電子郵件位址呼叫處理器
   bad_email_handler(e)
}

catch (e){
// 不知到該做什麼，就記在日誌裡
   logError(e)
}

try {
   writeMyFile(theData); // 這裡有可能拋出錯誤
}catch(e){
   handleError(e); // 如果我們得到錯誤，就處理他
}finally {
   closeMyFile(); // 永遠會關閉這項資源
}

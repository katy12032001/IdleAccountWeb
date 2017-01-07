function getSummitResult(uid) {
  var result_db="";
  var p = $.ajax({
       contentType: 'application/json',
       url:"/api/handle/datacheck",
       data:JSON.stringify({
           uidno: uid,
         }),
       type : "POST",
       dataType:'json',
       error:function(){
          alert("失敗");
       },
       success:function(result){
         console.log("cd");
          console.log(result);
          //return result;
       }
   });
   return p;
}


$(document).ready(function () {
    uid = $('#uid').val();
    getSummitResult(uid).then(function (result) {
        console.log(result);
        id = Object.keys(result);
        total = 0;
        $.each(id, function (i, app) {
          total++;
          var lineTR = $('<tr></tr>');
          var indexTD = $('<td></td>');
          indexTD.text(total);
          var numberTD = $('<td></td>');
          var accountTD = $('<td></td>');
          lineTR.append(indexTD);
          lineTR.append(numberTD.text(result[app].number));
          lineTR.append(accountTD.text(result[app].account));
          $('#accountchecktable').append(lineTR);
        });
    });
    // $('#close-btn').on('click', function () {
    //   console.log('s-btn');
    //   window.open('location', '_self', '');
    //   window.close();
    // });
});

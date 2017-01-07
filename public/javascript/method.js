total = 5;

function saveData() {
  result = {};
  uid = "";
  n = 0;
  for (i = 1; i <= total; i++) {
      account = '#account-'+i;
      account_v = $(account).val();
      number = '#number-'+i;
      number_v = $(number).val();
      uid = $('#uid').val();
      console.log(uid);
      if (account_v.length != 0 && number_v.length != 0){
        result[number_v] = account_v;
        n++;
      }
  }
  console.log(result);
  // var p = fetch(`/api/handle/datasummit`, {
  //   credentials: 'same-origin',
  //   method: 'post',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     itsrno: itsr,
  //     accountlist: result,
  //   }),
  // }).then(function (response) {
  //   console.log("response");
  //   return response.json();
  // }).then(function (json) {
  //   console.log("response2");
  //   console.log(json);
  //   return json;
  // }).catch(function (ex) {
  //   console.log('parsing failed', ex);
  // });
  //
  // console.log(result);
  alert('There are '+n+" accounts to be resumed" );
  $.ajax({
       contentType: 'application/json',
       url:"/api/handle/datasummit",
       data:JSON.stringify({
           uidno: uid,
           accountlist: result,
         }),
       type : "POST",
       dataType:'json',
       error:function(){
          alert("失敗");
       },
       success:function(){
          alert("成功");
          window.location.href = "/feedback/"+uid;
       }
   });

}

function addLine() {
  total ++;
  var lineTR = $('<tr></tr>');
  var indexTD = $('<td></td>');
  indexTD.text(total);
  var numberTD = $('<td></td>');
  var numberCon = $('<input type="text" class="form-control" id = number-'+ total +'>');
  var accountTD = $('<td></td>');
  var accountCon = $('<input type="text" class="form-control" id = account-'+ total +'>');
  lineTR.append(indexTD);
  lineTR.append(numberTD.append(numberCon));
  lineTR.append(accountTD.append(accountCon));
  $('#accountchecktable').append(lineTR);
}

$(document).ready(function () {
  $('#add-line-btn').on('click', function () {
    console.log('a-btn');
    addLine();
  });
  $('#summit-btn').on('click', function () {
    console.log('s-btn');
    saveData();
  });
});

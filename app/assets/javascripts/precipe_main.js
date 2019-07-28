var last_level = 5;

$(document).ready(function(){
  $('body').toggleClass("loaded");
  if(user_level > 1) {
    showIntroduce();
  }
});

$('#confirmClose').click(function(){
  $('div.first').css('display', 'none');
  $('div.target').css('display', 'block').addClass('on');
});

$("#confirmFeedback").click(function(){
  $("div.target").css('display', 'none');
  $("div.message").css('display', 'none');
});

// $("#confirmResult").click(function(){
//   if(user_level != last_level) {
//     //location.href = "/level/" + window.location.href.split('/')[-1];
//   }
// });

$("#confirmTryAgain").click(function(){
  $("div.target").removeClass("on");
  $("div.message").css('display', 'none');
  reset();
  init(null);
});

$('#play').click(function() {
    //변수 초기화
    initalize();
    
    //result = {code, isSucceed, answer, error}
    var result = runCode();
    var code = result.code;
    
    // 피드백 결과 보여주기
    showFeedback(result.isSucceed);
    
    // 성공시 애니메이션 보여주기
    if(result.isSucceed){
      console.log("init " + result.answer + user_level);
       init(result.answer,user_level);
    }
    
    //Blockly.Python.INFINITE_LOOP_TRAP = null;
    //var code = Blockly.Python.workspaceToCode(workspace);
    $("pre#console code").text(code);
    $('pre#console code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
    
    $.ajax({
        url: '/code/send',
        dataType: 'json',
        type: 'POST',
        data: {'code':code},
        success: function(result) {
          var aniStack = result['data'].split("\u21b5");
          init(aniStack);
        }
    });
    
})

function showFeedback(result) {
  $("div.message").css('display', 'block');
  
  if(result) {
    $("div.positive").css('display', 'block').addClass('on');
    $("div.negative").css('display', 'none').removeClass('on');
  }else {
    $("div.positive").css('display', 'none').removeClass('on');
    $("div.negative").css('display', 'block').addClass('on');
  }
  
  $("div.feedback button").click(function(){
    if(result){
      nextLevel();
    }else {
      $("div.message").css('display', 'none');
    }
  });
}

function nextLevel() {
  if (user_level == last_level) {
    console.log("finished");
    showFinish();
  }else {
    console.log(user_level);
    $.ajax({
        type: "PATCH",
        url: "/next_level",
        data: {'current_stage': user_level},
        success: function(result) {
          var level = result['data'];
          console.log(level);
          location.href = "/level/" + level;
        }
      });
  }
}

function showIntroduce() {
  $('div.target').css('display', 'block').addClass('on');
}

function showFinish() {
  $('div.positive').css('display', 'none').removeClass('on');
  $('div.target h2').html("Finished!");
  $('div.target h3').html("모든 단계를 완료했습니다.");
  $('div.target button').html("Done");
  $('div.target').css('display', 'block').addClass('on');
  location.href = "/dashboard";
}
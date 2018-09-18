
(function(){
    const $window=$(window);
    let wWidth=$window.width();
    const $nextBtns=$('.next');
    const $preBtn=$('.previous');
    const $container=$('.container');
    const $user_name=$('.user-name');
    const $input_name=$('input[name="name"]');
    const $input_hora_entra=$('input[name="hora-entra"]');
    const $input_minutos_entra=$('input[name="minutos-entra"]');
    const $input_hora_prepara=$('input[name="hora-prepara"]');
    const $input_minutos_prepara=$('input[name="minutos-prepara"]');
    const $hour = $('.screen .hora');
    const $min = $('.screen .minutos');
    const $question_1=$('.question-1');
    const $question_2=$('.question-2');
    const $question_3=$('.question-3');
    const $hour_prepare=$('.hora-prepara');
    const $min_prepare=$('.minutos-prepara');
    const $hour_enter=$('.hora-entra'),$min_enter=$('.minutos-entra');
    const $cancel=$('.cancel');
    const $setting_overlay=$('.setting-overlay');
    const $setting_btn=$('.setting');
    const $changeName_btn=$('.change-name');
    const $changeTime_btn=$('.change-time');
    const $confirmName_btn=$('.confirm-name');
    const $confrimTime_btn=$('.confirm-time');
    const $changeName_input=$('input[name="newName"]');
    const $change_hora_prepara_input=$('input[name="newHora"]');
    const $change_min_prepara_input=$('input[name="newMin"]');
    let enterHour=0;
    let enterMin=0;
    let page=1;
    let storedName,storedHour=0,storedMin=0;

    // initialize
    $hour_enter.text(enterHour);
    $min_enter.text(enterMin);
    
    // initialize localstorage
    localStorage.getItem('name')==null?localStorage.setItem('name',''):
    storedName=localStorage.getItem('name');
    
    localStorage.getItem('prepareHour')==null?localStorage.setItem('prepareHour',0):
    storedHour=localStorage.getItem('prepareHour');

    localStorage.getItem('prepareMin')==null?localStorage.setItem('prepareMin',0):
    storedMin=localStorage.getItem('prepareMin');
    
    

    $window.resize(()=>{
        wWidth=$(window).width();
    });

    $nextBtns.each((index,el)=>{
      $(el).click(nextPage); 
    });
    
    $preBtn.click(previousPage);

    function nextPage(){
        $container.css({
            'transform':'translateX(-'+wWidth*page+'px)'
        });
        page++;
    }

   
    
   function previousPage(){
    page--;
    $container.css({
      'transform':'translateX(-'+wWidth*(page-1)+'px)'
  });
  
   }

    $input_name.keyup(storeName);
    $input_hora_entra.keyup(storeEnterHour);
    $input_minutos_entra.keyup(storeEnterMin);
    $input_hora_prepara.keyup(storePrepareHour);
    $input_minutos_prepara.keyup(sotrePrepareMin);

    function storeName(){
        let name=$(this).val();
        $user_name.text(` ${name}`);
        localStorage.setItem('name',name);
    }

    function storeEnterHour(){
      let hour=$(this).val().trim()==''?0:$(this).val().trim();
      enterHour=hour<10?'0'+hour:hour;
      $hour_enter.text(enterHour);
    }
    function storeEnterMin(){
      let min=$(this).val().trim()==''?0:$(this).val().trim();
      enterMin=min<10?'0'+min:min;
      $min_enter.text(enterMin);
    }
    function storePrepareHour(){
      let hour = $(this).val().trim()==''?0:$(this).val().trim();
      localStorage.setItem('prepareHour',hour);
      storedHour=localStorage.getItem('prepareHour');
      $hour_prepare.text(`${storedHour == ''?0:storedHour} hora y `);
      
    }
    function sotrePrepareMin(){
     let min = $(this).val().trim()==''?0:$(this).val().trim();
     localStorage.setItem('prepareMin',min);
     storedMin=localStorage.getItem('prepareMin');
      $min_prepare.text(`${storedMin==''?0:storedMin} minutos`);
    }
    

$question_2.find('.next').click(showTime);
$question_3.find('.next').click(showTime);

  function showTime(){
    
      let totalMin = Number(enterHour)*60+Number(enterMin)-Number(localStorage.getItem('prepareHour'))*60-Number(localStorage.getItem('prepareMin'));
      let hour = Math.floor(totalMin/60);
      let min = totalMin%60;
      animateCount($hour,hour);
      animateCount($min,min); 
      $hour_prepare.text(`${storedHour == ''?0:storedHour} hora y `);
      $min_prepare.text(`${storedMin==null?0:storedMin} minutos`);
      
  }

  function animateCount($el,num){
    $el.prop('Counter',0).animate({
        Counter: num
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            Math.ceil(now)<10?$el.text('0'+Math.ceil(now)):$el.text(Math.ceil(now));
        }
    });
  }

  function hideQuestion1(){
   $question_1.hide();
    $user_name.text(` ${storedName}`);
  }

  function hideQuestion3(){
    $question_3.hide();
  }
  
if(storedName !== undefined && storedName !==''){ 
  
  hideQuestion1();
}

if(storedHour !=0 || storedMin != 0){
hideQuestion3();
}

//setting button
$setting_btn.click(()=>{
  $setting_overlay.fadeIn();
});

// cancel btn setting overlay
$cancel.click(()=>{
  $setting_overlay.fadeOut();
});

// change name
$changeName_input.keyup(storeName);
$changeName_btn.click(()=>{
 $changeName_input.fadeIn();
 $confirmName_btn.fadeIn().css('display','inline-block');
 $changeName_btn.hide();
});
$confirmName_btn.click(()=>{
  $changeName_input.hide();
  $confirmName_btn.hide();
  $changeName_btn.fadeIn();
});

// change time
$change_hora_prepara_input.keyup(storePrepareHour);
$change_min_prepara_input.keyup(sotrePrepareMin);
$changeTime_btn.click((e)=>{
  self=e.target;
  $('.changeTimeForm').fadeIn();
  $confrimTime_btn.fadeIn().css('display','inline-block');
  $(self).hide();
});
$confrimTime_btn.click(()=>{
  $('.changeTimeForm').hide();
  $confrimTime_btn.hide();
  $changeTime_btn.fadeIn();
  showTime();
});

})()









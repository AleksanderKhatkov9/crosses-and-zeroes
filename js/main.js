var area = document.getElementById('area');
move = 0;

area.addEventListener('click', function(event){
    if(move % 2 == 0){
          event.target.innerHTML = 'X';
    }else{
          event.target.innerHTML = '0';
    }
      move = move+1;  
      check();
});

function check(){
    var boxes = document.getElementsByClassName('box');
    var arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6] 
    ]

    for(var i=0; i<arr.length; i++){
        if(boxes[arr [i][0]].innerHTML =='X' && boxes[arr [i][1]].innerHTML =='X' && boxes[arr [i][2]].innerHTML =='X'){
            alert('крестик выйграл');
            location.reload();

        }else
        if(boxes[arr [i][0]].innerHTML =='0' && boxes[arr [i][1]].innerHTML =='0' && boxes[arr [i][2]].innerHTML =='0'){
            alert('нолик выйграл');
            location.reload();

        }else
          if (move == 9) {
            alert("ничья");
           location.reload();
           break;
        }
    } 
}

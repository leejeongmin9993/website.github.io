/* 
다음은 여러 사용자 이름을 입력받고, 이름의 개수만큼 랜덤으로 값을 배정하는 자바스크립트 코드입니다:
*/

var getArrData = new Array();
const rmap = new Map();
function assignRandomValues(userNames , playCnt) {
    if (!Array.isArray(userNames) || userNames.length === 0) {
        console.error("유효한 사용자 이름 배열을 입력해주세요!");
        return [];
    }

    // 이름마다 랜덤 값을 생성 및 배정
    for(let i=0; i < playCnt; i++){

        getArrData = new Array();

        const assignedValues = userNames.map(name => ({
            name,
            randomValue: randomValues(userNames.length)   
        }));

        rmap.set( i+1 ,assignedValues);
    }
        
    return rmap;
}

function randomValues(userNamesCnt){
    
    let cnt = 0;
    let getVal;    

    while (cnt <= (userNamesCnt+1)) {
        getVal = Math.floor(Math.random() * userNamesCnt) + 1;
        //console.log("getVal :" + getVal); 
        //console.log("includes :" + getArrData.includes(getVal)); 

        if(!getArrData.includes(getVal)){
            getArrData.push(getVal);      
            ++cnt;               
            return getVal;   
        }     
    }
    
    
}    


function makeColor(){   
    const colorArray =     
    ['bg-pink-300'
    ,'bg-purple-300'
    ,'bg-indigo-100'
    ,'bg-purple-100'    
    ,'bg-yellow-300'
    ,'bg-red-300'
    ,'bg-orange-300'
    ,'bg-red-200'
    ,'bg-gray-300'
    ,'bg-blue-300'        
    ,'bg-green-100'    
    ,'bg-blue-200'        
    ,'bg-white'
    ,'bg-rose-100'
    ,'bg-rose-50'
    ,'bg-indigo-200'
    ,'bg-cyan-200'
    ,'bg-stone-200'
    ,'bg-yellow-200'
    ,'bg-amber-200'
    ,'bg-slate-100'
    ,'bg-lime-50'
    

 ];

 const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
 console.log(randomColor);    
 return randomColor;
}
function makeTeamProc(){   

    const textareaVal = document.getElementById('studentInput').value;
    let textareaValue = textareaVal.trim();
    let arrPlayer = textareaValue.split(',');
    if(arrPlayer.length <= 1){
        let repText = textareaValue.replaceAll("\n", ",")
        arrPlayer = repText.split(',');
        console.log(arrPlayer);
    }   

    
   // const userNames = ["정민", "은지", "수혁", "민준"];
   

    const playCnt = document.getElementById('columns').value;
    const assignedRandomValues = assignRandomValues(arrPlayer, playCnt);

    // 결과 출력
    console.log("배정된 랜덤 값:", assignedRandomValues);

    
    let pulHtml = "";
    let text = "";

    assignedRandomValues.forEach(function(key,value){
       
        
        let htmlVal = '<div class="mb-4 text-center text-xl font-bold text-gray-700">'+ value +"조" +'</div>'
        + '<div class="flex flex-wrap justify-center gap-4">';
       
        

        let htmlF = "";
        let color = makeColor()+'';
        key.forEach(function(k){             

             
             htmlF = htmlF +
             '<div class="flex flex-col items-center justify-center rounded-md border p-4 '+ color +' cursor-pointer shadow-md transition-all duration-200 hover:shadow-lg" role="button" tabindex="0">'
             + '<div class="text-center"><div class="text-lg font-bold">' + k.name + '</div>'
            +'<div><img src="' + k.randomValue + '.png" width="60"></div></div></div>';               
        })
        
        text = htmlVal + htmlF + '</div></div><p></p>';

        
        pulHtml = pulHtml + text;
                 
    })

    //console.log(pulHtml);             
    /*
     * bg-pink-300
       bg-purple-300
       bg-indigo-100
       bg-green-300          
       bg-yellow-300
       bg-red-300
       bg-orange-300
       bg-gray-300
       bg-blue-300
    */
    document.querySelector("#viewer").innerHTML = pulHtml;

    
    


}
// 예시 사용




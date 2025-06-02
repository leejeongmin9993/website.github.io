
var getArrData = new Array();
const rmap = new Map();
function assignRandomValues(userNames , playCnt) {
    if (!Array.isArray(userNames) || userNames.length === 0) {
        console.error("사용자 이름를 확인해주세요.");
        return [];
    }
    
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
        if(arrPlayer.length <= 1){
            arrPlayer = repText.split('.');     
            console.log(arrPlayer);
        }            
    }   

    
   // const userNames = ["희동이", "마이콜"];
   

    const playCnt = document.getElementById('columns').value;
    const assignedRandomValues = assignRandomValues(arrPlayer, playCnt);
    
    console.log("저장된 배열:", assignedRandomValues);

    
    let pulHtml = "";
    let text = "";

    assignedRandomValues.forEach(function(key,value){
       
        
        let htmlVal = '<div class="mb-4 text-center text-xl font-bold text-gray-700">'+ value +" 조" +'</div>'
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
        test link  => https://leejeongmin9993.github.io/website.github.io/
    */
    document.querySelector("#viewer").innerHTML = pulHtml;


}




let arrNumber = 
//1150 ~ 1173
[ 

 /*
 "7","13","18","36","39","45","19"
,"3","9","27","28","38","39","7"
,"21","25","27","32","37","38","20"
,"5","7","12","20","25","26","28"
,"30","31","34","39","41","45","7"
,"10","16","19","27","37","38","13"
,"4","8","22","26","32","38","27"
,"1","9","10","13","35","44","5"
,"30","31","32","35","36","37","5"
,"2","3","9","15","27","29","8"
,"8","9","18","35","39","45","25"       
,"3","13","28","34","38","42","25"
,"5","12","24","26","39","42","20"
,"9","21","24","30","33","37","29"
,"8","23","31","35","39","40","24"
,"14","23","25","27","29","42","16"
,"6","7","27","29","38","45","17"
"17","18","23","25","38","39","22"
,"2","13","15","16","33","43","4"
,"20","21","22","25","28","29","6"

,"2","12","20","24","34","42","37"
*/
"7","13","18","36","39","45","19"
,"3","6","7","11","12","17","19"
,"7","9","24","40","42","44","45"
,"1","5","18","20","30","35","3"
,"8","11","14","17","36","39","22"
];


function removeDuplicates(arr) {
    return [...new Set(arr)];
}


function getRandomElement(arr) {
    if (arr.length === 0) {
        throw new Error("배열을 확인해주세요.");
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

function removeUndefined(arr) {
    return arr.filter(item => item !== undefined);
}


function getMakeLotto() {
    let cnt = document.getElementById('columns').value;
    document.getElementById('studentInput').value = "";
    for(let i = 1 ; i <= cnt; i++){
        getNum();
    }
}    
function getNum() {    

    let getNumbers = new Array();
    for(let i = 1 ; i <= 6; i++){
        getNumbers.push(getRandomElement(arrNumber));    
    }

    getNumbers = removeUndefined(getNumbers);

    for(let i = 1 ; i <= 6; i++){
        getNumbers = removeDuplicates(getNumbers);
        
    }    

    while (getNumbers.length < (6)) {    
        getNumbers.push(getRandomElement(arrNumber));
        getNumbers = removeUndefined(getNumbers);
        getNumbers = removeDuplicates(getNumbers);
        
    }    

    getNumbers= sortArray(getNumbers);  
    
    let txt = "";
    getNumbers.forEach(function(val){
        txt = txt + val + " ";
    });

    console.log(txt);
    //
    document.getElementById('studentInput').value =  document.getElementById('studentInput').value + txt + "\n\n";
}




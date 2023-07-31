let Ques_Ans = {"QuesAns":{
    "Question" :[
        {"text": "what is language that controls  the structure of a web page ?","answer":"3"}
        ,{"text": "which tag is used in HTML ?","answer":"4"}
        ,{"text": "what is language that controls presentation of a web page ?","answer":"1"}
        ,{"text": "which property is used in CSS ?","answer":"2"}
        ,{"text": "what is language that controls behavior of a web page ?","answer":"3"}]
    ,"Answer" :[ 
        {"1":"JS","2":"Java","3":"HTML","4":"CSS"}
        ,{"1":"color","2":"background","3":"rotate","4":"audio"}
        ,{"1":"CSS","2":"HTML","3":"JS","4":"C#"}
        ,{"1":"img","2":"background","3":"audio","4":"head"}
        ,{"1":"C#","2":"Python","3":"JS","4":"Typescript"}] 
    }
};
var check = false;
var answerCheck;
var i = 0;
var ques_Num =1
var correctQues = 0;
var scoreNum = 0
function checkAnswer(num){
    if(i<5){
        if(num === Ques_Ans.QuesAns.Question[i].answer){
            console.log("Correct")
            scoreNum++;
            ques_Num++;
            correctQues++;
            i++;
            if(i===5){
                document.getElementById("home").hidden = true;
                document.getElementById("finish").hidden = false;
                document.getElementById("finishScore").innerHTML = "Score : "+ scoreNum;
                document.getElementById("finishQues").innerHTML = "Question : "+ correctQues;
                if(scoreNum === 5){
                    document.getElementById("correctQues").style.visibility = 'visible';
                    document.getElementById("again").style.visibility = 'hidden';
                    // document.getElementById('finish').style.width = '683px';
                    // document.getElementById('finishScore').style.marginLeft = '13px';
                    // document.getElementById('finishQues').style.marginLeft = '39px';
                    // document.getElementById('correctQues').style.marginLeft = '225px';
                }
                else{
                    document.getElementById("correctQues").style.visibility = 'hidden';
                    document.getElementById("again").style.visibility = 'visible';
                    i = 0;
                    ques_Num =1
                    correctQues = 0;
                    scoreNum = 0
                }
            }
            else
                startQuiz();
        }
        else{
            console.log("Wrong")
            ques_Num++;
            i++;
            if(i===5){
                document.getElementById("finish").hidden = false;
                document.getElementById("home").hidden = true;
                document.getElementById("finishScore").innerHTML = "Score : "+ scoreNum;
                document.getElementById("finishQues").innerHTML = "Question : "+ correctQues;
                if(scoreNum === 5){
                    document.getElementById("correctQues").style.visibility = 'visible';
                    document.getElementById("again").style.visibility = 'hidden';
                    // document.getElementById('finish').style.width = '683px';
                    // document.getElementById('finishScore').style.marginLeft = '13px';
                    // document.getElementById('finishQues').style.marginLeft = '39px';
                    // document.getElementById('correctQues').style.marginLeft = '225px';
                }
                else{
                    document.getElementById("correctQues").style.visibility = 'hidden';
                    document.getElementById("again").style.visibility = 'visible';
                    i = 0;
                    ques_Num =1
                    correctQues = 0;
                    scoreNum = 0
                }
            }
            else
                startQuiz();
        }
        
    }
};
function startQuiz(){
    document.getElementById("ques_Num").innerHTML = ques_Num;
    document.getElementById("scoreNum").innerHTML = scoreNum;
    document.getElementById("question").innerHTML = Ques_Ans.QuesAns.Question[i].text ;
    document.getElementById("1").innerHTML = Ques_Ans.QuesAns.Answer[i][1];
    document.getElementById("2").innerHTML = Ques_Ans.QuesAns.Answer[i][2];
    document.getElementById("3").innerHTML = Ques_Ans.QuesAns.Answer[i][3];
    document.getElementById("4").innerHTML = Ques_Ans.QuesAns.Answer[i][4];
};

function display(){
    document.getElementById("StartHome").hidden = true;
    document.getElementById("home").hidden = false;
    i = 0;
    ques_Num =1
    correctQues = 0;
    scoreNum = 0
    // document.body.style.backgroundColor = " rgb(42 113 175 / 88%)";
    startQuiz();
};    

function HomeA(){
    i = 0;
    ques_Num =1
    correctQues = 0;
    scoreNum = 0
    document.getElementById("finish").hidden = true;
    document.getElementById("StartHome").hidden = false;
}

function again(){
    i = 0;
    ques_Num =1
    correctQues = 0;
    scoreNum = 0
    // document.getElementById("finish").hidden = true;
    // document.getElementById("home").hidden = false;
    display();
     
}
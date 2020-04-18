    function output(chulsu) { //학생을 출력만 하는 것.
        
        var str = "<h2>" + chulsu.getName() + "information </h2>" +
        "<ul>" +
        "<li>학번 : " + chulsu.getHakbun() +      
        "<li>국어 : " + chulsu.getKor() +        
        "<li>영어 : " + chulsu.getEng() +        
        "<li>수학 : " + chulsu.getMat() +        
        "<li>총점 : " + chulsu.getSum() +        
        "<li>평균 : " + chulsu.getAvg() +        
        "<li>평점 : " + chulsu.getGrade() +        
        "</ul>";
        
    document.getElementById("result").innerHTML = str; 
    // document.getElementById("result").innerText= str; // innerText로 하면 스타일 안 먹힌 상태에서 글자만 들고옴.

}
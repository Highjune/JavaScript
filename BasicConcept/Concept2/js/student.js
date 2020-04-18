function Student(hakbun, name, kor, eng, mat) {  //이렇게 함수 생성자로 객체를 만들 수 있다.
    var hakbun = hakbun; //var(지역변수개념)는 private 의미
    var name = name;
    var kor = kor;
    var eng = eng;
    var mat = mat;
    var sum = null;
    var avg = null;
    var grade = null;

//this는 public개념. 교재 p368무명함수. 즉 this.getHakbun이 function의 주소를 갖고 있고, this.getHakbun이 함수 이름이라고 할 수 있다.
   
    this.getHakbun = function(){return hakbun;}
    this.getName = function(){return name;}
    this.getKor = function(){return kor;}
    this.getEng = function(){return eng;}
    this.getMat = function(){return mat;}

    this.setSum = function(tot){sum = tot;}
    this.getSum = function(tot){return sum;}

    this.setAvg = function(average){avg = average;}
    this.getAvg = function(average){return avg;}

    this.setGrade = function(grd){grade = grd;}
    this.getGrade = function(grd){return grade;}
}





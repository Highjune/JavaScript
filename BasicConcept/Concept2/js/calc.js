function calc(stu){
    var total = stu.getKor() + stu.getEng() + stu.getMat();
    var avg = total / 3.;
    var grade = (avg >= 90) ? 'A' :
                    (avg >= 80) ? 'B' :
                         (avg >= 70) ? 'C' :
                             (avg >= 60) ? 'D' : 'F';          
    stu.setSum(total);
    stu.setAvg(avg);
    stu.setGrade(total);
}



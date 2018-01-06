var my = new Date();

//***************************************************????,?????????***********************
function showc() {
    var k=1;
    var j=1;
    var today;
    var tomonth;
    var theday=1;//??
    var max;
    var temp;
    var tempday;//?????????
    
    document.write ("<table>");
    document.write ("<tr>");
    document.write ("<td colspan=7 align='center'> <b>" + my.getFullYear() + "-" + (my.getMonth()+1) + "</b></td>");
    document.write ("</tr>");
    document.write ("<tr>");
    document.write ("<td>日</td>");
    document.write ("<td>一</td>");
    document.write ("<td>二</td>");
    document.write ("<td>三</td>");
    document.write ("<td>四</td>");
    document.write ("<td>五</td>");
    document.write ("<td>六</td>");
    document.write ("</tr>");
    temp=my.getDate();
    my.setDate(1);
    //document.write (my.getDate());
    tempday=my.getDay();//?????????
    my.setDate(temp);
    today=my.getDay();//???????
    
    switch ((my.getMonth()+1)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            max=31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            max=30;
            break;
        default:{
            if(my.getFullYear()%4==0)
                max=29;//????????!!
            else
                max=28;}
            //document.write (max);
    }
    for(k=0;k<6;k++) {
        document.write ("<tr>");
        for(j=0;j<=6;j++) {
            document.write ("<td>");
            if(j>=(tempday)) {
                tempday=0;//?????,?????????
                if(theday<=max) {
                    switch(j){
                        case 1:
                            //document.write ("<a title= 3550_/11:30-12:45><font color='red'>");
                            break;
                        case 2:
                            //document.write ("<a title= 3410/4-5:15pm><font color='red'>");
                            break;
                        case 3:
                            //document.write ("<a title= 3550_/11:30-12:45,meeting/1:30-5:00pm><font color='blue'>");
                            break;
                        case 4:
                            //document.write ("<a title= meet/1-3pm,3410/4-5:15pm><font color='blue'>");
                            break;
                        case 5:
                            //document.write ("<a title= 1502_/10-12am,2550/1-2:15pm><font color='brown'>");
                            break;
                        case 6:
                            //document.write ("<a title= 1502_/10-12am,2550/1-2:15pm><font color='brown'>");
                            break;
                        case 0:
                            //document.write ("<a title= 1502_/10-12am,2550/1-2:15pm><font color='brown'>");
                            break;
                        default:
                            document.write ("<a title=" + my.getFullYear() + "-" + (my.getMonth()+1) + "-" +theday +">");
                    }
                    
                    if(theday==my.getDate())
                        document.write ("<font color='green'><i>[" + theday + "]</i></font></a>");
                    else
                        document.write (theday + "</font></a>");
                    theday++;
                }
            }
            document.write ("</td>");
        }
        document.write ("</tr>");
    }
    document.write ("</table>");
}

//************************************************????
showc();

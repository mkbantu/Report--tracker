let result;
function addRecord() {
    
        result+= "<tr><td>"+"later"+"</td>";
        result+="<td>"+document.getElementById("name").value+"</td>";
        result+="<td>"+document.getElementById("salary").value+"</td>";
        result+="<td>"+tax()+"</td>";
        result+="<td>"+(parseFloat(document.getElementById("salary").value)-tax())+"</td></tr>";
     document.getElementById("result").innerHTML=result;
}

 function tax() {
            let salary = parseFloat(document.getElementById("salary").value);

            if(salary<60000)
                {
                return  salary * 0.1;
                }
            else if(salary>=60000 && salary<100000)
            {
            return salary * 0.2;
            }
            else{
            return salary* 0.3;
            }
}



  
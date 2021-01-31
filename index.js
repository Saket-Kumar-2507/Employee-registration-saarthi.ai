var dom,myname,emp_id,department,doj,email_id,temp;
var count=6,str,arr;
arr= [];
 
function generate_form()
{
    dom = document.getElementById("form");
    dom.style.display= "flex";
 
    dom = document.getElementById("btn");
    dom.style.display= "none"; 

    dom = document.getElementById("unique");
    dom.style.display= "none";
}

function show_table()
{
    myname = document.getElementById("1").value;
    emp_id = document.getElementById("2").value;
    department = document.getElementById("3").value;
    email_id = document.getElementById("4").value;
    doj = document.getElementById("5").value;
    if(myname=="" || emp_id=="" || department=="" || email_id=="" || doj=="")
    { alert("Form is empty. All the parameters of the form has to be filled."); }
    else
    {
        const el = document.querySelector("tbody");
        form_close();        
        str= count;
        str= str.toString();
        arr.push(str);
        // id= "${str}"
        el.innerHTML += `
        <tr>
            <td><button class="delete"  onclick="delete_row(${count})">&times;</button></td>
            <td>${myname}</td>
            <td>${emp_id}</td>
            <td>${department}</td>
            <td>${email_id}</td>
            <td>${doj}</td>
        </tr>
        `;
        count++;
        dom = document.getElementById("unique");
        dom.style.display= "block";
    }
    
}

function clear_form()
{
    dom = document.getElementById("form");
    dom.reset();
}

function form_close()
{
    // const form = document.querySelector("form");
    // form.reset();
    form.style.display= "none";
    
    dom = document.getElementById("btn");
    dom.style.display= "inline-block";

    if(arr.length!=0)
    {
        dom = document.getElementById("unique");
        dom.style.display= "block";
    }
}

// ---------------------------------------- logic for deleting rows -----------------------------------------

function binary_search(low,number,high)
{
    if(low<high)
    {
        let mid, index;
        mid= Math.floor((low+high)/2);
        
        if(arr[mid]==number)
        { return mid; }
        else if(arr[mid] > number)
        { index= binary_search(low,number,mid); }
        else
        { index= binary_search(mid+1,number,high); }
        
        return index;
    }
    else
    {
        if(arr[low]==number)
        { return low; }
        else
        { return -1; }
    }
}

function delete_row(str)
{
    let i;

    i= binary_search(0,str,arr.length);
    if(i != -1)
    {
        dom = document.querySelector("table");
        dom.deleteRow(i+1);
        arr.splice(i,1);
    }

}
const form = document.getElementById("main-form");
if(form){
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email-addr").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const province = document.getElementById("province").value;
        const membership = document.querySelector('input[name="membership"]:checked').value;

        document.getElementById("name-output").innerText = firstName + " " + lastName;
        document.getElementById("email-output").innerText = email;
        document.getElementById("address-output").innerText = address + ", " + city + ", " + province;
        document.getElementById("membership-output").innerText = membership;

    });
}

const excelForm = document.getElementById("excel-form");
if(excelForm){
    excelForm.addEventListener("submit", (event)=>{
        event.preventDefault();

        const nums = document.getElementById("nums-input").value;
        if(nums == null){
            alert("Please input some values!");
            return;
        }
        const numsArr = nums.split(" ").filter(num => num.length>0).map(num=>parseInt(num));
        
        const operation = document.querySelector('input[name="operation"]:checked').value;
        let result = "";
        switch(operation){
            case "1": result = autoSum(numsArr); break;
            case "2": result = avg(numsArr); break;
            case "3": result = max(numsArr); break;
            case "4": result = min(numsArr); break;
        }
        document.getElementById("result").innerText = result;


    });
}

function autoSum(arr){
    let res = 0;
    for(i in arr){
        res += arr[i];
    }
    return res;
}

function avg(arr){
    let sum = autoSum(arr);
    if(arr.length>0){
        return sum/arr.length;
    }
    return "";
}

function max(arr){
    return Math.max(...arr);
}

function min(arr){
    return Math.min(...arr);
}
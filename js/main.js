// Get a reference to the form element with the ID "main-form"
const form = document.getElementById("main-form");
if(form){
    // Add a submit event listener to the form
    form.addEventListener("submit", (event)=>{
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values of various form inputs by their IDs
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email-addr").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const province = document.getElementById("province").value;
        // Get the value of the selected membership option from radio buttons
        const membership = document.querySelector('input[name="membership"]:checked').value;

        // Update various HTML elements with the obtained form values
        document.getElementById("name-output").innerText = firstName + " " + lastName;
        document.getElementById("email-output").innerText = email;
        document.getElementById("address-output").innerText = address + ", " + city + ", " + province;
        document.getElementById("membership-output").innerText = membership;

    });
}

// Get a reference to the form element with the ID "excel-form"
const excelForm = document.getElementById("excel-form");
if(excelForm){
    // Add a submit event listener to the form
    excelForm.addEventListener("submit", (event)=>{
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the value of the input field with the ID "nums-input"
        const nums = document.getElementById("nums-input").value;
        if(nums == null){
            // Display an alert if the input field is empty and stop further execution
            alert("Please input some values!");
            return;
        }
        // Split the input value by spaces, filter out any empty strings, and convert to an array of integers
        const numsArr = nums.split(" ").filter(num => num.length>0).map(num=>parseInt(num));
        
        // Get the value of the selected operation from radio buttons
        const operation = document.querySelector('input[name="operation"]:checked').value;
        let result = "";
        switch(operation){
            // Call appropriate functions based on the selected operation and update the result variable
            case "1": result = autoSum(numsArr); break;
            case "2": result = avg(numsArr); break;
            case "3": result = max(numsArr); break;
            case "4": result = min(numsArr); break;
        }
        // Update an HTML element with the computed result
        document.getElementById("result").innerText = result;
    });
}

// Function to calculate the sum of an array of numbers
function autoSum(arr){
    let res = 0;
    for(i in arr){
        res += arr[i];
    }
    return res;
}

// Function to calculate the average of an array of numbers
function avg(arr){
    let sum = autoSum(arr);
    if(arr.length>0){
        return sum/arr.length;
    }
    return "";
}

// Function to find the maximum value in an array of numbers
function max(arr){
    return Math.max(...arr);
}

// Function to find the minimum value in an array of numbers
function min(arr){
    return Math.min(...arr);
}

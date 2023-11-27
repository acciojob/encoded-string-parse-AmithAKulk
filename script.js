const parseCode = (str) => {
  // your code here
	let decodedObj = {
        firstName: "",
        lastName: "", 
        id: ""
    };

    let objPropArray = ["firstName", "lastName", "id"];
    let propIndex = 0;

    let i = 0;
    while(i < str.length)
        {if(str.charAt(i) == '0') {
            i++;
        }
        else{
            let nextZero = str.indexOf('0', i);
            let value;
            if(nextZero == -1)
                {value = str.slice(i);
                    i = str.length;
                }
            else
                {value = str.slice(i, nextZero);
                    i = nextZero;
                } 
            
            decodedObj[objPropArray[propIndex++]] = value;  
		}}
	return decodedObj;
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
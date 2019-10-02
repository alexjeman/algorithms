//defining input string and empty reversed string
var stringNormal = ["h","e","l","l","o"];
//function to reverse a given string
var reverseString = function(s) {
    for (let i=0, j=s.length-1; i<j; i++, j--) {
        const x = s[i]; 
	const y = s[j];
        s[i] = y; 
	s[j] = x;
    }
};

//call function
reverseString(stringNormal);

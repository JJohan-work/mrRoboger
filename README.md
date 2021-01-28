# Mr Roboger's Neighborhood
#### *Created By:Jonah Johansen*
#### *Incrementer and value replacement*

* * *

## Description  
Type a number into the entry box and the program will output an increment going from 0 to x and replace numbers matching these rules:
* *Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"*
* *Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"*
* *Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"*
    
main function inside of .ready waits for a keyup, a change or a paste in the input element. It then passes the value of input into increment which returns an array containing 0 to the number.    
That array is then passed to robert() which maps the input array to a new array that modifies any value that matches the rules and adds span tags for later color coding on the page. The new array is then joined into a single string and set as the html in "#output div".
textChange runs last which counts how many words are being added and sizes the text appropriately.


* * *
## Specs
Description: increment()   
Test: "takes an input number and outputs an array counting from zero to that number"
Expect(increment(24)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])

Description: robert()   
Test: "takes in an array and returns an array with number replacements following 3 rules"
Expect(robert([0])).toEqual([0])
Expect(robert([1])).toEqual(["beep"])
Expect(robert([2])).toEqual(["boop"])
Expect(robert([3])).toEqual(["Won't you be my neighbor?"])

Description: textChange()  
Test: "takes in element to change and number of values in array and changes text size based on the number"  
Expect(textChange("#output","1-40")).toEqual(font-size=40px;)   
Expect(textChange("#output","40-80")).toEqual(font-size=30px;)   
Expect(textChange("#output","80-200")).toEqual(font-size=25px;)   
Expect(textChange("#output","200-500")).toEqual(font-size=20px;)   
Expect(textChange("#output",">500")).toEqual(font-size=15px;)    

* * *

## Technologies used
* HTML
* CSS
* Bootstrap v5
* Git and Github
* JavaScript
* JQuery

* * *

## Setup instructions:  
* Go to [Github Pages](https://jjohan-work.github.io/mrRoboger/) to see webpage.
* Type in number, page will react automatically to the input field change.
#### Alt
* Clone Repo
* Open index.html in browser

* * *

## To Do:
* No revisions are currently planned

* * *

## Addition comments:
* Created on 1/22/21  
* Currently in development and unfinished (*as of 1/22/21*)

* * *

## License:
> *&copy; Jonah Johansen, 2021*

Licensed under [MIT license](https://mit-license.org/)

* * *

## Contact Information
_Jonah Johansen: [Email](johansenjonah+git@gmail.com)_

//Course name - Key,, current chapter - 0 index,, chapter name - 1 index
var Courses={"JavaScript Fundamentals": ["Chapter 4","Callbacks & Closures"],"Data Science": ["Chapter 4","Callbacks & Closures"],"C programming": ["Chapter 4","Callbacks & Closures"],"Data Communication": ["Chapter 4","Callbacks & Closures"],"Data structure Fundamentals": ["Chapter 4","Callbacks & Closures"],"Micro Processor": ["Chapter 4","Callbacks & Closures"]};


useinfo={fname};
alert(useinfo);
var NoOfSemester = 6;

var user_usn = "1DS20IS027";

//const from html
const CourseContainer = document.getElementById("CourseContainer");  
const dropdown = document.getElementById("dropdown");  
const useinfo = document.getElementById("useinfo");  

//User Usn
var span = document.createElement('span');
span.classList.add("user_usn");
span.innerHTML = user_usn;
useinfo.appendChild(span);


//Add Semester option based on No of semester
for (let index = 0; index < NoOfSemester; index++) {
  var li = document.createElement('li');
  li.innerHTML=`<a href=""> Semester `+(index+1)+`</a>`;
  dropdown.appendChild(li);
}

//For Every course insert card 
Object.keys(Courses).forEach(Course => {
    //Creted div with class card;
    var div = document.createElement('div');
    div.classList.add("card");
    CourseContainer.appendChild(div);
    //Creted div with class course-preview and make card as parent;
    var div1 = document.createElement('div');
    div1.classList.add("course-preview");
    div1.innerHTML=`<h6>Course</h6>
    <h2>`+Course+`</h2>
    <button class="btn">Continue</button>`;
    div.appendChild(div1);
    
  });
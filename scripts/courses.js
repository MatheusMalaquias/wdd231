const courses = [
{code:"WDD130", credits:3, subject:"WDD", completed:true},
{code:"WDD131", credits:3, subject:"WDD", completed:true},
{code:"WDD231", credits:3, subject:"WDD", completed:false},
{code:"CSE110", credits:2, subject:"CSE", completed:true}
];

const container = document.getElementById("courses");
const credits = document.getElementById("credits");

function displayCourses(list){

container.innerHTML="";

list.forEach(course => {

const div = document.createElement("div");

div.classList.add("course");

if(course.completed){
div.classList.add("completed");
}

div.textContent = course.code;

container.appendChild(div);

});

const total = list.reduce((sum,course)=>sum+course.credits,0);

credits.textContent = "Total credits: "+total;

}

displayCourses(courses);

document.getElementById("all").addEventListener("click",()=>displayCourses(courses));

document.getElementById("wdd").addEventListener("click",()=>{

displayCourses(courses.filter(c=>c.subject==="WDD"));

});

document.getElementById("cse").addEventListener("click",()=>{

displayCourses(courses.filter(c=>c.subject==="CSE"));

});
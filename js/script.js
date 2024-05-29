var url = "https://jsonplaceholder.typicode.com/users";

async function table(){
    let response = await fetch(url);
    let json = await response.json();
    document.querySelector(".table").innerHTML += 
        `<thead>
        <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Username</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Website</td>
        <td>More</td>
        </tr>
        </thead>`;
         document.querySelector(".table").innerHTML +=`<tbody></tbody>`;
     for (let i = 0; i < json.length; i++) {
        document.querySelector("tbody").innerHTML += 
        `<tr>
        <td>${json[i].id}</td>
        <td>${json[i].name}</td>
        <td>${json[i].username}</td>
        <td>${json[i].email}</td>
        <td>${json[i].phone}</td>
        <td>${json[i].website}</td>
        <td><button>More Info</button></td>
        </tr>`;

        var buttons = document.querySelectorAll("button");
         for (let j = 0; j < buttons.length; j++) {
             buttons[j].addEventListener("click",()=>{
                document.querySelector(".moreInfo").innerHTML =
                `<div>
                <h2>Address:</h2>
                <p>Street: ${json[j].address.street}</p>
                <p>Suite: ${json[j].address.suite}</p>
                <p>City: ${json[j].address.city}</p>
                <p>Zip Code: ${json[j].address.zipcode}</p>
                <p>Geographic location:
                <P>${json[j].address.geo.lat}</P>
                <P>${json[j].address.geo.lng}</P></p>
                </div>
                 <div>
                 <h2>Company:</h2>
                 <p>Name: ${json[j].company.name}</p>
                 <p>Catch phrase: ${json[j].company.catchPhrase}</p>
                 <p>Bs: ${json[j].company.bs}</p>
                 </div>`;
                 document.querySelector(".moreInfo").style.width = "100%";
             })
         }
        
     }
}

table();
document.querySelector("img").addEventListener("click",() =>{
    document.querySelector("img").style.transform = "rotate(90deg)";
    document.querySelector(".table").style.height = "100vh";
    document.querySelector(".table").style.visibility = "visible";
})

// $(document).ready(function(){
//     $("img").on("click",function(){
//         $(".table").slideToggle();(5000);
//     })
// })
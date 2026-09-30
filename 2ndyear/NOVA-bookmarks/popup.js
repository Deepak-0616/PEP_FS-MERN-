const grid = document.getElementById("grid");
const saveBtn = document.getElementById("saveBtn");
const folderSelect = document.getElementById("folderSelect");
const search = document.getElementById("search");

function render(bookmarks){

grid.innerHTML="";

bookmarks.forEach((bm,index)=>{

const card=document.createElement("div");
card.className="card";
card.draggable=true;

card.innerHTML = `

<div class="thumb">
    <img src="https://www.google.com/s2/favicons?sz=64&domain_url=${bm.url}">
</div>

<div class="card-body">

<span class="delete" data-id="${index}">🗑</span>

<div class="card-title">${bm.title}</div>

<div class="card-url">${new URL(bm.url).hostname}</div>

</div>
`;

card.onclick=()=>{

chrome.tabs.create({url:bm.url});

};

grid.appendChild(card);

});

}

function loadBookmarks(){

chrome.storage.local.get(["bookmarks"],(data)=>{

render(data.bookmarks || []);

});

}

saveBtn.onclick=()=>{

chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{

const tab=tabs[0];

const bookmark={
title:tab.title,
url:tab.url,
folder:folderSelect.value
};

chrome.storage.local.get(["bookmarks"],(data)=>{

const bookmarks=data.bookmarks || [];

bookmarks.push(bookmark);

chrome.storage.local.set({bookmarks});

loadBookmarks();

});

});

};

grid.addEventListener("click",(e)=>{

if(e.target.classList.contains("delete")){

const id=e.target.dataset.id;

chrome.storage.local.get(["bookmarks"],(data)=>{

const bookmarks=data.bookmarks;

bookmarks.splice(id,1);

chrome.storage.local.set({bookmarks});

loadBookmarks();

});

}

});

search.addEventListener("input",()=>{

chrome.storage.local.get(["bookmarks"],(data)=>{

const filtered=(data.bookmarks||[]).filter(bm=>bm.title.toLowerCase().includes(search.value.toLowerCase()));

render(filtered);

});

});

loadBookmarks();
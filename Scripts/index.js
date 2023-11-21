const summer23 =[
"/images/Summer 23/grid_crop_2_x600.jpg",
"/images/Summer 23/grid_crop_5_x600.jpg",
"/images/Summer 23/grid_crop_8_x600.jpg",
"/images/Summer 23/grid_crop_9_x600.jpg",
"/images/Summer 23/grid_crop_11_x600.jpg",
"/images/Summer 23/Untitled_design_37_x600.jpg"];

const spring23 =[
  "images/Spring 23/DSC02520_2_x600.jpg",
  "images/Spring 23/Untitled_design_36_x600.jpg",
  "images/Spring 23/Untitled_design_38_x600.jpg",
  "images/Spring 23/Untitled_design_39_x600.jpg",
  "images/Spring 23/Untitled_design_40_x600.jpg",
  "images/Spring 23/Untitled_design_42_x600.jpg"
]
const winter23 =[
  "images/Winter 23/Untitled_design_46_x600.jpg",
  "images/Winter 23/Untitled_design_47_x600.jpg",
  "images/Winter 23/Untitled_design_48_x600.jpg",
  "images/Winter 23/Untitled_design_49_x600.jpg",
  "images/Winter 23/Untitled_design_52_x600.jpg",
  "images/Winter 23/Untitled_design_53_x600.jpg"
];

let toDisplayImage ='';
summer23.forEach((image) =>{
  toDisplayImage = toDisplayImage +
  `
  <div class="image">
    <img src="${image}">
  </div>
  `
  document.querySelector('.bottom-images-container').innerHTML = toDisplayImage;
});

document.querySelectorAll('.option').forEach((option)=>{
  option.addEventListener('click',()=>{
    toDisplayImage = '';
  
    let season = option.dataset.season;
    document.querySelector('.selected').classList.remove("selected");
    option.classList.add("selected");
    console.log(season);

    if(season=="spring"){
      spring23.forEach((image) =>{
        toDisplayImage = toDisplayImage +
        `
        <div class="image">
          <img src="${image}">
        </div>
        `
        document.querySelector('.bottom-images-container').innerHTML = toDisplayImage;
      });
    }
    else if(season=="winter"){
      winter23.forEach((image) =>{
        toDisplayImage = toDisplayImage +
        `
        <div class="image">
          <img src="${image}">
        </div>
        `
        document.querySelector('.bottom-images-container').innerHTML = toDisplayImage;
      });
    }
    else if(season=="summer"){
      summer23.forEach((image) =>{
        toDisplayImage = toDisplayImage +
        `
        <div class="image">
          <img src="${image}">
        </div>
        `
        document.querySelector('.bottom-images-container').innerHTML = toDisplayImage;
      });
    }
  })
  
})






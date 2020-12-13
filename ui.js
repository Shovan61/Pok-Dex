class UI {
    constructor() {
        this.contentDiv = document.getElementById('content');
        this.screenDiv = document.querySelector('#screen');
    }

    showInUI(data){
     this.screenDiv.innerHTML = `
     <img src="${data.sprites.front_default}" height="100%" width="100%" alt="image"> 
     `;
     
     this.contentDiv.innerHTML = `
        <div class="name"><h2>${data.name}</h2></div>   
         <div class="info-left">
          <ul>
            <li><strong>Special Ability</strong>:- ${data.abilities[0].ability.name}</li>
            <li><strong>Height</strong>:- ${data.height} feet</li>
            <li><strong>Weight</strong>:- ${data.weight} pound</li>
            <li><strong>Id</strong>:- ${data.id}</li>
            <li><strong>Base Experience</strong>:- ${data.base_experience}</li>
          </ul>
         </div>
     `;

    }
    
    showAlert() {
        this.screenDiv.style.visibility = 'hidden';
        document.getElementById('screen-alert').style.visibility = 'visible';

        setTimeout(function(){
            document.querySelector('#screen').style.visibility = 'visible';
            document.getElementById('screen-alert').style.visibility = 'hidden';
            document.getElementById('input').value = '';
            }, 3000);
    }


    clearUI(){
        this.contentDiv.innerHTML = '';
        this.screenDiv.innerHTML = '';
        document.getElementById('input').value = '';
    }
};

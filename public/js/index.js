const formside = document.querySelector('.btn-onclick');
formside.addEventListener('click',()=>{
    console.log("working");
    document.getElementById('first').innerHTML =
    `
    <div  class="hero-left-text-area2">
    <div class="text-one">
      <h3>Enjoy Free Video Chat.</h3>
    </div>
    <main class="join-main">
      <form action="chat.html">
        <div class="form-control">
          <label for="username"></label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username..."
            required
          />
        </div>
        <div class="form-control">
          <label for="room"></label>
          <select name="room" id="room">
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
            <option value="C#">C#</option>
            <option value="Ruby">Ruby</option>
            <option value="Java">Java</option>
          </select>
        </div>
        <div class="hero-left-button-area2">
      <div class="button-one">
        
        <button class="btn-onclick" type="submit">
          <div class="button-image">
            <img src="img/video-add-line 1.svg" />
          </div>
          <div class="button-one-text">
            <a>Join Room</a>
          </div>
          <div class="button-image">
            <img src="img/ar.svg" />
          </div>
        </button>
       
      </div>

    </div>
      </form >
    </main>
    
    <div class="text-two">
      <h4>It's <span>Free</span>, Try Now!</h4>
    </div>
  </div> `
})
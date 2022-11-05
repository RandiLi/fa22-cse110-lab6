// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inheret everything from HTMLElement

    const shadow = this.attachShadow({mode: 'open'});       // Attach the shadow DOM
    const articleEl = document.createElement('article');    // Create an <article> elememnt
    const styleEl = document.createElement('style');        // Create a style element

    // Insert all styles form cardTemplate.html
    styleEl.textContent = `
    * {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    article {
      align-items: center;
      border: 1px solid rgb(223, 225, 229);
      border-radius: 8px;
      display: grid;
      grid-template-rows: 118px 56px 14px 18px 15px 36px;
      height: auto;
      row-gap: 5px;
      padding: 0 16px 16px 16px;
      width: 178px;
    }

    div.rating {
      align-items: center;
      column-gap: 5px;
      display: flex;
    }

    div.rating>img {
      height: auto;
      display: inline-block;
      object-fit: scale-down;
      width: 78px;
    }

    article>img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      height: 118px;
      object-fit: cover;
      margin-left: -16px;
      width: calc(100% + 32px);
    }

    p.ingredients {
      height: 32px;
      line-height: 16px;
      padding-top: 4px;
      overflow: hidden;
    }

    p.organization {
      color: black !important;
    }

    p.title {
      display: -webkit-box;
      font-size: 16px;
      height: 36px;
      line-height: 18px;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p:not(.title),
    span,
    time {
      color: #70757A;
      font-size: 12px;
    }`;

    // Append style and article elements
    shadow.appendChild(articleEl);
    shadow.appendChild(styleEl);

    // EXPOSE - START (All expose numbers start with A)
    // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
    // A2. TODO - Create an <article> element - This will hold our markup once our data is set
    // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
    // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made
    // A5. TODO - Append the <style> and <article> elements to the Shadow DOM
  }

  /**
   * Called when the .data property is set on this element.
   *
   * For Example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card>, must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
    // If nothing was passed in, return
    if (!data) return;

    // <article>
    const articleEl = this.shadowRoot.querySelector('article');

    const img1 = document.createElement('img');
    img1.src = data['imgSrc'];  // <img src="imgSrc" alt="imgAlt">
    img1.alt = data['imgAlt'];
    articleEl.appendChild(img1);

    const p1 = document.createElement('p');
    p1.className = "title";        // <p class="title">
    
    const aEl = document.createElement('a');
    aEl.href = data['titleLnk'];   // <a href="">
    aEl.appendChild(document.createTextNode(data['titleTxt']));
    p1.appendChild(aEl);           // </a>
    articleEl.appendChild(p1);     // </p>

    const p2 = document.createElement('p');
    p2.className = 'organization';  // <p class="organizatoin"
    p2.appendChild(document.createTextNode(data['organization']));
    articleEl.appendChild(p2);      // </p>

    const divEl = document.createElement('div');
    divEl.className = 'rating';     // <div class="rating">
    const spanR = document.createElement('span');                // <span>Rating
    spanR.appendChild(document.createTextNode(data['rating']));  // </span>
    
    const imgR = document.createElement('img');   // <img src="" alt="">
    imgR.src = "./assets/images/icons/" + data['rating'] + "-star.svg";
    imgR.alt = data['rating'] + " stars";

    const spanN = document.createElement('span');                 // <span> numRatings
    spanN.append(document.createTextNode('(' + data['numRatings'] + ')'));  // </span>

    divEl.appendChild(spanR);
    divEl.appendChild(imgR);
    divEl.appendChild(spanN);
    articleEl.appendChild(divEl);   // </div>

    const timeEl = document.createElement('time');  // <time>
    timeEl.appendChild(document.createTextNode(data['lengthTime']));
    articleEl.appendChild(timeEl);                  // </time>

    const p3 = document.createElement('p');
    p3.className = "ingredients";   // <p class="ingredients">
    p3.appendChild(document.createTextNode(data['ingredients']));
    articleEl.appendChild(p3);      // </p>

    // </article>



    // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
    // A7. TODO - Set the contents of the <article> with the <article> template given in
    //           cardTemplate.html and the data passed in (You should only have one <article>,
    //           do not nest an <article> inside another <article>). You should use Template
    //           literals (tempalte strings) and element.innerHTML for this.
  }
}


// Define the Class as a customElement
customElements.define("recipe-card", RecipeCard);

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements

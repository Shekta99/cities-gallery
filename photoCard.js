class photoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.title = this.getAttribute("title");
    this.image = this.getAttribute("img");
    this.src = this.getAttribute("href");
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `<article>
        ${this.getStyles()}
        <h3>${this.title[0].toUpperCase() + this.title.slice(1)}</h3>
        <a target="_blank" href="${this.src}"><img src="${
      this.image
    }" alt="card-image" class="image"></a>
        </article>`;
    return template;
  }

  getStyles() {
    const styles = `
        <style>
            h3{
                color: gray;
                margin-left: 5%;
                margin-bottom: 5%;
                margin-top: 8%;
            }
            article{
              padding: 2%;
              border: 1px solid grey;
              border-radius: 8px;
              margin-top: 8%;
            }
            img{
              display: block;
              margin: auto;
              margin-bottom: 8%;
              border-radius: 8px;
              width: 90%;
            }
            img:hover{
              cursor: pointer;
              transform: scale(0.9);
            }
            h3{
              font-size: 2em
            }
        </style>
        `;
    return styles;
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
}
customElements.define("photo-card", photoCard);

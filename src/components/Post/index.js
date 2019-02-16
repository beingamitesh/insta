import React from "react";
import "./Post.css";
class Author extends React.Component {
  render(){
    return(
      <article class="authors">
        <span class="author-text"><h1>Authors</h1></span>
          <div class="author-image">
            <span class="images"><img src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-9/41897996_1892037574199330_1893039279894953984_n.jpg?_nc_cat=107&_nc_ht=scontent-bom1-2.xx&oh=11f3ca74a2bf6245e49ffb9045c86f52&oe=5CECC3C3" alt="Image"></img></span>
            <span class="images"><img src="https://scontent.fbho2-1.fna.fbcdn.net/v/t1.0-9/28276280_1983204761726270_3841318359909285825_n.jpg?_nc_cat=110&_nc_ht=scontent.fbho2-1.fna&oh=d982e78cb7c8952270f5552707cc0c6c&oe=5CE1B264" alt="Image"></img></span>
            <span class="images"><img src="https://scontent.fbho2-1.fna.fbcdn.net/v/t1.0-9/39112127_1158394710965195_8293530545191649280_n.jpg?_nc_cat=106&_nc_ht=scontent.fbho2-1.fna&oh=07e6f347fac636e6bbbbed926386a6a6&oe=5CE89682" alt="Image"></img></span>
            <span class="images"><img src="https://scontent.fbho2-1.fna.fbcdn.net/v/t1.0-9/42201316_1766023710162313_6547103813646417920_n.jpg?_nc_cat=110&_nc_ht=scontent.fbho2-1.fna&oh=c4efdcb0a728a44e606c147e4eb71a89&oe=5D26C8A6" alt="Image"></img></span>
          </div>
        <div class="author-name">
          <span class="name">Ajitesh</span> 
          <span class="name">Amitesh</span>
          <span class="name">Assem</span>
          <span class="name">Rajat</span>
        </div>
      </article>
    )
  }

}
export default Author;
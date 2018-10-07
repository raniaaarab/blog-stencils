import { Component } from '@stencil/core';


@Component({
    tag: 'app-post',
    styleUrl: 'app-post.css'
  })
  export class AppPost {
    title: string;
    article: string;
    author: string;

    postArticle(e) {
      e.preventDefault();
      console.log("!");
      const title = this.title;
      const article = this.article;
      const autor = this.author;
      const payload = {
        title,
        article,
        autor
      };

      fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          console.log(JSON.stringify(data));
        });
    }
 
  render() {
    return (
      <div class="form-group">
      <form>
        <label>Title</label>
          <input type="text" name="title"  onInput={(e: any) => (this.title = e.target.value)} /><br></br>
          <label>Content</label>
          <input type="textarea" name="content" onInput={(e: any) => (this.article = e.target.value)}/><br></br>
          <label>Author</label>
          <input type="text"  name="autor" onInput={(e: any) => (this.author = e.target.value)}/>
          <div >
            <stencil-route-link url="/article">
            <input type="submit"  onClick={this.postArticle.bind(this)} value="submit"/>
            </stencil-route-link>
            <stencil-route-link url="/article" >
            <input type="submit" id="can"  value="Cancel"/>
            </stencil-route-link>
          </div>
      </form>
   </div>
    );
  }
}

  
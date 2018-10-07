import {Component, State, Prop} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";

@Component({
  tag: "app-edit",
  styleUrl: "app-edit.css",
  shadow: true
})
export class AppAdd {
  @State()  title: string;
  @State()  article: string;
  @State()  author: string;
  @State()  id : any;
  @State()  myArticle:any;
  @Prop()   back : RouterHistory;
  @Prop()   match : MatchResults;

  goBack(){
    this.back.goBack();
  }


  componentWillLoad() {
     
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/' + this.match.params.id)
      .then(response =>response.json()).
       then(data=>{
        this.myArticle=data;
        this.id = this.myArticle._id;
        this.title = this.myArticle.title;
        this.article = this.myArticle.article;
        this.author = this.myArticle.autor;
        
    })
  }

  editArticle(e) {
    e.preventDefault();
    console.log("!");
    const title = this.title;
    const article = this.article;
    const autor = this.author;
    const _id = this.id;
    const postedited = {
      _id,
      title,
      article,
      autor
    };
    fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postedited)
    })
      .then(function(res) { this.goBack();
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
                 <input type="text" value={this.title} onInput={(e: any) => (this.title = e.target.value)} />
                 <br></br>
                <label>Content</label>
                <input type="text" value={this.article} onInput={(e: any) => (this.article = e.target.value)} /><br></br>
                <label>Author</label>
                <input type="text" value={this.author} onInput={(e: any) => (this.author = e.target.value)} />
                <div >
                <stencil-route-link url="/article">
                  <input type="submit"  onClick={this.editArticle.bind(this)} value="submit"/>
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
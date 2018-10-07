import { Component, Prop,State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css',
  shadow: true
})
export class AppDetail {

  @Prop() match: MatchResults;
  @State() articles: any;
  @Prop()   back : RouterHistory;



  goBack(){
    this.back.goBack();
  }

  deleteArticle() {
    return fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost/" + this.match.params.id, {
      method: 'DELETE',headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
    }).then(function(res) {  this.goBack();
      return res.json();
    })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  }

    render() {
      
      //console.log(this.article2);
      return (

      <div class="det">
        <div class= "table-responsive">
        <div id="div-retour">
        <stencil-route-link url="/article" ><button id="retour">Retour</button></stencil-route-link>
        </div>
             <table class="table-article" >
                <tr>
                  <td class="title">{this.articles.title}</td>
                  <td></td>
                </tr> 
                <tr>
                  <td>{this.articles.article}</td>
                  <td></td>
                </tr> 
                <tr>
                  <td id="td">  Ajouté par : {this.articles.autor}  à {this.articles.creationDate} </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>  
                    <stencil-route-link url={"/edit/" + this.articles._id}><button id="edit">Edit</button></stencil-route-link>

                    <stencil-route-link url="/article"  onClick={() => this.deleteArticle()} > <button id="delete">Delete</button></stencil-route-link>
                  </td>  
                </tr>   
               </table>
          )}
        
        </div>
    </div>
      );

  }




  componentWillLoad() {
    let id = this.match.params.id;
    return fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/` +id)
      .then(response => response.json())
      .then(data => {
        this.articles = data;
      //console.log(data);
  
    });
  
  }
  
}

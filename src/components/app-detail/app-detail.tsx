import { Component, Prop,State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css',
  shadow: true
})
export class AppDetail {
  @Prop() match: MatchResults;
  @Prop() iden: String;
@State() articles: any;
@State() article2: any;



componentWillLoad() {
  return fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/`)
    .then(response => response.json())
    .then(data => {
      this.articles = data;
    //console.log(data);

  });

}

  /*normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }*/

  render() {
    const data2=this.match.params.id;
   this.article2 =this.articles.filter(v => v._id === `${data2}`);
    //console.log(this.article2);
    console.log('raaaaaaaaaaaaaa');

      return (

        
        <div class= "table-responsive">
                {this.article2.map(
                    (article) =>
                    <table class="table-condensed" >
                    <tr><td>{article.title}</td>
                    <td></td>
                    </tr> 
                    <tr><td>{article.article}</td>
                    <td></td></tr> 
                    <tr>
                    <td id="td">  Ajouté par : {article.autor}  à {article.creationDate} </td>
                    <td> </td>
                    </tr>
                    
                    <tr><td >

                       <stencil-route-link url="/article">BACK</stencil-route-link>
                    </td>
                        
                    <td></td>
                    </tr>
                    
          
        </table>
        
      )}
    </div>
      );

  }
}

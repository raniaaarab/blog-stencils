import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-article',
    styleUrl : 'app-article.css'
})


export class AppArticle {

   @State() articles: any;

   
  function(x : any){
    if (x!= null){
        return  x.substring(0,140)  ;
    }
    else{
        return x;
    } 
  }

    render(){
   
        return (
            <div class="det">
            <div class= "table-responsive" >
                {this.articles.map(
                    (article) =>
                    <table class="table-article" >
                        <tr class="title">
                            <td >{article.title}</td>
                            <td></td>
                        </tr> 
                        <tr class="active">
                            <td>{this.function(article.article)}</td> 
                            <td></td>
                        </tr> 
                        <tr class="active">
                            <td id="td">  Ajouté par : {article.autor}  à {article.creationDate} </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td >
                            <stencil-route-link url={`/detail/${article._id}`}>Détails</stencil-route-link>
                            </td>
                            <td></td>
                        </tr>
                    </table>
                )}
            </div>
            </div>
   



        );
    }




    componentWillLoad(){
        return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost')
        .then(response => response.json())
        .then(data => {
        this.articles = data;
        
        console.log(this.articles);
    });
        
    }


    
    componentDidLoad(){
        console.log('Component did load');

    }

     componentDidUpdate() {
    console.log('Component did update');
  }


    componentWillUpdate() {
        console.log('Component did update');
    }


   
}
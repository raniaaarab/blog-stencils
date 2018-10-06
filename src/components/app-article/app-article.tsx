import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-article',
    styleUrl : 'app-article.css'
})


export class AppArticle {

   @State() articles: any;

   
   //<tr><td onClick={this.articleAfficheHandler.bind(this,article)}>{article.article.substring(0, 140)}</td>

    render(){
        return (


            <div class= "table-responsive">
                {this.articles.map(
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

                       <stencil-route-link url={`/detail/${article._id}`}>MORE</stencil-route-link>
                    </td>
                        
                    <td></td>
                    </tr>
                    
          
        </table>
        
      )}
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
       
       
       
  

    }

     componentDidUpdate() {
    console.log('Component did update');
  }


    componentWillUpdate() {
        console.log('Component did update');
    }

//quand on navige entre les pages du web par exemple lors d'un formulaire pour masques les elements de la page
    componentDidUnload(){
        console.log('Component removed from the DOM');
    }
}
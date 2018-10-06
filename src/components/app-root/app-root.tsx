import { Component} from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  /*@Listen('articleAffiche')
  articleAfficheHandler(event: CustomEvent) {
    console.log('Received the custom todoCompleted event: ', event.detail);
  }


  @Listen('button:onClick')
  handleClick(ev) {
    console.log('the button was clicked', ev);
  }*/
  render() {
    return (
      <div>
        <header>
          <h1>Rania Aarab Blog</h1>
        </header>
        
 
      <div class="sidenav">



    <h1><a href="#">Home</a></h1>
  
  
    <h1><a  href="#">New page</a></h1>
  

      </div>

      
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/article' component='app-article' exact={true} />
        
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/detail/:id' component='app-detail' />
              <stencil-route url='/post' component='app-post' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}

import { Component} from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
 
  render() {
    return (
      <div >

     
        <header>
          <h1>Rania Aarab Blog</h1>
        </header>
        <div class="sidenav">
          <h1><a href="/article">Home</a></h1>
          <h1><a  href="/post">New Article</a></h1>
        </div>
        <div >
       
        
        </div>
        <div>
      <main >
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/article' component='app-article' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/detail/:id' component='app-detail' />
              <stencil-route url='/post' component='app-post' />
              <stencil-route url='/edit/:id' component='app-edit' />
            </stencil-route-switch>
          </stencil-router>
        </main>
        </div>
      </div>
    );
  }
}

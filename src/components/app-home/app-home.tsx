import { Component} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  
  render() {
    return (
      <div class='app-home'>
        
       <stencil-route-link url='/profile/stencil'>
    
        </stencil-route-link>
      </div>
    );
  }
}

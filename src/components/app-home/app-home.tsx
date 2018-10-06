import { Component} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  /*@Listen('button:onClick')
  handleClick(ev) {
    console.log('the button was clicked', ev);
  }*/
  render() {
    return (
      <div class='app-home'>
        <p>idsfh</p>
       <stencil-route-link url='/profile/stencil'>
    
        </stencil-route-link>
      </div>
    );
  }
}

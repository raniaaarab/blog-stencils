import { Component } from '@stencil/core';


@Component({
    tag: 'app-post',
    styleUrl: 'app-post.css'
  })
  export class AppPost {
  
   
  render() {
    return (
      <form  class="table-condensed">
        <label>
          Title:
          <input type="text" name="title"/><br></br>
        </label>
        <label>
          Content:
          <input type="textarea" name="content"/><br></br>
        </label>
        <label>
          Autor:
          <input type="text"  name="autor"/>
        </label>
        <input type="submit" value="Submit" />
        
      </form>
    );
  }
}

  
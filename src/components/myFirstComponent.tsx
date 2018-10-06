import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'my-first-component',
    //styleUrl = 'my-first-component.css'
})

export class MyFirstComponent {

   @Prop() name: string;

    render(){
        return (
            <p>
                My name is {this.name}
            </p>
        );
    }
    componentWillLoad(){
        console.log('Component is about to be rendered');
    }

    componentDidLoad(){
        console.log('Component has been rendered');
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
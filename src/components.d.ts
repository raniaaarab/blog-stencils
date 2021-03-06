/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface AppArticle {}
  interface AppArticleAttributes extends StencilHTMLAttributes {}

  interface AppDetail {
    'back': RouterHistory;
    'match': MatchResults;
  }
  interface AppDetailAttributes extends StencilHTMLAttributes {
    'back'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface AppEdit {
    'back': RouterHistory;
    'match': MatchResults;
  }
  interface AppEditAttributes extends StencilHTMLAttributes {
    'back'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppPost {}
  interface AppPostAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface MyFirstComponent {
    'name': string;
  }
  interface MyFirstComponentAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppArticle': Components.AppArticle;
    'AppDetail': Components.AppDetail;
    'AppEdit': Components.AppEdit;
    'AppHome': Components.AppHome;
    'AppPost': Components.AppPost;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'MyFirstComponent': Components.MyFirstComponent;
  }

  interface StencilIntrinsicElements {
    'app-article': Components.AppArticleAttributes;
    'app-detail': Components.AppDetailAttributes;
    'app-edit': Components.AppEditAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-post': Components.AppPostAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'my-first-component': Components.MyFirstComponentAttributes;
  }


  interface HTMLAppArticleElement extends Components.AppArticle, HTMLStencilElement {}
  var HTMLAppArticleElement: {
    prototype: HTMLAppArticleElement;
    new (): HTMLAppArticleElement;
  };

  interface HTMLAppDetailElement extends Components.AppDetail, HTMLStencilElement {}
  var HTMLAppDetailElement: {
    prototype: HTMLAppDetailElement;
    new (): HTMLAppDetailElement;
  };

  interface HTMLAppEditElement extends Components.AppEdit, HTMLStencilElement {}
  var HTMLAppEditElement: {
    prototype: HTMLAppEditElement;
    new (): HTMLAppEditElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppPostElement extends Components.AppPost, HTMLStencilElement {}
  var HTMLAppPostElement: {
    prototype: HTMLAppPostElement;
    new (): HTMLAppPostElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLMyFirstComponentElement extends Components.MyFirstComponent, HTMLStencilElement {}
  var HTMLMyFirstComponentElement: {
    prototype: HTMLMyFirstComponentElement;
    new (): HTMLMyFirstComponentElement;
  };

  interface HTMLElementTagNameMap {
    'app-article': HTMLAppArticleElement
    'app-detail': HTMLAppDetailElement
    'app-edit': HTMLAppEditElement
    'app-home': HTMLAppHomeElement
    'app-post': HTMLAppPostElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'my-first-component': HTMLMyFirstComponentElement
  }

  interface ElementTagNameMap {
    'app-article': HTMLAppArticleElement;
    'app-detail': HTMLAppDetailElement;
    'app-edit': HTMLAppEditElement;
    'app-home': HTMLAppHomeElement;
    'app-post': HTMLAppPostElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'my-first-component': HTMLMyFirstComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}

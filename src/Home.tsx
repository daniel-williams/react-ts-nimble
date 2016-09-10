import * as React from 'react';
import { default as BaseComponent } from './BaseComponent';

export interface IHomeProps {
}
export interface IHomeState {
}

export default class Home extends BaseComponent<IHomeProps, IHomeState> {
  constructor(props: IHomeProps, context?: any) {
    super(props, context);
  }

  public render(): JSX.Element {
    return (
      <div>Home Component</div>
    );
  }

  renderSomething(): JSX.Element {
    return (
      <div>Something</div>
    );
  }

  hasSomeFlag(): boolean {
    return true;
  }
}

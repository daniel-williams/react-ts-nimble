import * as React from 'react';

export default class BaseComponent<P, S> extends React.Component<P, S> {
  constructor(props: P, context?: any) {
    super(props, context);
  }
}

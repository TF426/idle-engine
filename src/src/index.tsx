import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface HelloProps {
  name?: string;
}

class Hello extends React.Component<HelloProps> {
  public render(): React.ReactNode {
    const name = this.props.name ?? 'Unknown';
    return (
      <p>Hello, {name}!</p>
    );
  }
}

ReactDOM.render(
  <Hello name="Docker" />,
  document.getElementById('root')
);

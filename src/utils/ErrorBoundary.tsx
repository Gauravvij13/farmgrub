import React, { PureComponent } from 'react';
import { ErrorPage } from 'molecules/ErrorPage';
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  redirectToHome = () => {
    const { history } = this.props;
    if (history) history.push('/shop');
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <ErrorPage
          message="error.sorry"
          description="error.wrong"
          onRetry={this.redirectToHome}
          title="go.to.home"
        />
      );
    }
    return children;
  }
}

export default withRouter(ErrorBoundary);

import React, { Suspense, lazy } from 'react';
import LoadingSign from '../LoadingSign';

class LazyLoader extends React.Component<LazyLoaderProps> {
  render() {
    const { load, ...childProps } = this.props;
    const Comp = lazy(() => load());
    return (
      <Suspense fallback={<LoadingSign />}>
        <Comp {...childProps}/>
      </Suspense>
    );
  }
}

interface LazyLoaderProps {
  load: () => Promise<{ default: React.ComponentType }>;
}

export default LazyLoader;

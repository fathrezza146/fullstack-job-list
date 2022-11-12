import React, { Component } from 'react';
import { Header } from './layout/Header';
import { MainLayout } from './layout/Main';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './features/login/Login';

const asyncComponent = (importComponent: () => Promise<any>) => {
  return class extends Component {
      state = {
          component: null
      }

      componentDidMount() {
          importComponent()
              .then(cmp => {
                  this.setState({component: cmp.default});
              });
      }

      render() {
          const C = this.state.component;
          return C ? <Component {...this.props}/> : null;
      }
  }
}

const Jobs = asyncComponent(() => {
  return import('./features/job/Job')
})

const JobDetail = asyncComponent(() => {
  return import('./features/job/JobDetail')
})


function App() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/job" element={<MainLayout />}>
          <Route index element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;

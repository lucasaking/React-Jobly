import React, { useContext } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
import UserContext from "./UserContext";
// import FilterCompanyDetails from './FilterCompanyDetails';

function Routes() {

  const { currentUser } = useContext(UserContext);

  function PrivateRoute({ component: Component, ...rest}) {
      if (currentUser.token) {
        return (
        <Route {...rest} >
          <Component />
        </Route>)
      } else {
        return <Redirect to="/" />
      }
    }

    return (
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <PrivateRoute exact path="/companies" component={CompanyList}/>
        <PrivateRoute exact path="/companies/:name" component={CompanyDetail} />
        <PrivateRoute exact path="/jobs" component={JobList} />
        <PrivateRoute exact path="/profile" component={ProfileForm} />
        {/* <Route exact path="/companies">
          <CompanyList />
        </Route> */}
        {/* <Route exact path="/companies/:name">
          <CompanyDetail />
        </Route>
        <Route exact path="/jobs">
          <JobList />
        </Route>
     
        <Route exact path="/profile">
          <ProfileForm />
        </Route> */}
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }


  export default Routes;
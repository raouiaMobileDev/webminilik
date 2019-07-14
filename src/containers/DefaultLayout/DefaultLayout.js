import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
import navRestaurant from '../../_navRestaurant';
// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {


  constructor(props) {
    super(props);

 
    this.state = {
      key:''
     
    };
  }





  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }


  componentDidMount(){
  const Key  = this.props.match.params

  this.setState({key:Key.myKey})

   
  }

handleNav = () =>
{

  if(this.state.key=='HWrpGki7qPXWJC7PgQk3bm7bihx2' )
  {
    console.log('hey from valid condition')
    return <AppSidebarNav navConfig={navigation} {...this.props} />
  }
    else{
      console.log('hey from not valid condition')
   return  <AppSidebarNav navConfig={navRestaurant} {...this.props} /> 
  }
};

handleRedirect = () =>
{
  if(this.state.key=='HWrpGki7qPXWJC7PgQk3bm7bihx2' )
  {
    return null
  }
    else{
     console.log('redirect')
  // this.props.history.push('/'+ this.state.key)
  var url="/command/"+this.state.key
  return <Redirect to={url}/> 
  }
};




  render() {
    return (

      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>


        <div className="app-body">



      {/*   The navigator        */}
          <AppSidebar fixed display="lg">

            <AppSidebarHeader />

            <AppSidebarForm />

            <Suspense>
            {
            this.handleNav()

          }
            </Suspense>

            <AppSidebarFooter />

            <AppSidebarMinimizer />

          </AppSidebar>

          

          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  {this.handleRedirect()}
               -{/*  <Redirect from="/" to="/dashboard" /> */}

                </Switch>
              </Suspense>
            </Container>
          </main>


          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>

        </div>

        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>

      </div>
    );
  }
}

export default DefaultLayout;

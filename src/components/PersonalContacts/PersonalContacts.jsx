import React from 'react';
import styles from './PersonalContacts.module.css';
import MainNav from './NavBar/MainNav';
import AuthNav from './NavBar/AuthNav';
import Main from './Main';
import { Route, Switch} from 'react-router-dom'
import Registration from './Registration';
import Login from './Login';
import UserMenu from './NavBar/UserMenu';
import Contacts from './Contacts/Contacts';
import routes from '../../routes';
import { connect } from 'react-redux';
import { selectIsAuth} from '../../redux/auth/auth-selectors';
import { current } from '../../redux/auth/auth-operations';
import PrivateRoute from '../common/RoutesHocs/PrivateRoute';
import PublicRoute from '../common/RoutesHocs/PublicRoute';




class PersonalContacts extends React.Component {

    componentDidMount(){
            this.props.getUser();
    }
   
    render() { 
        let {isAuthenticated}=this.props;

        return ( <div className={styles.personalNotes}>
            <div className={styles.navWrap}>
                <MainNav/>
                {isAuthenticated?<UserMenu/>:<AuthNav/>}
            </div>
            <Switch>
                <PrivateRoute path={routes.personalContacts.contacts} component={Contacts} isAuthenticated={isAuthenticated}/>
                <PublicRoute path={routes.personalContacts.registration} restricted component={Registration}/>
                <PublicRoute  path={routes.personalContacts.login} restricted component={Login}/>
                <Route path={routes.personalContacts.main} component={Main}/>
            </Switch>
        </div> );
    }
}

const mapStateToProps = (state)=>({
    isAuthenticated: selectIsAuth(state)
})

const mapDispatchToProps={
    getUser: current
}

 
export default connect(mapStateToProps,mapDispatchToProps)(PersonalContacts);
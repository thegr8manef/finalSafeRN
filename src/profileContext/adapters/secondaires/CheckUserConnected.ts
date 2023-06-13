import { Profile } from "../../domain/entity/profile";
import { UserConnectedService } from "../../domain/gateway/userConnectedService";
import AsyncStorage from '@react-native-async-storage/async-storage';


export class CheckUserConnected implements UserConnectedService{
    setUserInfo(profile: Profile): Profile | undefined  {
        
        AsyncStorage.setItem('username', profile.name )
        AsyncStorage.setItem('email', profile.email)
        AsyncStorage.setItem('token', profile.accessToken)
        return undefined

    }
    getUserInfo(): Profile {
        let _email =  AsyncStorage.getItem('email');
        let _username=  AsyncStorage.getItem('username');
        let _token    =  AsyncStorage.getItem('token');

       



          return new Profile("", _username, _token, _email)
         
        
    }
    
}
  
import { PublicClientApplication, AuthorizationUrlRequest, SilentRequest, AuthenticationResult, Configuration, LogLevel, AccountInfo, InteractionRequiredAuthError, EndSessionRequest, RedirectRequest, PopupRequest } from "@azure/msal-browser";
import  MSAL_CONFIG  from './msal-config'; 
export class AuthModule {

    private myMSALObj: PublicClientApplication; 
    public account: AccountInfo|null; 
    private loginRedirectRequest: RedirectRequest; 
    private loginRequest: PopupRequest; 
    private profileRedirectRequest: RedirectRequest;
    private profileRequest: PopupRequest;
    private mailRedirectRequest: RedirectRequest;
    private mailRequest: PopupRequest;
 
    

    constructor() {
        this.myMSALObj = new PublicClientApplication(MSAL_CONFIG);
        this.account= null;
        this.loginRequest = {
            scopes: []
        };

        this.loginRedirectRequest = {
            ...this.loginRequest,
            redirectStartPage: window.location.href
        };
        this.profileRequest = {
            scopes: ["User.Read"]
        };

        this.profileRedirectRequest = {
            ...this.profileRequest,
            redirectStartPage: window.location.href
        };

        // Add here scopes for access token to be used at MS Graph API endpoints.
        this.mailRequest = {
            scopes: ["Mail.Read"]
        };

        this.mailRedirectRequest = {
            ...this.mailRequest,
            redirectStartPage: window.location.href
        };

        // this.silentProfileRequest = {
        //     scopes: ["openid", "profile", "User.Read"],
        //     account: undefined,
        //     forceRefresh: false
        // };

        // this.silentMailRequest = {
        //     scopes: ["openid", "profile", "Mail.Read"],
        //     account: null,
        //     forceRefresh: false
        // };

        
    }
  
   async login(signInType: string) {
        const account:AccountInfo[]=this.myMSALObj.getAllAccounts();
        if(account.length>0){
            this.account=account[0]
        }
        if (signInType === "loginPopup") {
         await   this.myMSALObj.loginPopup(this.loginRequest)
            .then((resp: AuthenticationResult) => {
              this.handleResponse(resp)
            })
            .catch(console.error);
        } 
        // else if (signInType === "loginRedirect") {
        //     this.myMSALObj.loginRedirect(this.loginRedirectRequest);
        // }
    }
    // logout(loggedInAccount:AccountInfo): void {
    //     const logOutRequest: EndSessionRequest = {
    //         account: loggedInAccount
    //     };

    //     this.myMSALObj.logout(logOutRequest);
    // }
    logout():void{
this.myMSALObj.logout();
    }
    handleResponse(response: AuthenticationResult) {
        if (response !== null) {
         this.account= response.account;
         
        } 
        else {
            this.account = this.getAccount();
        }
      
        
    }
    private getAccount(): AccountInfo|null {
        // need to call getAccount here?
        const currentAccounts = this.myMSALObj.getAllAccounts();
        if (currentAccounts === null) {
            console.log("No accounts detected");
            return null;
        }

        if (currentAccounts.length > 1) {
            // Add choose account code here
            console.log("Multiple accounts detected, need to add choose account code.");
            return currentAccounts[0];
        } else if (currentAccounts.length === 1) {
            return currentAccounts[0];
        }
        return null;
    }


}
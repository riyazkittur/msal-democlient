import { AccountInfo } from "@azure/msal-browser";
import * as React from "react";

export interface ILoginProps {
  userDetails: AccountInfo | null;
  login: Function;
  logout: Function;
}

export function Login(props: ILoginProps) {
  return (
    <div>
      {props.userDetails === null ? (
        <button onClick={() => props.login()}>Login</button>
      ) : (
        <div>
          <h2>Hello {props.userDetails.username}</h2>
          <button onClick={() => props.logout()}>Logout</button>
        </div>
      )}
    </div>
  );
}

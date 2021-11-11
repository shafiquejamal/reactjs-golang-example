import { useAuth0 } from "@auth0/auth0-react";
import { Ping } from "../ping/Ping";

function Index() {
    const { loginWithRedirect, user } = useAuth0();

    return (<div>
        <Ping />
        {user?.email || 'aaa'}
        <button onClick={loginWithRedirect}>Login</button>
      </div>
    );
  }
  
  export default Index;
  
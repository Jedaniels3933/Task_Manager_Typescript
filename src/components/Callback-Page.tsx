import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./Page-layout";

const CallbackPage: React.FC = () => {
    
    const { error } = useAuth0();

    if (error) {
        return <div>oops... {error.message} </div>;
    }

    return (
        <PageLayout>
            <h1>Call Back Page</h1>
        </PageLayout>
    );
};
export default CallbackPage;
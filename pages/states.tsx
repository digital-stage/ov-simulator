import {useEffect} from "react";
import useAuth from "../libs/useAuth";
import useStage from "../libs/useStage";

const email = "test@digital-stage.org";
const password = "testtesttest";


const States = () => {
    const {signInWithEmailAndPassword, token} = useAuth();
    const {device, soundCards, stageMembers, customStageMembers} = useStage();

    useEffect(() => {
        // Sign in
        signInWithEmailAndPassword(email, password);
    }, []);

    return (
        <div>
            <ul>
                <li>
                    Token: {token ? "ok" : "requesting"}
                </li>
                <li>
                    Device:
                    {device ? <pre>{JSON.stringify(device, null, 2)}</pre> : "requesting"}
                </li>
                <li>
                    Sound cards:
                    <pre>
                    {JSON.stringify(soundCards, null, 2)}
                    </pre>
                </li>
                <li>
                    Stage members:
                    <pre>
                    {JSON.stringify(stageMembers, null, 2)}
                    </pre>
                </li>
                <li>
                    Custom stage members:
                    <pre>
                    {JSON.stringify(customStageMembers, null, 2)}
                    </pre>
                </li>
            </ul>
        </div>
    )
};
export default States;

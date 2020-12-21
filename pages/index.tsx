import {useEffect} from "react";
import useAuth from "../libs/useAuth";
import useStage, {MAC} from "../libs/useStage";
import SoundCardSimulator from "../components/SoundCardSimulator";
import PresetEditor from "../components/PresetEditor";

const email = "test@digital-stage.org";
const password = "testtesttest";


const Index = () => {
    const {signInWithEmailAndPassword, token} = useAuth();
    const {device, soundCards, presets} = useStage();

    useEffect(() => {
        // Sign in
        signInWithEmailAndPassword(email, password);
    }, []);

    return (
        <div>
            <p>
                Usually any ov-client will do the following steps when connecting:
            </p>
            <ul>
                <li>
                    1.) Get token: {token ? "ok" : "requesting"}
                </li>
                <li>
                    2.) Identify this Device by it's mac address '{MAC}':
                    {device ? <pre>{JSON.stringify(device, null, 2)}</pre> : "requesting"}
                </li>
                <li>
                    The ov-client now can update the server about the connected sound cards.
                    <SoundCardSimulator/>
                </li>
            </ul>
            <p>
                Inside the webclient we now have the following entities:
            </p>
            <ul>
                <li>
                    Available sound cards (even if not used by any ov-client):
                    <ul>
                        {soundCards.allIds.map(id => soundCards.byId[id]).map(soundCard => (
                            <PresetEditor soundCard={soundCard}/>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
};
export default Index;

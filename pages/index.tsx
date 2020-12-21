import {useEffect, useState} from "react";
import useAuth from "../libs/useAuth";
import {ITeckosClient, TeckosClientWithJWT} from 'teckos-client';
import {Device} from "../utils/types/Device";
import {ServerDeviceEvents} from "../utils/types/SocketEvents";

const email = "test@digital-stage.org";
const password = "testtesttest";

const Index = () => {
    const {signInWithEmailAndPassword, token} = useAuth();
    const [socket, setSocket] = useState<ITeckosClient>();
    const [device, setDevice] = useState<Device>();

    useEffect(() => {
        // Sign in
        signInWithEmailAndPassword(email, password);
    }, []);

    useEffect(() => {
        // Got token, register self as device
        const initialDevice: Partial<Device> = {
            name: 'OV Simulator',
            canOv: true,
            canAudio: true,
            sendAudio: true,
            receiveAudio: true,
            soundCardIds: [],
        };

        const nSocket = new TeckosClientWithJWT(
            process.env.NEXT_PUBLIC_API_URL,
            {
                reconnection: true,
                timeout: 1000,
            },
            token,
            {
                device: initialDevice,
            }
        );

        nSocket.on("connect", () =>{
            console.log("connected!")
        });


        nSocket.on(ServerDeviceEvents.LOCAL_DEVICE_READY, (device: Device) =>{
            console.log("connected!")
            setDevice(device);
        })

        nSocket.connect();

        setSocket(nSocket);

    }, [token])

    return (
        <div>
            <ul>
                <li>
                    Token: {token ? "ok" : "requesting"}
                </li>
                <li>
                    Device:
                    {device ? <pre>{JSON.stringify(device, null, 2)}</pre>: "requesting"}
                </li>
            </ul>
        </div>
    )
};
export default Index;

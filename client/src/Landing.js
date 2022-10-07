import {useAuth} from "./providers/AuthProvider";

const Landing = () => {
    const auth = useAuth()
    return (
        <>
            <h1 className="text-3xl text-red-500 font-bold underline">
                Hello {auth.name}!
            </h1>
        < />
    );
}

export {Landing};
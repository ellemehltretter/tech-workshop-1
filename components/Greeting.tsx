type Props = {
    name: string;
}

const Greeting = ({name}: Props) => {
    return(
        <p className="pt-4 text-fuchsia-900">Hi, {name}!</p>
    )
}

export default Greeting;
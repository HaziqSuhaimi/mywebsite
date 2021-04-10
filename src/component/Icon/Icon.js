const Icon = ({ name, size, color }) => {
    return (
        <i style={{ fontSize:size, color }} className={`bi-${name}`} />
    )
}

export default Icon
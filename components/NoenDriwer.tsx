type NeonDriwerProps = {
    arrow: string,
    className?:string
}

const NoenDriwer = ({arrow, className = ""}:NeonDriwerProps) => {
    return (
        <div className={`relative  flex justify-center items-center max-h-px ${className}`}>
            <div className="absolute   w-full h-0.5 overflow-hidden">
                <div className={`w-1/5 h-full animate-neon-${arrow} rounded-full bg-cyan-400`}></div>
            </div>
            <div className="absolute w-full opacity-[0.5] bg-gray-400 min-h-px "></div>
        </div>
    )
}

export default NoenDriwer
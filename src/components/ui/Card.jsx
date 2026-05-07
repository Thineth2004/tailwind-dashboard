export default function Card({ children }) {
    return (
        <div
            className={`
                flex 
                items-center
                justify-between
                bg-white
                p-6
                rounded-xl
                shadow-sm
                hover:shadow-md
                transition
            `}
        >
            {children}
        </div>
    );
}
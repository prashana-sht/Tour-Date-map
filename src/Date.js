export default function Date() {
    return (
        <div className="dates">
            <Month
                isSold={true}
                name="September"
            /><hr/>

            <Month
                isSold={true}
                name="October"
            /><hr/>

            <Month
                isSold={false}
                name="November"
            />
        </div>
    )
}

function Month({ name, isSold }) {
    return (
        <div className="dates">
        {name} {isSold && <b> Sold out</b>}
        </div>
        )
}


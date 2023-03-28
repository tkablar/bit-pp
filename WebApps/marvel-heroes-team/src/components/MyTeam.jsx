export const MyTeam = ({name, image, id}) => {

    return (
        <div className="team-card" id={id}>
            <p>My Team</p>
            <div>
                <img src={image} alt="" />
            </div>
            <p>{name}</p>
        </div>
    )
}